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

interface PersonalInfoProps {
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


  

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedApplicantInfo = {
    ...applicantInfo, 
    name: event.target.value 
  }

    setApplicantInfo(updatedApplicantInfo)
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedApplicantInfo = {
      ...applicantInfo, 
      email: event.target.value 
    }

    setApplicantInfo(updatedApplicantInfo)
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedApplicantInfo = {
      ...applicantInfo, 
      phone: event.target.value 
    }

    setApplicantInfo(updatedApplicantInfo)
  }

  console.log(applicantInfo)

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
              value={applicantInfo.name}
            ></input>
          </form>
        </div>

        <div>
          <label>Email</label>
          <form>
            <input
              placeholder="e.g. stephenking@lorem.com"
              onChange={handleEmailChange}
              value={applicantInfo.email}
            ></input>
          </form>
        </div>

        <div>
          <label>Phone Number</label>
          <form>
            <input
              placeholder="+1 234 567 890"
              onChange={handlePhoneChange}
              value={applicantInfo.phone}
            ></input>
          </form>
        </div>
      </div>
    </div>
  )
}
