import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const JUSO_ENG_ENDPOINT = 'https://business.juso.go.kr/addrlink/addrEngApi.do'

function corsHeaders(): HeadersInit {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'x-juso-proxy-secret, Content-Type',
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() })
}

export async function GET(request: NextRequest) {
  const proxySecret = process.env.JUSO_PROXY_SECRET
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

  const confmKey = process.env.JUSO_CONFIRM_KEY
  if (!confmKey) {
    return NextResponse.json(
      { error: 'Server misconfigured' },
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
