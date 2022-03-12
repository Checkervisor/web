import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-black py-24 px-45">
        <div className="grid grid-cols-3 gap-x-40 text-white items-start">
          {/* logo */}
          <Image alt="checkervisor-footer" src="/assets/checkervisor-footer-logo.png" width={299} height={138} layout="fixed" />
          {/* navigation */}
          <div className="flex flex-col gap-y-16">
            <p className="subtitle-text font-bold">Navigation</p>
            <div className="flex flex-col gap-y-5 text-2xl font-semibold">
              <p>About Us</p>
              <p>Our Services</p>
              <p>Brand</p>
              <p>Authentication Results</p>
            </div>
          </div>
          {/* social media */}
          <div className="flex flex-col gap-y-16">
            {/* social media link */}
            <div className="flex flex-col gap-y-7">
              <p className="subtitle-text font-bold">Social Media</p>
              <div className="grid grid-flow-col gap-x-16">
                <div className="relative w-13 h-13">
                  <Image alt="facebook" src="/assets/footer/facebook.png" layout="fill" objectFit="contain" />
                </div>
                <div className="relative w-13 h-13">
                  <Image alt="twitter" src="/assets/footer/twitter.png" layout="fill" objectFit="contain" />
                </div>
                <div className="relative w-13 h-13">
                  <Image alt="instagram" src="/assets/footer/instagram.png" layout="fill" objectFit="contain" />
                </div>
              </div>
            </div>
            {/* download link */}
            <div className="flex flex-col gap-y-7">
              <p className="subtitle-text font-bold">Download Apps</p>
              <div className="grid grid-flow-col gap-x-4">
                <div className="relative w-37 h-11">
                  <Image alt="gplay" src="/assets/footer/google-play.png" layout="fill" objectFit="contain" />
                </div>
                <div className="relative w-37 h-11">
                  <Image alt="appstore" src="/assets/footer/app-store.png" layout="fill" objectFit="contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyrights */}
      <div className="bg-greyCV py-8 text-center">
        <p className="text-lg text-white">© 2022 Checkervisor All Rights Reserved</p>
      </div>
    </div>
  )
}

export default index
