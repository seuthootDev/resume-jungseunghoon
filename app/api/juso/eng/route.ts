import { NextRequest, NextResponse } from 'next/server'
import { getJusoConfirmKey } from '@/lib/juso-env'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const JUSO_ENG_ENDPOINT = 'https://business.juso.go.kr/addrlink/addrEngApi.do'

/** 확장과 동일 경로에서 env·배포 일치 여부만 확인 (Juso 호출 없음) */
const HEALTH_KEYWORD = '__proxy_health__'

function corsHeaders(): HeadersInit {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'x-juso-proxy-secret, Content-Type',
    'Cache-Control': 'no-store, max-age=0, must-revalidate',
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() })
}

function getJusoProxySecret(): string | undefined {
  const name = ['JUSO', 'PROXY', 'SECRET'].join('_')
  const v = (process.env as Record<string, string | undefined>)[name]
  return typeof v === 'string' && v.trim() ? v.trim() : undefined
}

export async function GET(request: NextRequest) {
  const proxySecret = getJusoProxySecret()
  if (proxySecret) {
    const sent = request.headers.get('x-juso-proxy-secret')
    if (sent !== proxySecret) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401, headers: corsHeaders() }
      )
    }
  }

  const keyword = request.nextUrl.searchParams.get('keyword')?.trim() ?? ''
  if (!keyword) {
    return NextResponse.json(
      { error: 'keyword is required' },
      { status: 400, headers: corsHeaders() }
    )
  }
  if (keyword.length > 200) {
    return NextResponse.json(
      { error: 'keyword too long' },
      { status: 400, headers: corsHeaders() }
    )
  }

  if (keyword === HEALTH_KEYWORD) {
    const key = getJusoConfirmKey()
    return NextResponse.json(
      {
        ok: true,
        via: 'eng-route',
        jusoConfirmKeyConfigured: Boolean(key),
        keyCharLength: key.length,
        vercelEnv: process.env.VERCEL_ENV ?? null,
      },
      { headers: corsHeaders() }
    )
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[api/juso/eng]', {
      hasKeyword: true,
      JUSO_CONFIRM_KEY: getJusoConfirmKey() ? 'set' : 'MISSING',
    })
  }

  const confmKey = getJusoConfirmKey()
  if (!confmKey) {
    console.error('[api/juso/eng] JUSO_CONFIRM_KEY missing (runtime)')
    const error =
      process.env.NODE_ENV === 'development'
        ? 'Server misconfigured: JUSO_CONFIRM_KEY is missing (create .env.local — see .env.example)'
        : 'Server misconfigured'
    return NextResponse.json(
      { error, code: 'JUSO_KEY_MISSING' },
      { status: 500, headers: corsHeaders() }
    )
  }

  const params = new URLSearchParams({
    confmKey,
    currentPage: '1',
    countPerPage: '10',
    keyword,
    resultType: 'json',
  })

  let upstream: Response
  try {
    upstream = await fetch(`${JUSO_ENG_ENDPOINT}?${params.toString()}`, {
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    })
  } catch {
    return NextResponse.json(
      { error: 'Failed to reach Juso API' },
      { status: 502, headers: corsHeaders() }
    )
  }

  if (!upstream.ok) {
    return NextResponse.json(
      { error: 'Juso API error', status: upstream.status },
      { status: 502, headers: corsHeaders() }
    )
  }

  const data = await upstream.json()
  return NextResponse.json(data, { headers: corsHeaders() })
}
