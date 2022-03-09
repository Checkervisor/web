import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className="flex flex-col gap-y-37">
      {/* authentication result */}
      <div className="flex flex-col gap-y-13">
        <div className="flex flex-col text-center">
          <p className="title-text">Authentication Result</p>
          <p className="subtitle-text">
            You&apos;d have an authentication results explanation at the end whether the brand is
            authentic or fake!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-13">
          <Image alt="pass" src="/assets/auth-result/pass.png" width={350} height={365} />
          <Image alt="not-pass" src="/assets/auth-result/not-pass.png" width={350} height={365} />
          <Image
            alt="undefinable"
            src="/assets/auth-result/undefinable.png"
            width={350}
            height={365}
          />
        </div>
      </div>
      {/* brand */}
      <div className="flex flex-col gap-y-13">
        <div className="flex flex-col text-center">
          <p className="title-text">Brand</p>
          <p className="subtitle-text">See our gorgeous brand</p>
        </div>
        <div className="grid grid-flow-col gap-x-24">
          <Image alt="adidas" src="/assets/brand/adidas.png" width={150} height={130} />
          <Image alt="nike" src="/assets/brand/nike.png" width={150} height={130} />
          <Image alt="jordan" src="/assets/brand/jordan.png" width={150} height={130} />
          <Image alt="bape" src="/assets/brand/bape.png" width={150} height={130} />
          <Image alt="vans" src="/assets/brand/vans.png" width={150} height={130} />
        </div>
      </div>
    </div>
  )
}

export default index
