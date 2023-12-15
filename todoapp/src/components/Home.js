import React from 'react'
import { useState } from 'react'

export default function Home() {
    const [data, setData] = useState('')
    const UpdateData=()=>{
        setData("Home component")
    }
  return (
    <div>
      <button onClick={UpdateData}>
        Get data
      </button>
      <p>{data}</p>
    </div>
  )
}
