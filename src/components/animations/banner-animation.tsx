import Lottie from 'react-lottie-player'
import banner from '@/assets/lottie/software-development.json'

export function BannerAnimation() {
  return (
    <Lottie
      animationData={banner}
      loop
      play
      style={{width: '100%', height: 450}}
      speed={0.8}
    />
  )
}
