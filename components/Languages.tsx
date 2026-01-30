'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Languages.module.css'

export default function Languages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const languages = [
    {
      name: 'OPIc',
      level: 'IH',
      description: [
        'American Council on the Teaching of Foreign Languages(ACTFL) | 2025',
        '인증서 번호: BBUL-1R2D-G843-U8TL-F8AD',
        '유효기간: 2025.03.16 - 2027.03.15'
      ]
    }
  ]

  return (
    <section id="languages" className={styles.languages} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <span className={styles.label}>Communication</span>
            <h2 className={styles.title}>어학 성적</h2>
          </div>

          <div className={styles.langGrid}>
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                className={styles.langCard}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.langIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className={styles.langName}>{lang.name}</h3>
                <p className={styles.langLevel}>{lang.level}</p>
                <p className={styles.langDesc}>
                  {Array.isArray(lang.description)
                    ? lang.description.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < lang.description.length - 1 && <br />}
                        </span>
                      ))
                    : lang.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
