
import ExploreChallengesSection from './ExploreChallengesSection'
import HeroSection from './HeroSection'
import WhyParticipateSection from './WhyParticipateSection'
import { useSelector } from 'react-redux'



function EntryPage() {
  const isOpen = useSelector((state) => state.isOpen.isOpen)
  return (
    <>
      <div className='min-h-full w-full relative '>
        {isOpen && <div className='bg-black min-h-full z-30 w-full absolute opacity-60 '></div>}
        <HeroSection />
        <WhyParticipateSection />
        <ExploreChallengesSection />
      </div>
    </>
  )
}

export default EntryPage