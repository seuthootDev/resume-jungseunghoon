'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageContainer}>
              <Image
                src="https://github.com/seuthootDev.png"
                alt="정승훈 프로필 사진"
                width={280}
                height={280}
                className={styles.profileImage}
                priority
              />
            </div>
            <div className={styles.imageDecoration}></div>
          </motion.div>

          <motion.div 
            className={styles.text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className={styles.title}>
              안녕하세요,<br />
              <span className={styles.highlight}>소프트웨어 개발자</span> 정승훈입니다
            </h1>
            <p className={styles.description}>
            수학 전공을 통해 다져온 논리적 사고를 바탕으로 개발에 임하고 있습니다.<br />
            데스크톱 애플리케이션과 웹 풀스택 개발 경험을 보유하고 있으며,<br />
            CFD 기반 최적화 프로젝트에서 3D 시각화 개발을 담당한 경험이 있습니다.
            </p>
            <div className={styles.buttons}>
              <a href="mailto:seuthootdev@gmail.com" className={styles.primaryBtn}>
                연락하기
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="https://portfolio-uyt7.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                포트폴리오
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
