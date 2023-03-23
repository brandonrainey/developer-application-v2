import React from 'react'
import styles from '../styles/ProgressButton.module.scss'

interface ApplicantInfo {
  name: string
  email: string
  phone: string
  resume: string
  skills: {
    name: string
    icon: string
  }[]
}

interface ButtonProps {
  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>
  applicantInfo: {
    name: string
    email: string
    phone: string
    resume: string
    skills: { name: string; icon: string }[]
  }
  setApplicantInfo: React.Dispatch<React.SetStateAction<ApplicantInfo>>
  isEmpty: boolean
}

export default function ProgressButton({
  progress,
  setProgress,
  applicantInfo
}: ButtonProps) {
  function handleNextClick() {
    setProgress(progress + 1)
  }

  function handleBackClick() {
    setProgress(progress - 1)
  }

  const isEmpty = applicantInfo.name == '' || applicantInfo.email == '' || applicantInfo.phone == ''

  return (
    <div className={styles.main}>
      <button
        className={progress == 1 ? styles.hidden : styles.back}
        onClick={handleBackClick}
      >
        Go Back
      </button>

      <button className={`${styles.next} ${progress == 4 ? isEmpty ? styles.disabled : null : null}`} onClick={handleNextClick} disabled={progress == 4 ? isEmpty : false}>
        {progress == 4 ? 'Finish' : 'Next Step'}
      </button>
    </div>
  )
}
