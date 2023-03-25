import React, { useState } from 'react'
import styles from '../styles/Resume.module.scss'
import Image from 'next/image'

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

interface ResumeProps {
  applicantInfo: {
    name: string
    email: string
    phone: string
    resume: string
    skills: { name: string; icon: string }[]
  }
  setApplicantInfo: React.Dispatch<React.SetStateAction<ApplicantInfo>>
}

export default function Resume({
  applicantInfo,
  setApplicantInfo,
}: ResumeProps) {

  const [resumeLocal, setResumeLocal] = useState('')

  function handleChange(e: any) {
    const copyInfo = applicantInfo

    copyInfo.resume = e.target.files[0].name

    setResumeLocal(e.target.files[0].name)

    setApplicantInfo(copyInfo)
  }

  
  return (
    <div className={styles.main}>
      <form action="" className={styles.uploadContainer}>
        <input
          type="file"
          id="file"
          name="file"
          className={styles.input}
          onChange={handleChange}
          accept=".pdf"
          data-testid="resume input"
        />
        <label htmlFor="file" className={styles.label}>
          Upload Resume
        </label>
        <div className={styles.nameContainer}>
          <p data-testid="resume name">
            {applicantInfo.resume != '' ? (
              <Image
                src="/checkmark.webp"
                width={30}
                height={30}
                alt="green checkmark"
              />
            ) : (
              ''
            )}
            {resumeLocal !== '' ? resumeLocal : applicantInfo.resume}
          </p>
        </div>
      </form>
    </div>
  )
}
