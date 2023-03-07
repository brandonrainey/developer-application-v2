import React from 'react'
import styles from '../styles/Forms.module.scss'
import PersonalInfo from './PersonalInfo'
import ProgressButton from './ProgressButton'
import Resume from './Resume'

type FormProps = {
  progress: number
  setProgress: React.Dispatch<React.SetStateAction<number>>
}

export default function Forms({ progress, setProgress }: FormProps) {

  let componentToRender;

  switch (progress) {
    case 1:
      componentToRender = <PersonalInfo />;
      break;
    case 2:
      componentToRender = <Resume />;
      break;
    case 3:
      componentToRender = <PersonalInfo />;
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
        <ProgressButton progress={progress} setProgress={setProgress} />
      </div>
    </div>
  )
}
