'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      company: '(주)헤르스',
      position: '소프트웨어 개발자',
      period: '2023.08 - 2025.10',
      description: [
        '환경부 과제 응용 소프트웨어 개발 및 유지보수',
        'PySide(Qt)와 VTK를 활용한 데스크톱 기반 CFD 센서 배치 최적화 프로그램 개발',
        '데스크톱 애플리케이션의 웹 버전 개발: React + Vite 프론트엔드, VTK.js 3D 시각화, FastAPI 백엔드, GitLab CI/CD 자동 배포',
        'Chama 라이브러리를 활용한 센서 최적화 모델 개발 및 구현',
        'FORTRAN SLAB 유체 확산 모델을 Python으로 마이그레이션 및 현대화',
        'n8n을 활용한 워크플로우 자동화 시스템 구현',
        '프로젝트: 화학사고 예방관리를 위한 감지경보체계 최적화 예측 및 운영기술 개발 — CFD 시뮬레이션 결과 3D GUI, 모듈화된 워크플로우, 감지기 배치 최적화 알고리즘'
      ]
    },
    {
      company: '(주)이브자리',
      position: '주임 · 영업관리자',
      period: '2021.05 - 2022.12',
      description: [
        '상품 기획 및 매출 데이터 기반의 영업 전략 수립',
        '주요 거래처 응대 및 주문 수주 관리',
        '생산 및 물류 일정 조율과 입출고일 공지',
        '매출 실적 및 성과보고 자료 작성',
        '내부 팀 및 외부 유관부서와의 협업을 통한 업무 효율화'
      ]
    },
    {
      company: '해병 1사단',
      position: '중위 · 소대장',
      period: '2019.03 - 2021.02',
      description: [
        'ROTC 장교로서 소대장 및 중대장 직책 수행',
        '100명 이상의 병력 지휘 및 관리 경험',
        '부대 운영 계획 수립 및 실행',
        '위기 상황 대처 및 문제 해결 능력 향상',
        '효과적인 의사소통과 팀워크 역량 강화',
        '리더십 및 조직 관리 능력 배양'
      ]
    }
  ]

  const getYearLabel = (period: string) => {
    const startYear = period.slice(0, 4)
    return `${startYear.slice(2)}년`
  }

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <span className={styles.label}>Career</span>
            <h2 className={styles.title}>경력</h2>
          </div>

          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <span className={styles.timelineYear}>{getYearLabel(exp.period)}</span>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.expHeader}>
                    <div>
                      <h3 className={styles.position}>{exp.position}</h3>
                      <p className={styles.company}>{exp.company}</p>
                    </div>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                  <ul className={styles.expList}>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
