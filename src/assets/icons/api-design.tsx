import * as React from "react"
import {useTheme} from 'next-themes'

export function ApiDesign() {
  const {theme} = useTheme();

  const foregroundColor = theme === 'light' ? 'hsl(0, 0%, 3.9%)' : 'hsl(0, 0%, 98%)'

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66">
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M35.8 64.2H6.2C3.9 64.2 2 62.4 2 60V6c0-2.3 1.9-4.2 4.2-4.2h29.6C38.1 1.8 40 3.6 40 6v54c0 2.4-1.9 4.2-4.2 4.2z"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M8.3 4.8H5.9c-.3.1-.5.2-.7.4-.3.4-.2 1-.2 1.5v7.9"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M5 20.7L5 23.1"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M18.9 61L23.1 61"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M13.6 5L21.3 5"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M25.7 5L28.4 5"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M18.4 35.5c1.7.4 3.5.4 5.2 0-.1-1.3.4-2.4 1.3-2.8.9-.4 2.1.1 2.9 1.1 1.4-.9 2.7-2.2 3.7-3.6-1-.8-1.4-1.9-1.1-2.9s1.5-1.4 2.8-1.3c.4-1.7.4-3.5 0-5.2-1.3.1-2.4-.4-2.8-1.3s.1-2.1 1.1-2.9c-.9-1.4-2.2-2.7-3.6-3.7-.8 1-1.9 1.4-2.9 1.1-.9-.4-1.4-1.5-1.3-2.8-1.7-.4-3.5-.4-5.2 0 .1 1.3-.4 2.4-1.3 2.8-.9.4-2.1-.1-2.9-1.1-1.4.9-2.7 2.2-3.7 3.6 1 .8 1.4 1.9 1.1 2.9s-1.5 1.4-2.8 1.3c-.4 1.7-.4 3.5 0 5.2 1.3-.1 2.4.4 2.8 1.3s-.1 2.1-1.1 2.9c.9 1.4 2.2 2.7 3.6 3.7.8-1 1.9-1.4 2.9-1.1s1.4 1.6 1.3 2.8z"
      />
      <circle
        cx={21}
        cy={23.4}
        r={5.2}
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M20.5 15.9c-1.8.1-3.5.9-4.8 2.2-1.3 1.3-2.1 3-2.2 4.8m1.3 4.8c.4.6.9 1.1 1.4 1.5"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M33.9 41.7L33.9 54.4"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M8.1 54.4L13.9 41.7 19.7 54.4"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M10.6 48.8L17.2 48.8"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M23.4 41.7L23.4 54.4"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M26.6 48.1h-3.2v-6.4h3.2c1.8 0 3.2 1.4 3.2 3.2h0c0 1.7-1.5 3.2-3.2 3.2zm35.7-30.8H52.2c-1 0-1.8-.8-1.8-1.8v-9c0-1 .8-1.8 1.8-1.8h10.1c1 0 1.8.8 1.8 1.8v9.1c-.1.9-.9 1.7-1.8 1.7zm0 22H52.2c-1 0-1.8-.8-1.8-1.8v-9.1c0-1 .8-1.8 1.8-1.8h10.1c1 0 1.8.8 1.8 1.8v9.1c-.1 1-.9 1.8-1.8 1.8zm0 22H52.2c-1 0-1.8-.8-1.8-1.8v-9.1c0-1 .8-1.8 1.8-1.8h10.1c1 0 1.8.8 1.8 1.8v9.1c-.1 1-.9 1.8-1.8 1.8z"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M47.5 56.3c0-.4.3-.8.8-.8h7c.4 0 .8.3.8.8 0 .4-.3.8-.8.8h-7c-.4 0-.8-.3-.8-.8zm0-6.4c0-.4.3-.8.8-.8h7c.4 0 .8.3.8.8 0 .4-.3.8-.8.8h-7c-.4 0-.8-.3-.8-.8zm0-6.4c0-.4.3-.8.8-.8h7c.4 0 .8.3.8.8 0 .4-.3.8-.8.8h-7c-.4 0-.8-.3-.8-.8z"
      />
      <path
        fill="none"
        stroke={foregroundColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M25.6 6c0 .4-.3.8-.8.8h-7c-.4 0-.8-.3-.8-.8 0-.4.3-.8.8-.8h7c.4 0 .8.3.8.8z"
      />
    </svg>
  )
}
