import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className="flex flex-col gap-y-37">
      {/* legit check service */}
      <div className="relative w-screen left-1/2 right-1/2 -mr-half-screen -ml-half-screen">
        <div className="absolute bg-black h-full w-full opacity-60"></div>
        <div className="bg-legitcheck-bg bg-cover bg-no-repeat p-24">
          <div className="flex flex-col gap-y-16">
            <div className="flex flex-col text-center text-white z-50">
              <p className="title-text">Legit Check Services</p>
              <p className="subtitle-text">We provide you the best legit check service</p>
            </div>
            <div className="flex flex-col gap-y-16 items-center">
              <div className="flex flex-row gap-x-20">
                <Image alt="legit-check-1" src="/assets/legitcheck-service/1.png" width={400} height={400} />
                <Image alt="legit-check-1" src="/assets/legitcheck-service/2.png" width={400} height={400} />
              </div>
              <div className="flex flex-row gap-x-20">
                <Image alt="legit-check-1" src="/assets/legitcheck-service/3.png" width={400} height={400} />
                <Image alt="legit-check-1" src="/assets/legitcheck-service/4.png" width={400} height={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* recent legit check */}
      <div className="flex flex-col gap-y-16">
        <div className="flex flex-col text-center">
          <p className="title-text">Recent Legit Check</p>
          <p className="subtitle-text">Our recent Legit Checks</p>
        </div>
        {/* carousel slider */}
        <div className="grid grid-flow-col gap-x-13">
          <Image alt="legitcheck-1" src="/assets/recent-legitcheck/1.png" width={350} height={350} />
          <Image alt="legitcheck-2" src="/assets/recent-legitcheck/2.png" width={700} height={700} />
          <Image alt="legitcheck-3" src="/assets/recent-legitcheck/3.png" width={350} height={350} />
        </div>
      </div>
    </div>
  )
}

export default index
