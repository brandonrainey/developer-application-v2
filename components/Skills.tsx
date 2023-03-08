import Image from 'next/image'
import React from 'react'
import styles from '../styles/Skills.module.scss'

const skillList = [
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
]



export default function Skills() {
  return (
    <div className={styles.main}>
        {skillList.map((item, index) => (
            <label>
                <Image src={item.icon} width={80} height={80} alt='skill icon'/>
                {item.name}
                <input type='checkbox' />
            </label>
        )
        )}
    </div>
  )
}
