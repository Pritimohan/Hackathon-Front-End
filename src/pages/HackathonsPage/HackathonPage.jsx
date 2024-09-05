import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { formatDateTimeAnother } from '../../utils/formateDateAndTime.js'
import { FaRegClock } from "react-icons/fa6";
import carbon_skill from "../../assets/icons/carbon_skill-level-basic.svg"


function HackathonPage() {
  const id = useParams().id

  const hackathons = JSON.parse(localStorage.getItem('challenges')) || []
  const hackathon = hackathons.find((hackathon) => hackathon.id === id)
  const navigate = useNavigate()



  return (

    <div className=" min-h-fit">
      <div className="bg-[#003145] text-white px-10 ">
        <div className="flex flex-col justify-center gap-5 items-start py-12 ">
          <div className="bg-yellow-400 text-black px-4 h-11 rounded-md text-sm flex items-center gap-2">
            <span>{<FaRegClock size={20} />}</span>
            <p className=' font-poppins font-semibold'>
              {hackathon.status=== "Past" ? `Ended on ${formatDateTimeAnother(hackathon.endDate)} - Started on ${formatDateTimeAnother(hackathon.startDate)} ` : `Started on ${formatDateTimeAnother(hackathon.startDate)} - Ends on ${formatDateTimeAnother(hackathon.endDate)}`} (India Standard Time)</p>
          </div>
          <h2 className="text-3xl font-bold ">{hackathon.challengeName}</h2>
          <p className='font-poppins text-sm'>Identify the class to which each butterfly belongs to</p>
          <span className="bg-gray-200 text-black px-4 py-2 rounded-md text-sm flex gap-2"><img src={carbon_skill} alt="" />{hackathon.levelType}</span>
        </div>
      </div>

      <div className=" shadow-lg flex h-12 px-24 items-end justify-between">
        <h3 className="text-xl font-semibold  border-b-4 border-green-600 ">Overview</h3>
        <div className="h-full flex items-center gap-4">
          <Link to={`/edit-challenge/${hackathon.id}`}>
            <button className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600">Edit</button>
          </Link>
          <button
            onClick={() => {
              const challenges = hackathons.filter((hack) => hack.id !== hackathon.id)
              localStorage.setItem('challenges', JSON.stringify(challenges))
              navigate('/')
            }}
            className=" text-red-600 border-red-600 border px-4 py-1 rounded-lg hover:text-white hover:bg-red-600">Delete</button>
        </div>
      </div>
      <div className='px-28 py-14 '>
        <p>{hackathon.description}</p>
      </div>
    </div>

  )
}

export default HackathonPage