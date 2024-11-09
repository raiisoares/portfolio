import Lottie from 'react-lottie-player'
import hero from '@/assets/lottie/software-development.json'
import { useTheme } from 'next-themes'

export function HeroAnimation() {
  const { theme } = useTheme()

  const lottieStyle = {
    width: '100%',
    height: 450,
    filter: theme === 'dark' ? 'invert(1) brightness(0.8)' : 'none',
  }

  return (
    <Lottie
      animationData={hero}
      loop
      play
      style={lottieStyle}
      speed={0.8}
    />
  )
}
