import React, { ReactElement } from 'react';

function Education(): ReactElement {
  return (
    <div id="/education" className="flex items-center justify-center mt-4 border-b border-black snap-start">
      <div className="w-3/4 bg-gradient-to-r from-[rgb(128,255,114)] via-[rgb(127,244,181)] to-[rgb(126,232,250)] flex justify-center items-center py-8 rounded-2xl border-4 border-black mb-4">
        <div className="w-11/12 border-4 border-black rounded-2xl">
          <div className="uppercase text-center bg-white border-b border-black rounded-t-xl">
            <h1 className="text-lg md:text-xl lg:text-3xl xl:text-6xl font-bold">ut: rio grande valley</h1>
          </div>

          <div className="uppercase p-4 py-4 flex justify-between rounded-b-xl bg-white text-sm md:text-lg lg:text-2xl font-semibold xl:text-4xl">
            <p>b.s. degree of computer science</p>
            <p>class of 2019</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
