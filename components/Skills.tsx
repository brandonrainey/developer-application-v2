import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Skills.module.scss'

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

interface SkillProps {
  applicantInfo: {
    name: string
    resume: string
    email: string
    phone: string
    skills: { name: string; icon: string; key: number }[]
  }
  setApplicantInfo: React.Dispatch<React.SetStateAction<ApplicantInfoType>>
}



export default function Skills({
  applicantInfo,
  setApplicantInfo,
}: SkillProps) {
  const [skillList, setSkillList] = useState([
    {
      name: 'HTML',
      icon: '/skillIcons/html-icon.png',
      checked: false,
    },
    {
      name: 'CSS',
      icon: '/skillIcons/css-icon.png',
      checked: false,
    },
    {
      name: 'Javascript',
      icon: '/skillIcons/javascript-icon.png',
      checked: false,
    },
    {
      name: 'Typescript',
      icon: '/skillIcons/typescript-icon.png',
      checked: false,
    },
    {
      name: 'React',
      icon: '/skillIcons/react-icon.png',
      checked: false,
    },
    {
      name: 'Redux',
      icon: '/skillIcons/redux-icon.png',
      checked: false,
    },
    {
      name: 'Next.js',
      icon: '/skillIcons/nextjs-icon.png',
      checked: false,
    },
    {
      name: 'Sass',
      icon: '/skillIcons/sass-icon.png',
      checked: false,
    },
    {
      name: 'Jest',
      icon: '/skillIcons/jest-icon.png',
      checked: false,
    },
  ])

  function createHandleChange(index: number) {
    return function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      let found = false

      const copyArr = [...skillList]

      const copyInfo = applicantInfo

      copyInfo.skills.forEach((item, localIndex) => {
        if (item.key == index) {
          found = true
          copyInfo.skills.splice(localIndex, 1)

          return
        }
      })

      if (found == false) {
        copyInfo.skills.push({
          name: copyArr[index].name,
          icon: copyArr[index].icon,
          key: index,
        })
      }

      copyArr[index].checked = !copyArr[index].checked

      setSkillList(copyArr)

      setApplicantInfo(copyInfo)
    }
  }

  useEffect(() => {
    const copySkills = [...skillList]

    applicantInfo.skills.map((item) => {
      copySkills.map((skill, index) => {
        item.name == skill.name ? (copySkills[index].checked = true) : null
      })
    })

    setSkillList(copySkills)
  }, [])

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Select Skills</h1>
      <div className={styles.wrapper}>
        {skillList.map((item, index) => (
          <label
            key={index}
            className={`${item.checked ? styles.checked : ''}`}
          >
            <Image src={item.icon} width={80} height={80} alt="skill icon" priority={true}/>
            <p>{item.name}</p>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={createHandleChange(index)}
              data-testid={`checkbox-${index}`}
            />
          </label>
        ))}
      </div>
    </div>
  )
}


