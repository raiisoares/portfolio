import {BannerAnimation} from "@/components/animations/banner-animation";

export function Banner() {
  return (
    <div className={'flex lg:flex-row flex-col justify-center items-center lg:w-2/3 lg:mx-auto'}>
      <div className={'py-8 lg:p-10 lg:w-3/4'}>
        <h2 className={'text-xl'}>Raí Soares - Full Stack Developer</h2>

        <p className={'1/2'}>
          Sou um desenvolvedor fullstack e estudante de Ciência da Computação
          pela Universidade Católica de pernambuco.
        </p>
      </div>
      <div className={'w-full lg:w-2/3'}>
        <BannerAnimation/>
      </div>
    </div>
  )
}