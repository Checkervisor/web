import Image from 'next/image'
import React from 'react'

const index = () => {
  return (
    <div className="flex flex-col gap-y-31">
      {/* title section */}
      <div className="flex flex-row gap-x-10 items-center">
        {/* title text */}
        <div className="flex flex-col gap-y-3 font-extrabold">
          <p className="text-7xl uppercase">
            Checker<span className="text-greenCV">Visor</span>
          </p>
          <p className="text-xl">
            Checkervisor is a professional Legit Checker
          </p>
          <p className="text-xl">
            We ensure you the most
            <span className="text-greenCV"> Accurate Result</span>
          </p>
          <button className="rounded-full bg-greenCV px-5 py-2 w-fit text-white font-semibold mt-2 shadow-md">
            Start Legit Check
          </button>
        </div>
        {/* title image */}
        <Image
          alt="checkervisor"
          src="/assets/title/jordan-shoe.png"
          width={450}
          height={450}
        />
      </div>

      {/* statistic section */}
      <div className="grid grid-cols-4 gap-x-8 font-semibold text-center">
        <div className="statistic-box">
          <span
            style={{ left: 10, top: -22 }}
            className="statistic-label bg-black"
          >
            We&apos;ve checked
          </span>
          <p className="text-xl mt-5">Total item check</p>
          <p className="text-4xl font-bold">2.893</p>
        </div>
        <div className="statistic-box">
          <span
            style={{ left: 10, top: -22 }}
            className="statistic-label bg-greenCV"
          >
            Authentic
          </span>
          <p className="text-xl mt-5">Total item Authentic</p>
          <p className="text-4xl font-bold">2.893</p>
        </div>
        <div className="statistic-box">
          <span
            style={{ left: 10, top: -22 }}
            className="statistic-label bg-redCV"
          >
            Item Fake
          </span>
          <p className="text-xl mt-5">Total item Fake</p>
          <p className="text-4xl font-bold">2.893</p>
        </div>
        <div className="statistic-box">
          <span
            style={{ left: 10, top: -22 }}
            className="statistic-label bg-black"
          >
            Undefinable
          </span>
          <p className="text-xl mt-5">Total item Undefinable</p>
          <p className="text-4xl font-bold">2.893</p>
        </div>
      </div>
    </div>
  )
}

export default index
