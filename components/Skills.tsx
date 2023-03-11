import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../styles/Skills.module.scss'



export default function Skills() {

    const [skillList, setSkillList] = useState([
        {
            name: 'HTML',
            icon: '/skillIcons/html-icon.png',
            checked: false
        },
        {
            name: 'CSS',
            icon: '/skillIcons/css-icon.png',
            checked: false
        },
        {
            name: 'Javascript',
            icon: '/skillIcons/javascript-icon.png',
            checked: false
        },
        {
            name: 'Typescript',
            icon: '/skillIcons/typescript-icon.png',
            checked: false
        },
        {
            name: 'React',
            icon: '/skillIcons/react-icon.png',
            checked: false
        },
        {
            name: 'Redux',
            icon: '/skillIcons/redux-icon.png',
            checked: false
        },
        {
            name: 'Next.js',
            icon: '/skillIcons/nextjs-icon.png',
            checked: false
        },
        {
            name: 'Sass',
            icon: '/skillIcons/sass-icon.png',
            checked: false
        },
        {
            name: 'Jest',
            icon: '/skillIcons/jest-icon.png',
            checked: false
        },
    ])


    function createHandleChange(index: number) {
        return function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
          const copyArr = [...skillList]
      
          copyArr[index].checked = !copyArr[index].checked
      
          setSkillList(copyArr)
        }
      }

      

  return (
    <div className={styles.main}>
        {skillList.map((item, index) => (
            <label key={index} style={{ outline: `${item.checked ? '2px solid blue' : ''}` }}>
                <Image src={item.icon} width={80} height={80} alt='skill icon'/>
                <p>{item.name}</p>
                <input type='checkbox' checked={item.checked} onChange={createHandleChange(index)}/>
            </label>
        )
        )}
    </div>
  )
}
