'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Volunteer.module.css'

export default function Volunteer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const volunteer = [
    {
      organization: '대한적십자사혈액관리본부',
      role: '헌혈',
      period: '-',
      description: '78회 / 312시간'
    },
    {
      organization: '서울특별시립중랑노인전문요양원 등',
      role: '생활지원',
      period: '-',
      description: '59시간. 식사, 목욕, 세탁, 간병, 미용 지원'
    }
  ]

  return (
    <section id="volunteer" className={styles.volunteer} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <span className={styles.label}>Community</span>
            <h2 className={styles.title}>봉사활동</h2>
          </div>

          <div className={styles.volGrid}>
            {volunteer.map((vol, index) => (
              <motion.div
                key={vol.organization}
                className={styles.volCard}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={styles.volIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div className={styles.volContent}>
                  <div className={styles.volHeader}>
                    <div>
                      <h3 className={styles.role}>{vol.role}</h3>
                      <p className={styles.organization}>{vol.organization}</p>
                    </div>
                  </div>
                  <p className={styles.description}>{vol.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
