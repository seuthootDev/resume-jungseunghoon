"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin,SquareTerminal,BicepsFlexed, Mail, ExternalLink, Code, BookOpen, Award, Briefcase, GraduationCap, Heart, Phone, MapPin, User, FileText, Database, Server, Terminal, Globe, Layers, Cpu, Shield, Book, Trophy, Star, Medal, Brain, Palette, Rocket, Lightbulb, Cloud, Network, Code2, BookOpenText, BookMarked, BookCheck, BookX, BookPlus, BookMinus } from "lucide-react"
import { useState } from "react"
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { useEffect } from "react";
import * as React from "react";

interface AccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  children: React.ReactNode;
  className?: string;
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
}

interface AccordionContentProps {
  children: React.ReactNode;
}

type AccordionItemElement = React.ReactElement<AccordionItemProps>;
type AccordionTriggerElement = React.ReactElement<AccordionTriggerProps>;
type AccordionContentElement = React.ReactElement<AccordionContentProps>;

// Accordion 컴포넌트 정의
const Accordion: React.FC<AccordionProps> = ({ type = "single", collapsible = true, children, className }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const toggleItem = (value: string) => {
    if (openItem === value && collapsible) {
      setOpenItem(null);
    } else {
      setOpenItem(value);
    }
  };
  return (
    <div className={className}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child) && child.type === AccordionItem) {
          return React.cloneElement(child as AccordionItemElement, {
            isOpen: openItem === child.props.value,
            onToggle: () => toggleItem(child.props.value)
          });
        }
        return child;
      })}
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({ value, children, isOpen, onToggle }) => (
  <div className="border-b">
    {React.Children.map(children, child => {
      if (React.isValidElement(child) && child.type === AccordionTrigger) {
        return React.cloneElement(child as AccordionTriggerElement, { onClick: onToggle });
      }
      if (React.isValidElement(child) && child.type === AccordionContent) {
        return isOpen ? child : null;
      }
      return child;
    })}
  </div>
);

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, onClick }) => (
  <button className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180" onClick={onClick}>
    {children}
    <svg className="h-4 w-4 shrink-0 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
  </button>
);

const AccordionContent: React.FC<AccordionContentProps> = ({ children }) => (
  <div className="pb-4 pt-0 text-sm">{children}</div>
);

export default function Resume() {
  const [showAllCerts, setShowAllCerts] = useState(false)

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
            <Link href="#certifications" className="text-sm font-medium transition-colors hover:text-primary">
              자격증
            </Link>
            <Link href="#language" className="text-sm font-medium transition-colors hover:text-primary">
              어학성적
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
              경력
            </Link>
            <Link href="#education" className="text-sm font-medium transition-colors hover:text-primary">
              교육
            </Link>
            <Link href="#volunteer" className="text-sm font-medium transition-colors hover:text-primary">
              봉사활동
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
                개발자로 전향한 후 짧은 기간 동안 총 9개의 자격증을 취득하며 지속적인 성장을 이어가고 있습니다. 현재는 데스크톱 애플리케이션의 웹 마이그레이션 프로젝트를 
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
              <Button asChild variant="outline" size="sm">
                <Link href="https://seuthootdev.tistory.com" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Blog
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
              <Link href="https://portfolio-uyt7.vercel.app/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                포트폴리오
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
          <div className="flex items-center gap-2 mb-6">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">기술 스택</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>프론트엔드</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
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
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>백엔드</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Link href="https://nestjs.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
                </Link>
                <Link href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                </Link>
                <Link href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                </Link>
                <Link href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI" />
                </Link>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">프로젝트</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>TOEIC 단어장</CardTitle>
                <CardDescription>2025.03 - 2025.04</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-md bg-muted">
                  <Image
                    src="https://raw.githubusercontent.com/seuthootDev/Toeic-Voca/main/screenshots/1.png"
                    alt="TOEIC 단어장"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  TOEIC 단어장 웹. 사용자 별 가중치 기반 학습 알고리즘.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">MongoDB Atlas</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Nginx</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href="https://github.com/seuthootDev/Toeic-Voca" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      코드
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="https://toeic-voca.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      데모
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>


            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          </div>
        </section>

        <section id="certifications" className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">자격증</h2>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Cpu className="h-6 w-6 text-primary" />
                    <CardTitle>정보처리기사</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">한국산업인력공단(HRD Korea) | 2024.09.10</p>
                  <p className="text-sm text-muted-foreground">자격번호: 24202010662E</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Cloud className="h-6 w-6 text-primary" />
                    <CardTitle>AWS Certified Solutions Architect - Associate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Amazon Web Services(AWS) | 2024.12.28</p>
                  <p className="text-sm text-muted-foreground">자격번호: 83c441e6f7c9486299b711976b4be75a</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Cloud className="h-6 w-6 text-primary" />
                    <CardTitle>AWS Certified Developer - Associate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Amazon Web Services(AWS) | 2025.01.11</p>
                  <p className="text-sm text-muted-foreground">자격번호: c55cfdf3325c43549739f2f9f015ed42</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Cloud className="h-6 w-6 text-primary" />
                    <CardTitle>AWS Certified SysOps Administrator - Associate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Amazon Web Services(AWS) | 2025.01.31</p>
                  <p className="text-sm text-muted-foreground">자격번호: 9595ba6a839c46a38fc4ec4b54f8ad75</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Database className="h-6 w-6 text-primary" />
                    <CardTitle>SQLD</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">한국데이터산업진흥원(K DATA) | 2024.09.20</p>
                  <p className="text-sm text-muted-foreground">자격번호: SQLD-054002358</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Brain className="h-6 w-6 text-primary" />
                    <CardTitle>ADsP</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">한국데이터산업진흥원(K DATA) | 2024.09.06</p>
                  <p className="text-sm text-muted-foreground">자격번호: ADsP-042005357</p>
                </CardContent>
              </Card>

              {showAllCerts && (
                <>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Cloud className="h-6 w-6 text-primary" />
                        <CardTitle>AWS Certified Cloud Practitioner</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Amazon Web Services(AWS) | 2024.11.23</p>
                      <p className="text-sm text-muted-foreground">자격번호: b596609e89fb4a3299efcdb758c5252f</p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Network className="h-6 w-6 text-primary" />
                        <CardTitle>네트워크 관리사 2급</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">한국정보통신자격협회(ICQA) | 2024.12.10</p>
                      <p className="text-sm text-muted-foreground">자격번호: NT2076028</p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Terminal className="h-6 w-6 text-primary" />
                        <CardTitle>리눅스마스터 2급</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">한국정보통신진흥협회(KAIT) | 2024.10.04</p>
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
          <div className="flex items-center gap-2 mb-6">
            <Globe className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">어학성적</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">경력</h2>
          </div>
          <div className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
               <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <CardTitle>소프트웨어 개발자</CardTitle>
                    <CardDescription>(주)헤르스</CardDescription>
                  </div>
                  <Badge variant="outline">2023.08 - 현재</Badge>
                </div>
              
                <div className="w-full mt-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white font-bold shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="https://portfolio-uyt7.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-5 w-5 animate-bounce" />
                      포트폴리오 보러가기
                    </Link>
                  </Button>
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

                {/* 프로젝트 세부 내용 - 아코디언 형식 */}
                <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <span className="font-semibold text-base text-gray-800">
                        프로젝트 : 화학사고 예방관리를 위한 감지경보체계 최적화 예측 및 운영기술 개발
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-4 space-y-2 text-sm text-muted-foreground">
                        <p><span className="font-medium text-gray-700">역할:</span> 통합 프로그램 개발</p>
                        <p><span className="font-medium text-gray-700">내용:</span></p>
                        <ul className="ml-6 list-disc space-y-1">
                          <li>CFD 시뮬레이션 결과를 처리하고 시각화할 수 있는 3D GUI 애플리케이션 설계 및 개발</li>
                          <li>모듈화된 워크플로우 시스템을 도입하여 사용자가 필요한 기능만 선택하여 사용할 수 있도록 구현</li>
                          <li>유체 확산 시나리오 기반 감지기 배치 최적화 알고리즘 적용 및 검증 시스템 구축</li>
                          <li>스탠드얼론과 웹 버전 동시 개발</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <CardTitle>주임 · 영업관리자</CardTitle>
                  <CardDescription>(주)이브자리</CardDescription>
                </div>
                <Badge variant="outline">2021.05 - 2022.12</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                <li>상품 기획 및 매출 데이터 기반의 영업 전략 수립</li>
                <li>주요 거래처 응대 및 주문 수주 관리</li>
                <li>생산 및 물류 일정 조율과 입출고일 공지</li>
                <li>매출 실적 및 성과보고 자료 작성</li>
                <li>내부 팀 및 외부 유관부서와의 협업을 통한 업무 효율화</li>
              </ul>
            </CardContent>
          </Card>


            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle>중위 · 소대장</CardTitle>
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
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">교육</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
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

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle>항해 플러스 백엔드 과정 9기</CardTitle>
                    <CardDescription>팀스파르타</CardDescription>
                  </div>
                  <Badge variant="outline">2025.07 - 2025.09</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground">
                  <li>TDD와 클린 아키텍처 기반 서버 구축
                    <ul className="ml-6 list-disc space-y-1 mt-1">
                      <li>대기업 시나리오를 바탕으로 TDD, 클린 아키텍처를 적용한 견고하고 유연한 서버 구축</li>
                      <li>Spring, NestJS, Thymeleaf 등을 활용하여 실제 서비스 개발</li>
                      <li>개인 과제 수행 후 팀 리뷰를 통해 설계 및 코드 개선</li>
                    </ul>
                  </li>
                  <li>대용량 트래픽과 데이터 처리
                    <ul className="ml-6 list-disc space-y-1 mt-1">
                      <li>대량의 트래픽을 처리하기 위한 다양한 전략 학습</li>
                      <li>Redis를 활용한 재고 처리, Kafka를 이용한 대용량 트래픽 제어 등 현업 사례 적용</li>
                    </ul>
                  </li>
                  <li>장애 대응 훈련
                    <ul className="ml-6 list-disc space-y-1 mt-1">
                      <li>실전과 유사한 장애 대응 훈련을 통해 고가용성 설계 및 문제 해결 능력 배양</li>
                    </ul>
                  </li>
                </ul>
              </CardContent>
            </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle>자바 웹 개발자 풀스택 과정</CardTitle>
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

        {/* 봉사활동 섹션 */}
        <section id="volunteer" className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">봉사활동</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>헌혈</CardTitle>
                <CardDescription>대한적십자사혈액관리본부</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">68회 / 272시간</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>생활지원</CardTitle>
                <CardDescription>서울특별시립중랑노인전문요양원 등</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">59시간</p>
                <p className="text-sm text-muted-foreground">식사, 목욕, 세탁, 간병, 미용 지원</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 연락처 섹션 */}
        <section id="contact" className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Phone className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">연락처</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Mail className="mb-4 h-10 w-10 text-primary" />
              <CardTitle className="text-lg">이메일</CardTitle>
              <CardDescription className="mt-2">
                <Link href="mailto:seuthootdev@gmail.com" className="hover:underline">
                  seuthootdev@gmail.com
                </Link>
              </CardDescription>
            </Card>

            <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
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

            <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Linkedin className="mb-4 h-10 w-10 text-primary" />
              <CardTitle className="text-lg">LinkedIn</CardTitle>
              <CardDescription className="mt-2">
                <Link
                  href="https://linkedin.com/in/seunghoon-jung-38b270335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/seunghoon-jung-38b270335
                </Link>
              </CardDescription>
            </Card>

            <Card className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ExternalLink className="mb-4 h-10 w-10 text-primary" />
              <CardTitle className="text-lg">블로그</CardTitle>
              <CardDescription className="mt-2">
                <Link
                  href="https://seuthootdev.tistory.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  seuthootdev.tistory.com
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

