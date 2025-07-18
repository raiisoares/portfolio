import { useTheme } from 'next-themes'

export function Frontend() {
  const { theme } = useTheme()

  const strokeColor = theme === 'light' ? 'hsl(0, 0%, 3.9%)' : 'hsl(0, 0%, 98%)'

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66 66' role='presentation' aria-hidden='true'>
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M53.5 55.1H5.9c-2.2 0-4-1.8-4-4V6.3c0-2.5 2-4.5 4.5-4.5h53c2.5 0 4.6 2 4.6 4.6v44.9c0 1.8-1.2 3.3-2.9 3.8'
      />
      <circle
        cx={8.9}
        cy={6.7}
        r={2}
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <circle
        cx={16.5}
        cy={6.7}
        r={2}
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <circle
        cx={24.1}
        cy={6.7}
        r={2}
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M46.8 40.7L56.6 62c1 2.1 3.5 2.9 5.5 1.8h0c2-1.1 2.6-3.7 1.3-5.6L50.2 38.8'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M52.9 42.8L48.8 45.1'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M42.4 34.5c-.8 3.5 2.5 7.4 5.8 6.1.1-.1.3-.1.4-.2 2.6-1.5 2.6-4.2 1.2-6.8s-7.1-5.8-8.5-6.2c1.7 3.6 1.4 5.5 1.1 7.1z'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M6.1 13.3H59.9V19.1H6.1z'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M14 34.6H8.7c-1.1 0-1.9-.9-1.9-1.9v-5.8c0-1.1.9-1.9 1.9-1.9H14c1.1 0 1.9.9 1.9 1.9v5.8c0 1.1-.8 1.9-1.9 1.9zM14 50H8.7c-1.1 0-1.9-.9-1.9-1.9v-5.8c0-1.1.9-1.9 1.9-1.9H14c1.1 0 1.9.9 1.9 1.9v5.8c0 1-.8 1.9-1.9 1.9z'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M20.9 25L28.4 25'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M20.9 29.8L36.4 29.8'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M20.9 34.6L36.4 34.6'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M20.9 40.4L28.4 40.4'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M20.9 45.2L36.4 45.2'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M20.9 50L36.4 50'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M60.9 59.1L56.1 52'
      />
      <path
        fill='none'
        stroke={strokeColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d='M53.8 48.5L52.8 47.1'
      />
    </svg>
  )
}
