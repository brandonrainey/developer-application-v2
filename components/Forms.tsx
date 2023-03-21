import React from 'react'
import styles from '../styles/Forms.module.scss'
import Confirm from './Confirm'
import PersonalInfo from './PersonalInfo'
import ProgressButton from './ProgressButton'
import Resume from './Resume'
import Skills from './Skills'
import Summary from './Summary'

interface ApplicantInfoType {
  name: string
  email: string
  phone: string
  resume: string
  skills: {
    name: string
    icon: string
    key: number
  }[]
}

type FormProps = {
  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>
  applicantInfo: {
    name: string
    resume: string
    email: string
    phone: string
    skills: { name: string; icon: string; key: number }[]
  }
  setApplicantInfo: React.Dispatch<React.SetStateAction<any>>
  //try to find correct set state type
}

export default function Forms({
  progress,
  setProgress,
  applicantInfo,
  setApplicantInfo,
}: FormProps) {
  let componentToRender

  switch (progress) {
    case 1:
      componentToRender = (
        <PersonalInfo
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
      )
      break
    case 2:
      componentToRender = <Resume />
      break
    case 3:
      componentToRender = (
        <Skills
          applicantInfo={applicantInfo}
          setApplicantInfo={setApplicantInfo}
        />
      )
      break
    case 4:
      componentToRender = <Summary applicantInfo={applicantInfo} />
      break
    case 5:
      componentToRender = <Confirm />
      break
    default:
      componentToRender = null
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {componentToRender}
        {progress != 5 ? (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            applicantInfo={applicantInfo}
            setApplicantInfo={setApplicantInfo}
          />
        ) : null}
      </div>
    </div>
  )
}
