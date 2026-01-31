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
              <a href="https://github.com/seuthootDev" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                GitHub
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
