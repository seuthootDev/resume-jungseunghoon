'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Education.module.css'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      school: '연세대학교 미래캠퍼스',
      degree: '수학과',
      period: '2015.03 - 2019.02',
      description: '수리 통계, 대수학, 해석학, 위상수학 등 학습. 논리적 사고력과 문제 해결 능력 배양. 수학적 모델링과 알고리즘 설계 능력 향상.',
      image: null
    },
    {
      school: '팀스파르타',
      degree: '항해 플러스 백엔드 과정 9기',
      period: '2025.07 - 2025.09',
      description: 'TDD와 클린 아키텍처 기반 서버 구축, 대용량 트래픽(Redis/Kafka), 장애 대응 훈련 및 고가용성 설계',
      image: '/항해 플러스 수료 인증서.png'
    },
    {
      school: '하이미디어 학원 구리캠퍼스',
      degree: '자바 웹 개발자 풀스택 과정',
      period: '2023.04 - 2023.08',
      description: 'Java, Spring Framework 기반 웹 애플리케이션 개발. HTML, CSS, JavaScript 프론트엔드, MySQL/Oracle, Linux 서버 환경. 팀 프로젝트 수행.',
      image: null
    }
  ]

  return (
    <section id="education" className={styles.education} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <span className={styles.label}>Background</span>
            <h2 className={styles.title}>교육</h2>
          </div>

          <div className={styles.eduGrid}>
            {education.map((edu, index) => {
              const cardContent = (
                <>
                  <div className={styles.eduIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div className={styles.eduContent}>
                    <div className={styles.eduHeader}>
                      <h3 className={styles.degree}>{edu.degree}</h3>
                      <span className={styles.period}>{edu.period}</span>
                    </div>
                    <p className={styles.school}>{edu.school}</p>
                    <p className={styles.description}>{edu.description}</p>
                  </div>
                </>
              )

              if (edu.image) {
                return (
                  <motion.div
                    key={edu.school}
                    className={styles.eduRow}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className={styles.eduCard}>{cardContent}</div>
                    <div className={styles.eduFrameCard}>
                      <div className={styles.eduFrameInner}>
                        <a href={edu.image} target="_blank" rel="noopener noreferrer" className={styles.eduImageLink} title="크게 보기">
                          <Image src={edu.image} alt="수료 인증서" width={150} height={220} className={styles.eduImage} />
                        </a>
                      </div>
                      <a href={edu.image} target="_blank" rel="noopener noreferrer" className={styles.eduImageCaption}>
                        원본 보기
                      </a>
                    </div>
                  </motion.div>
                )
              }

              return (
                <motion.div
                  key={edu.school}
                  className={styles.eduCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {cardContent}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
