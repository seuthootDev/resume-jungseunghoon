'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNestjs,
  SiMysql,
  SiMongodb,
  SiFastapi,
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazonwebservices,
  SiNginx,
  SiVercel,
  SiQt,
} from 'react-icons/si'
import { Md3dRotation } from 'react-icons/md'
import type { IconType } from 'react-icons'
import styles from './TechStack.module.css'

const techIconMap: Record<string, IconType> = {
  'TypeScript': SiTypescript,
  'React': SiReact,
  'Tailwind CSS': SiTailwindcss,
  'NestJS': SiNestjs,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'FastAPI': SiFastapi,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Docker': SiDocker,
  'AWS': SiAmazonwebservices,
  'Nginx': SiNginx,
  'Vercel': SiVercel,
  'PySide(Qt)': SiQt,
  'VTK': Md3dRotation,
}

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const techCategories = [
    {
      category: 'Frontend',
      techs: ['TypeScript', 'React',  'Tailwind CSS']
    },
    {
      category: 'Backend',
      techs: ['NestJS', 'MySQL', 'MongoDB', 'FastAPI']
    },
    {
      category: 'DevOps & Tools',
      techs: ['Git', 'GitHub', 'Docker', 'AWS', 'Nginx', 'Vercel']
    },
    {
      category: 'Desktop application & 3D',
      techs: ['PySide(Qt)', 'VTK']
    }
  ]

  return (
    <section id="skills" className={styles.techStack} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <span className={styles.label}>Technology</span>
            <h2 className={styles.title}>기술 스택</h2>
          </div>

          <div className={styles.grid}>
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className={styles.categoryCard}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                <div className={styles.techList}>
                  {category.techs.map((tech, techIndex) => {
                    const Icon = techIconMap[tech]
                    return (
                      <motion.span
                        key={tech}
                        className={styles.techTag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      >
                        {Icon && <Icon className={styles.techIcon} aria-hidden />}
                        <span>{tech}</span>
                      </motion.span>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
