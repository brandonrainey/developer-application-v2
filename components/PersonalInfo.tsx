import React, { useState } from 'react'
import styles from '../styles/PersonalInfo.module.scss'

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

type PersonalInfoProps = {
  applicantInfo: {
    name: string
    email: string
    phone: string
    resume: string
    skills: { name: string; icon: string }[]
  }
  setApplicantInfo: React.Dispatch<React.SetStateAction<ApplicantInfo>>
}

export default function PersonalInfo({
  applicantInfo,
  setApplicantInfo,
}: PersonalInfoProps) {
  const [formattedNumber, setFormattedNumber] = useState('')

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const copyObj = applicantInfo

    copyObj.name = event.target.value

    setApplicantInfo(copyObj)
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const copyObj = applicantInfo

    copyObj.email = event.target.value

    setApplicantInfo(copyObj)
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const copyObj = applicantInfo

    copyObj.phone = event.target.value

    setApplicantInfo(copyObj)
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Personal Info</h1>
        <p>Please enter your name, email address, and phone number</p>
      </div>
      <div className={styles.formContainer}>
        <div>
          <label>Name</label>
          <form>
            <input
              placeholder="e.g. Stephen King"
              onChange={handleNameChange}
            ></input>
          </form>
        </div>

        <div>
          <label>Email</label>
          <form>
            <input
              placeholder="e.g. stephenking@lorem.com"
              onChange={handleEmailChange}
            ></input>
          </form>
        </div>

        <div>
          <label>Phone Number</label>
          <form>
            <input
              placeholder="+1 234 567 890"
              onChange={handlePhoneChange}
            ></input>
          </form>
        </div>
      </div>
    </div>
  )
}
