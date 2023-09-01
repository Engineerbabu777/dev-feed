

import React from 'react'

type Props ={
 children: React.ReactNode

}

function Card({children}:Props) {
  return (
    <div className="bg-white p-2 shadow-md shadow-gray-300 mb-4 rounded-sm ">{children}</div>
  )
}

export default Card