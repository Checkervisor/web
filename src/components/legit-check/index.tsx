import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -mr-half-screen -ml-half-screen">
      <div className="absolute bg-black h-full w-full opacity-60"></div>
      <div className="bg-legitcheck-bg bg-cover bg-no-repeat p-24">
        <div className="flex flex-col gap-y-16">
          <div className="flex flex-col text-center text-white z-50">
            <p className=" text-6xl font-bold">Legit Check Services</p>
            <p className="text-4xl font-thin">We provide you the best legit check service</p>
          </div>
          <div className="flex flex-col gap-y-16 items-center">
            <div className="flex flex-row gap-x-20">
              <Image
                alt="legit-check-1"
                src="/assets/legitcheck-service/1.png"
                width={400}
                height={400}
              />
              <Image
                alt="legit-check-1"
                src="/assets/legitcheck-service/2.png"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-row gap-x-20">
              <Image
                alt="legit-check-1"
                src="/assets/legitcheck-service/3.png"
                width={400}
                height={400}
              />
              <Image
                alt="legit-check-1"
                src="/assets/legitcheck-service/4.png"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
