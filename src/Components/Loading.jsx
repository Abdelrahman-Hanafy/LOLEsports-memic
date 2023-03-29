import React from 'react'
import { SpinnerInfinity } from "spinners-react";
const Loading = () => {
  return (
    <div className='loading'>
        <SpinnerInfinity size={90} thickness={139} speed={100} color="rgba(13, 202, 240, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
    </div>

  )
}

export default Loading