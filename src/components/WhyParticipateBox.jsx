

function WhyParticipateBox(props) {
  const { icon, mainText, secondaryText } = props;

  return (
    <div className='w-[470px] h-[230px] rounded-lg flex flex-col gap-4 justify-center p-3 bg-[#f8f9fd]'>
      <img src={icon} alt="" width={40} />
      <h4 className='font-poppins font-semibold text-2xl '>{mainText}</h4>
      <p className='font-poppins font-medium text-sm text-[#64607D]'>{secondaryText}</p>
    </div>
  )
}

export default WhyParticipateBox