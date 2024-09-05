import React from 'react'

function Stats(props) {
    const {logo, mainText, secondaryText}=props
  return (
    <div className=' flex gap-4 items-center'>
    <img src={logo} alt="" />
    <div>
        <h2 className='font-inter font-semibold text-[24px] text-white '>{mainText}</h2>
        <p className='text-[16px] font-inter text-white font-extralight leading-0 '>{secondaryText}</p>
    </div>
</div>
  )
}

export default Stats