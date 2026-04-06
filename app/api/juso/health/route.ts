import { NextResponse } from 'next/server'
import { getJusoConfirmKey } from '@/lib/juso-env'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  const key = getJusoConfirmKey()
  const configured = Boolean(key)
  return NextResponse.json(
    {
      ok: true,
      jusoConfirmKeyConfigured: configured,
      keyCharLength: key.length,
      vercelEnv: process.env.VERCEL_ENV ?? null,
      hint: configured
        ? '환경 변수는 로드됨. eng 만 500이면 배포 버전·캐시·확장이 치는 URL 확인.'
        : 'Vercel Production 에 JUSO_CONFIRM_KEY 없음 → Redeploy',
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-store, max-age=0, must-revalidate',
      },
    }
  )
}
