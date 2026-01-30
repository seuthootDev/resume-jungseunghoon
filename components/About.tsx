'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './About.module.css'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <span className={styles.label}>Introduction</span>
            <h2 className={styles.title}>소개</h2>
          </div>

          <div className={styles.content}>
            <div className={styles.mainText}>
              <p>
                수학을 전공하며 쌓아온 논리적 사고를 바탕으로 소프트웨어 개발에 임하고 있습니다.
                특히 <strong>VTK(Visualization Toolkit)</strong>를 활용한 3D 시각화 작업에서 선형대수와 기하학적 지식이 큰 도움이 되었으며,
                학문적 배경이 실무에 직접적으로 기여하는 것을 경험하였습니다.
              </p>
              <p>
              이전 직장에서 ERP 시스템을 실제 업무에 사용하며,
              사용자 입장에서 불편함이 누적될 경우 업무 효율에 직접적인 영향을 준다는 것을 체감했습니다.
              이 경험을 통해 개발자가 된 이후,
              사용자가 불편함 없이 사용할 수 있는 UX를 고려한 소프트웨어 설계의 중요성을 빠르게 인식할 수 있었습니다.
              </p>
              <p>
                개발자로 전향한 후 짧은 기간 동안 총 9개의 자격증을 취득하며 지속적인 성장을 이어가고 있습니다. 최근에는 데스크톱 애플리케이션의 웹 마이그레이션 프로젝트를
                주도적으로 진행하여, 웹 풀스택 개발 역량을 강화하였고, 최신 웹 기술 학습을 위해 직장과 병행하며 부트캠프를 수료하였습니다.
              </p>
            </div>

            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <h3>3D 시각화 & 풀스택</h3>
                  <p>VTK/PySide(Qt) 데스크톱 앱과 React·FastAPI 웹 개발 경험</p>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div>
                  <h3>지속적 성장</h3>
                  <p>정보처리기사, AWS, SQLD, ADsP 등 총 9개 자격증 취득 | 항해+ 부트캠프 수료</p>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <div className={styles.highlightIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3>협업과 소통</h3>
                  <p>팀원들과 원활한 커뮤니케이션을 통해 시너지를 창출합니다</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
