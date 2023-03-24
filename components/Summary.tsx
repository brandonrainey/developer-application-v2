import React from 'react'
import styles from '../styles/Summary.module.scss'

interface SummaryProps {
  applicantInfo: {
    name: string
    email: string
    phone: string
    resume: string
    skills: { name: string; icon: string }[]
  }
}

export default function Summary({ applicantInfo: data }: SummaryProps) {

  const isEmpty = data.name == '' || data.email == '' || data.phone == ''

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Summary</h1>
        <p>Double-check everything looks OK before confirming</p>
      </div>

      <div className={`${styles.infoContainer} `}>
        <p>Name: <span className={`${isEmpty ? styles.empty : null}`}>{data.name  ? data.name : 'Missing name!'}</span></p>
        <p>Email: <span className={`${isEmpty ? styles.empty : null}`}>{data.email ? data.email : 'Missing email!'}</span></p>
        <p>Phone: <span className={`${isEmpty ? styles.empty : null}`}>{data.phone ? data.phone : 'Missing phone number!'}</span> </p>
      </div>

      <div className={styles.skillsContainer}>
        {data.skills.map((item, index) => (
          <div className={styles.skill} key={index}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  )
}
