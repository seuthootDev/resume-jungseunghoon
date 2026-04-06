/**
 * Next.js 빌드가 `process.env.JUSO_CONFIRM_KEY` 를 빌드 타임에 undefined 로 박는 경우가 있어
 * (로컬 .env 에 없고 Vercel 대시보드에만 있을 때) 키 이름을 런타임에 조합해 읽는다.
 */
export function getJusoConfirmKey(): string {
  const name = ['JUSO', 'CONFIRM', 'KEY'].join('_')
  const raw = (process.env as Record<string, string | undefined>)[name]
  return typeof raw === 'string' ? raw.trim() : ''
}
