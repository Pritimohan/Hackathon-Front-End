

// component imports
import WhyParticipateBox from '../../components/WhyParticipateBox'


// icon imports
import carbon_notebook from '../../assets/icons/carbon_notebook-reference.svg'
import Vector from '../../assets/icons/Vector.svg'
import Robot from '../../assets/icons/Robot.svg'
import IdentificationCard from '../../assets/icons/IdentificationCard.svg'



function WhyParticipateSection() {
    return (
        <div className='h-screen bg-white font-poppins  py-10 flex flex-col justify-center gap-10 items-center'>
            <h2 className=' font-medium text-[32px] font-poppins text-center'>Why Participate in <span className='text-[#0FA958]'> AI Challenges?</span></h2>

            <div className=' grid grid-cols-2 gap-3'>
                <WhyParticipateBox icon={carbon_notebook} mainText={"Prove your skills"} secondaryText={"Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."} />
                <WhyParticipateBox icon={Vector} mainText={"Learn from community"} secondaryText={"One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."} />
                <WhyParticipateBox icon={Robot} mainText={"Challenge yourself"} secondaryText={"There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder."} />
                <WhyParticipateBox icon={IdentificationCard} mainText={"Earn recognition"} secondaryText={"You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."} />
            </div>
        </div>
    )
}

export default WhyParticipateSection