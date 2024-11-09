import Lottie from 'react-lottie-player'
import hero from '@/assets/lottie/software-development.json'

export function HeroAnimation() {
  return (
    <Lottie
      animationData={hero}
      loop
      play
      style={{width: '100%', height: 450}}
      speed={0.8}
    />
  )
}
