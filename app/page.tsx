"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Resume() {
  const [showAllCerts, setShowAllCerts] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold">정승훈</div>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              소개
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              기술스택
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              프로젝트
            </Link>
            {/* <Link href="#portfolio" className="text-sm font-medium transition-colors hover:text-primary">
              포트폴리오
            </Link> */}
            <Link href="#certifications" className="text-sm font-medium transition-colors hover:text-primary">
              자격증
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              연락처
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* 자기소개 섹션 */}
        <section id="about" className="mb-16 grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">안녕하세요, 저는 정승훈입니다</h1>
            <h2 className="text-2xl font-medium text-muted-foreground">소프트웨어 개발자</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                수학을 전공하며 쌓아온 논리적 사고를 바탕으로 소프트웨어 개발에 임하고 있습니다. 
                특히 현재 VTK(Visualization Toolkit)를 활용한 3D 시각화 작업에서 선형대수와 기하학적 지식이 큰 도움이 되어, 
                학문적 배경이 실무에 직접적으로 기여하는 것을 경험하고 있습니다.
              </p>
              
              <p>
                이전 직장에서의 ERP 시스템 사용 경험은 실제 현장에서 필요로 하는 소프트웨어가 갖춰야 할 요건들을 이해하는 데 
                큰 도움이 되었습니다. 이를 통해 사용자 중심의 실용적인 소프트웨어를 개발하는 것의 중요성을 깊이 이해하게 되었습니다.
              </p>

              <p>
                개발자로 전향한 후 짧은 기간 동안 AWS 자격증 4개를 포함한 총 9개의 자격증을 취득하며 
                지속적인 성장을 이어가고 있습니다. 현재는 데스크톱 애플리케이션의 웹 마이그레이션 프로젝트를 
                주도적으로 진행하면서, 풀스택 개발 역량을 강화하고 있습니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href="mailto:seuthootdev@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  연락하기
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="https://github.com/seuthootDev" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="https://linkedin.com/in/seunghoon-jung-38b270335" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-full border md:h-[300px] md:w-[300px]">
            <Image
              src="https://github.com/seuthootDev.png"
              alt="정승훈 프로필 사진"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* 기술스택 섹션 */}
        <section id="skills" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">기술 스택</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>프론트엔드</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Link href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                </Link>
                <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                </Link>
                <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                </Link>
                <Link href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
                </Link>
                <Link href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
                </Link>
                <Link href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>백엔드</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Link href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                </Link>
                <Link href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                </Link>
                <Link href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
                </Link>
                <Link href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
                </Link>
                <Link href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
                </Link>
                <Link href="https://camunda.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Camunda-25262A?style=for-the-badge&logo=camunda&logoColor=white" alt="Camunda" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>도구 및 기타</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Link href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                </Link>
                <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                </Link>
                <Link href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
                </Link>
                <Link href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS" />
                </Link>
                <Link href="https://www.qt.io/qt-for-python" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/PyQt-41CD52?style=for-the-badge&logo=qt&logoColor=white" alt="PyQt" />
                </Link>
                <Link href="https://vtk.org/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/VTK-3E7EAB?style=for-the-badge&logo=vtk&logoColor=white" alt="VTK" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 프로젝트 섹션 */}
        <section id="projects" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">프로젝트</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>타로 리딩</CardTitle>
                <CardDescription>2025.02 - 2025.03</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-md bg-muted">
                  <Image
                    src="https://raw.githubusercontent.com/seuthootDev/Tarot-Reading/main/screenshots/2.png"
                    alt="타로 리딩 스크린샷"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  React와 Next.js를 활용한 타로 리딩 반응형 웹. Google Gemini API를 활용한 타로 카드 해석. SNS 공유 기능 포함.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Google Gemini API</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href="https://github.com/seuthootDev/Tarot-Reading" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      코드
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="https://tarot-reading-virid.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      데모
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI 리뷰 생성기</CardTitle>
                <CardDescription>2025.03 - 2025.03</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-md bg-muted">
                  <Image
                    src="https://raw.githubusercontent.com/seuthootDev/review-generator/main/screenshots/2.png"
                    alt="AI 리뷰 생성기 스크린샷"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  AI를 활용한 리뷰 자동 생성 웹. 파라미터에 따라 결정되는 프롬프트.
                </p>
                <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Google Gemini API</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href="https://github.com/seuthootDev/review-generator" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      코드
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="https://review-generator-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      데모
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>준비중</CardTitle>
                <CardDescription>2025.01 - 2025.02</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-md bg-muted">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="프로젝트 3 스크린샷"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  준비중
                </p>
                <div className="flex flex-wrap gap-2">
                  {/* <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Firebase</Badge> */}
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href="https://github.com/seuthootDev" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      코드
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      데모
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 포트폴리오 섹션 */}
        {/* <section id="portfolio" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">포트폴리오</h2>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">전체</TabsTrigger>
              <TabsTrigger value="web">웹</TabsTrigger>
              <TabsTrigger value="desktop">데스크톱</TabsTrigger>
              <TabsTrigger value="design">디자인</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-md bg-muted">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Portfolio+${i + 1}`}
                    alt={`포트폴리오 항목 ${i + 1}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold text-white">포트폴리오 {i + 1}</h3>
                    <p className="text-center text-sm text-white/80">준비중</p>
                    <Button asChild variant="secondary" size="sm" className="mt-2">
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        자세히 보기
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="web" className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-md bg-muted">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Web+${i + 1}`}
                    alt={`웹 포트폴리오 항목 ${i + 1}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold text-white">웹 {i + 1}</h3>
                    <p className="text-center text-sm text-white/80">준비중</p>
                    <Button asChild variant="secondary" size="sm" className="mt-2">
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        자세히 보기
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="desktop" className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-md bg-muted">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Desktop+${i + 1}`}
                    alt={`데스크톱 포트폴리오 항목 ${i + 1}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold text-white">데스크톱 앱 {i + 1}</h3>
                    <p className="text-center text-sm text-white/80">준비중</p>
                    <Button asChild variant="secondary" size="sm" className="mt-2">
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        자세히 보기
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="design" className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {Array.from({ length: 1 }).map((_, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-md bg-muted">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Design+${i + 1}`}
                    alt={`디자인 포트폴리오 항목 ${i + 1}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold text-white">디자인 {i + 1}</h3>
                    <p className="text-center text-sm text-white/80">준비중</p>
                    <Button asChild variant="secondary" size="sm" className="mt-2">
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        자세히 보기
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </section> */}

        {/* 자격증 섹션 */}
        <section id="certifications" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">자격증</h2>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>정보처리기사</CardTitle>
                  <CardDescription>한국산업인력공단(HRD Korea) | 2024.09.10</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">자격번호: 24202010662E</p>
                </CardContent>
              </Card>

            <Card>
              <CardHeader>
                <CardTitle>AWS Certified Solutions Architect - Associate</CardTitle>
                <CardDescription>Amazon Web Services(AWS) | 2024.12.28</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">자격번호: 83c441e6f7c9486299b711976b4be75a</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AWS Certified Developer - Associate</CardTitle>
                <CardDescription>Amazon Web Services(AWS) | 2025.01.11</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">자격번호: c55cfdf3325c43549739f2f9f015ed42</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AWS Certified SysOps Administrator - Associate</CardTitle>
                <CardDescription>Amazon Web Services(AWS) | 2025.01.31</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">자격번호: 9595ba6a839c46a38fc4ec4b54f8ad75</p>
              </CardContent>
            </Card>

              <Card>
                <CardHeader>
                  <CardTitle>SQLD</CardTitle>
                  <CardDescription>한국데이터산업진흥원(K DATA) | 2024.09.20</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">자격번호: SQLD-054002358</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ADsP</CardTitle>
                  <CardDescription>한국데이터산업진흥원(K DATA) | 2024.09.06</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">자격번호: ADsP-042005357</p>
                </CardContent>
              </Card>

              {showAllCerts && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>AWS Certified Cloud Practitioner</CardTitle>
                      <CardDescription>Amazon Web Services(AWS) | 2024.11.23</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">자격번호: b596609e89fb4a3299efcdb758c5252f</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>네트워크 관리사 2급</CardTitle>
                      <CardDescription>한국정보통신자격협회(ICQA) | 2024.12.10</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">자격번호: NT2076028</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>리눅스 마스터 2급</CardTitle>
                      <CardDescription>한국정보통신진흥협회(KAIT) | 2024.10.04</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">자격번호: LMS-2403-007805</p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="mt-4"
              >
                {showAllCerts ? "접기" : "더보기"}
              </Button>
            </div>
          </div>
        </section>

        {/* 어학성적 섹션 */}
        <section id="language" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">어학성적</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>OPIc</CardTitle>
                <CardDescription>American Council on the Teaching of Foreign Languages(ACTFL) | 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>등급: IH</p>
                  <p>인증서 번호: BBUL-1R2D-G843-U8TL-F8AD</p>
                  <p>유효기간: 2025.03.16 - 2027.03.15</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 추가 섹션: 경력 */}
        <section id="experience" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">경력</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle>소프트웨어 개발자</CardTitle>
                    <CardDescription>(주)헤르스</CardDescription>
                  </div>
                  <Badge variant="outline">2023.08 - 현재</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                  <li>환경부 과제 응용 소프트웨어 개발 및 유지보수</li>
                  <li>PyQt와 VTK를 활용한 데스크톱 기반 CFD 센서 배치 최적화 프로그램 개발</li>
                  <li>데스크톱 애플리케이션의 웹 버전 개발:
                    <ul className="ml-6 list-disc space-y-1 mt-1">
                      <li>React + Vite를 활용한 메인 프론트엔드 개발</li>
                      <li>VTK.js를 활용한 3D 시각화 모듈 구현</li>
                      <li>FastAPI 기반 백엔드 서버 구축</li>
                      <li>MongoDB를 활용한 데이터 저장 및 관리</li>
                      <li>Docker를 활용한 마이크로서비스 아키텍처 구현 및 컨테이너화</li>
                    </ul>
                  </li>
                  <li>Chama 라이브러리를 활용한 센서 최적화 모델 개발 및 구현</li>
                  <li>FORTRAN으로 작성된 SLAB 유체 확산 모델을 Python으로 마이그레이션 및 현대화</li>
                  <li>Camunda를 활용한 워크플로우 자동화 시스템 구현</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle>중위</CardTitle>
                    <CardDescription>해병 1사단</CardDescription>
                  </div>
                  <Badge variant="outline">2019.03 - 2021.02</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                  <li>ROTC 장교로서 소대장 및 중대장 직책 수행</li>
                  <li>100명 이상의 병력 지휘 및 관리 경험</li>
                  <li>부대 운영 계획 수립 및 실행</li>
                  <li>위기 상황 대처 및 문제 해결 능력 향상</li>
                  <li>효과적인 의사소통과 팀워크 역량 강화</li>
                  <li>리더십 및 조직 관리 능력 배양</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 추가 섹션: 교육 */}
        <section id="education" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">교육</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle>수학과</CardTitle>
                    <CardDescription>연세대학교 미래캠퍼스</CardDescription>
                  </div>
                  <Badge variant="outline">2015.03 - 2019.02</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                  <li>수학과에서 수리 통계, 대수학, 해석학, 위상수학 등을 깊이있게 학습</li>
                  <li>논리적 사고력과 문제 해결 능력 배양</li>
                  <li>수학적 모델링과 알고리즘 설계 능력 향상</li>
                  <li>데이터 분석 및 통계적 추론 방법론 습득</li>
                </ul>
              </CardContent>
            </Card>

             <Card>
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle>자바 웹 개발 풀스택 과정</CardTitle>
                    <CardDescription>하이미디어 학원 구리캠퍼스</CardDescription>
                  </div>
                  <Badge variant="outline">2023.04 - 2023.08</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                  <li>Java, Spring Framework 기반의 웹 애플리케이션 개발</li>
                  <li>HTML, CSS, JavaScript를 활용한 프론트엔드 개발</li>
                  <li>MySQL, Oracle 등 관계형 데이터베이스 학습</li>
                  <li>Linux 서버 환경 구축 및 운영</li>
                  <li>팀 프로젝트 수행을 통한 실전 경험 습득</li>
                </ul>
              </CardContent>
            </Card> 
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section id="contact" className="mb-16">
          <h2 className="mb-6 text-3xl font-bold">연락처</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col items-center p-6 text-center">
              <Mail className="mb-4 h-10 w-10 text-primary" />
              <CardTitle className="text-lg">이메일</CardTitle>
              <CardDescription className="mt-2">
                <Link href="mailto:seuthootdev@gmail.com" className="hover:underline">
                seuthootdev@gmail.com
                </Link>
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center">
              <Github className="mb-4 h-10 w-10 text-primary" />
              <CardTitle className="text-lg">GitHub</CardTitle>
              <CardDescription className="mt-2">
                <Link
                  href="https://github.com/seuthootDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/seuthootDev
                </Link>
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center">
              <Linkedin className="mb-4 h-10 w-10 text-primary" />
              <CardTitle className="text-lg">LinkedIn</CardTitle>
              <CardDescription className="mt-2">
                <Link
                  href="www.linkedin.com/in/seunghoon-jung-38b270335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/seunghoon-jung-38b270335
                </Link>
              </CardDescription>
            </Card>
            <Card className="flex flex-col items-center p-6 text-center">
              <ExternalLink className="mb-4 h-10 w-10 text-primary" />
              <CardTitle className="text-lg">블로그</CardTitle>
              <CardDescription className="mt-2">
                <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  준비중
                </Link>
              </CardDescription>
            </Card>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 JUNG SEUNGHOON. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon">
              <Link href="https://github.com/seuthootDev" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="https://linkedin.com/in/seunghoon-jung-38b270335" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="mailto:seuthootdev@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

