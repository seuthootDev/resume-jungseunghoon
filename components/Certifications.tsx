'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Certifications.module.css'

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    { name: '정보처리기사', issuer: '한국산업인력공단(HRD Korea)', date: '2024.09.10', id: '24202010662E' },
    { name: 'AWS Certified Solutions Architect - Associate', issuer: 'Amazon Web Services(AWS)', date: '2024.12.28', id: '83c441e6f7c9486299b711976b4be75a' },
    { name: 'AWS Certified Developer - Associate', issuer: 'Amazon Web Services(AWS)', date: '2025.01.11', id: 'c55cfdf3325c43549739f2f9f015ed42' },
    { name: 'AWS Certified SysOps Administrator - Associate', issuer: 'Amazon Web Services(AWS)', date: '2025.01.31', id: '9595ba6a839c46a38fc4ec4b54f8ad75' },
    { name: 'SQLD', issuer: '한국데이터산업진흥원(K DATA)', date: '2024.09.20', id: 'SQLD-054002358' },
    { name: 'ADsP', issuer: '한국데이터산업진흥원(K DATA)', date: '2024.09.06', id: 'ADsP-042005357' },
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services(AWS)', date: '2024.11.23', id: 'b596609e89fb4a3299efcdb758c5252f' },
    { name: '네트워크 관리사 2급', issuer: '한국정보통신자격협회(ICQA)', date: '2024.12.10', id: 'NT2076028' },
    { name: '리눅스마스터 2급', issuer: '한국정보통신진흥협회(KAIT)', date: '2024.10.04', id: 'LMS-2403-007805' }
  ]

  return (
    <section id="certifications" className={styles.certifications} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <span className={styles.label}>Credentials</span>
            <h2 className={styles.title}>자격증</h2>
          </div>

          <div className={styles.certGrid}>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className={styles.certCard}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.certIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className={styles.certContent}>
                  <h3 className={styles.certName}>{cert.name}</h3>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  <div className={styles.certFooter}>
                    <span className={styles.certDate}>{cert.date}</span>
                    <span className={styles.certId}>{cert.id}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
