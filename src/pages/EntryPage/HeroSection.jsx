
// component imports
import Button from '../../components/Button'
import Stats from '../../components/Stats'
// icon imports
import RocketLogo from '../../assets/icons/PicsArt_04-14-04.42 1.svg'
import firstStatIcon from '../../assets/icons/Group 1000002515.svg'
import secondStatIcon from '../../assets/icons/Group 1000002516.svg'
import thirdStatIcon from '../../assets/icons/Group 1000002518.svg'
import { Link } from 'react-router-dom'



function HeroSection() {
    return (
        <>
            <div className=' bg-[#003145] h-[570px] px-20 flex justify-center items-center '>
                <div className=' flex flex-col gap-5 ' >
                    <h1 className='font-poppins font-semibold text-white text-[48px] w-[700px]  border-l-8 border-[#FFCE5C] pl-10 '>
                        Accelerate Innovation with Global AI Challenges
                    </h1>
                    <p className='font-poppins font-normal text-white text-[18px] w-[500px]'>AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                    <Link to="/create-challenge">
                        <Button text={"Create Challenge"} />
                    </Link>
                </div>
                <div>
                    <img src={RocketLogo} alt="" />
                </div>
            </div>

            <div className='h-[200px] bg-[#002A3B] flex justify-around items-center'>

                <Stats logo={firstStatIcon} mainText={"100K+"} secondaryText={"AI model submissions"} />
                <Stats logo={secondStatIcon} mainText={"50K+"} secondaryText={"Data Scientists"} />
                <Stats logo={thirdStatIcon} mainText={"100+"} secondaryText={"Ai Challenges hosted"} />
            </div>
        </>
    )
}

export default HeroSection