import React from 'react'
import styles from '../styles/Forms.module.scss'
import PersonalInfo from './PersonalInfo'
import ProgressButton from './ProgressButton'
import Resume from './Resume'
import Skills from './Skills'

interface ApplicantInfo {
  name: string;
  resume: string;
  skills: {
    name: string,
    icon: string
  };
}

type FormProps = {
  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>
  applicantInfo: {
    name: string,
    resume: string,
    skills: {name: string, icon: string}[]
  }
  setApplicantInfo: React.Dispatch<React.SetStateAction<ApplicantInfo>>
}

export default function Forms({ progress, setProgress, applicantInfo, setApplicantInfo }: FormProps) {

  let componentToRender;

  switch (progress) {
    case 1:
      componentToRender = <PersonalInfo applicantInfo={applicantInfo} setApplicantInfo={setApplicantInfo}/>;
      break;
    case 2:
      componentToRender = <Resume />;
      break;
    case 3:
      componentToRender = <Skills />;
      break;
    case 4:
      componentToRender = <PersonalInfo />;
      break;
    default:
      componentToRender = null;
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {componentToRender}
        <ProgressButton progress={progress} setProgress={setProgress} applicantInfo={applicantInfo} setApplicantInfo={setApplicantInfo}/>
      </div>
    </div>
  )
}
