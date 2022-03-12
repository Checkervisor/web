import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-x-44 items-center text-xl font-semibold justify-between">
        <Image
          alt="checkervisor-logo"
          src="/assets/checkervisor-header-logo.png"
          width={198}
          height={198}
        />
        <div className="flex flex-row gap-x-16">
          <Link href="https://stackoverflow.com/" passHref={true}>
            <span className="cursor-pointer">About Us</span>
          </Link>
          <Link href="https://stackoverflow.com/" passHref={true}>
            <span className="cursor-pointer">Our Services</span>
          </Link>
          <Link href="https://stackoverflow.com/" passHref={true}>
            <span className="cursor-pointer">Authentication Results</span>
          </Link>
          <Link href="https://stackoverflow.com/" passHref={true}>
            <span className="cursor-pointer">Legit Check</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default index
