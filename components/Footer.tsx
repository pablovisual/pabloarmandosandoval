import React, { ReactElement } from 'react'

function Footer(): ReactElement {
  return (
    <div className="flex justify-center items-center bg-white relative bottom-0 p-2">
      <h1 className="text-xl md:text-3xl xl:text-4xl font-bold">© {new Date().getFullYear()} | All Rights Reserved</h1>
    </div>
  )
}

export default Footer
