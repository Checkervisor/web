import React from 'react'

const index = () => {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -mr-half-screen -ml-half-screen">
      <div className="absolute bg-black h-full w-full opacity-60"></div>
      <div className="bg-footer-bg bg-cover bg-no-repeat py-72">
        <div className="flex flex-col text-center font-bold text-white text-5xl">
          <p className="z-50">
            <span className="text-greenCV">Checkervisor</span> is a professional Legit Checker
          </p>
          <p className="z-50">
            We ensure you the most <span className="text-greenCV">Accurate Result</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default index
