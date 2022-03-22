import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className="flex flex-col gap-y-5 text-center">
      <p className="title-text">Quality</p>
      <p className="subtitle-text">We provide professional and high-quality customer services</p>
      {/* quality ilustration */}
      <div className="grid grid-cols-3 gap-x-8 mt-5">
        {/* quality 1 */}
        <div className="flex flex-col gap-y-5">
          <Image
            alt="quality-1"
            src="/assets/quality/iso-1.png"
            width={313}
            height={313}
            layout="fixed"
          />
          <p className="text-3xl font-semibold leading-8">
            <span className="text-greenCV">
              Professional <br />{' '}
            </span>
            Legit Checker
          </p>
          <p className="text-2xl leading-6">
            Checkervisor team is build by the expert and high experiences in sneakers &amp;
            streetwear
          </p>
        </div>
        {/* quality 2 */}
        <div className="flex flex-col gap-y-5">
          <Image
            alt="quality-1"
            src="/assets/quality/iso-2.png"
            width={313}
            height={313}
            layout="fixed"
          />
          <p className="text-3xl font-semibold leading-8">
            <span className="text-greenCV">
              Organized <br />
            </span>
            &amp; Well Built System
          </p>
          <p className="text-2xl leading-6">
            Your item was legit checked in order by passing our standarization of authenticity
          </p>
        </div>
        {/* quality 3 */}
        <div className="flex flex-col gap-y-5">
          <Image
            alt="quality-1"
            src="/assets/quality/iso-3.png"
            width={313}
            height={313}
            layout="fixed"
          />
          <p className="text-3xl font-semibold leading-8 whitespace-nowrap">
            <span className="text-greenCV">
              TrustWorthy <br />
            </span>
            Education &amp; Explanation
          </p>
          <p className="text-2xl leading-6">
            Your authentication included 100% TrustWorthy from the expert now
          </p>
        </div>
      </div>
    </div>
  )
}

export default index
