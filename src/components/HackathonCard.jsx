import React, { useState, useEffect } from 'react';
import { formatDateTime } from '../utils/formateDateAndTime.js';

function HackathonCard({ title, imageUrl, startTime, endTime, id }) {
    const calculateTimeLeft = () => {
        const currentTime = new Date();
        const start = new Date(startTime);
        const end = new Date(endTime);
        const difference = start - currentTime;
        const seconedDifference = end - currentTime;

        let timeLeft = {};
        let status = '';

        if (currentTime < start) {
            status = 'Upcoming';
        } else if (currentTime >= start && currentTime <= end) {
            status = 'Active';
        } else {
            status = 'Past';
        }

        if (difference > 0 && status !== 'Past' || seconedDifference > 0 && status === 'Active') {
            if (status === 'Upcoming') {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                };
            } else if (status === 'Active') {
                timeLeft = {
                    days: Math.floor(seconedDifference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((seconedDifference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((seconedDifference / 1000 / 60) % 60),
                };
            }

        }

        return { timeLeft, status };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft().timeLeft);
    const [status, setStatus] = useState(calculateTimeLeft().status);

    // Function to update status in localStorage
    const updateStatusInLocalStorage = (newStatus) => {
        const challenges = JSON.parse(localStorage.getItem('challenges')) || [];
        const updatedChallenges = challenges.map((challenge) =>
            challenge.id === id ? { ...challenge, status: newStatus } : challenge
        );
        localStorage.setItem('challenges', JSON.stringify(updatedChallenges));
        // console.log('Status updated in localStorage');
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const { timeLeft, status } = calculateTimeLeft();
            setTimeLeft(timeLeft);
            setStatus(status);
            updateStatusInLocalStorage(status);  // Update localStorage whenever status changes
        }, 1000);

        return () => clearTimeout(timer);
    }, [startTime, endTime, timeLeft, status, id, updateStatusInLocalStorage,]);

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });


    return (
        <>
            <div className="w-[350px] h-[470px] rounded-xl overflow-hidden shadow-lg bg-white text-center">
                <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
                <div className="p-6">
                    <span className={`inline-block text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide 
                        ${status === "Upcoming" ? "bg-yellow-300 text-gray-500" :
                            status === "Active" ? "bg-green-300 text-gray-500" :
                                "bg-red-300 text-gray-500"}`}>
                        {status}
                    </span>
                    <h2 className="text-lg font-semibold mt-2 mb-4 font-poppins">{title}</h2>
                    {status === "Upcoming" ? (
                        <>
                            <p className="text-gray-500 font-poppins font-semibold">Starts in</p>
                            <div className="flex justify-center mt-2 text-lg font-poppins gap-2 font-bold">
                                <div>
                                    {timeLeft.days}
                                    <p className='text-xs font-normal'>days</p>
                                </div>:
                                <div>
                                    {timeLeft.hours}
                                    <p className='text-xs font-normal'>hours</p>
                                </div>:
                                <div>
                                    {timeLeft.minutes}
                                    <p className='text-xs font-normal'>minutes</p>
                                </div>
                            </div>
                        </>
                    ) : status === "Active" ? (
                        <>
                            <p className="text-gray-500 font-poppins font-semibold">Ends in</p>
                            <div className="flex justify-center mt-2 text-lg font-poppins gap-2 font-bold">
                                <div>
                                    {timeLeft.days}
                                    <p className='text-xs font-normal'>days</p>
                                </div>:
                                <div>
                                    {timeLeft.hours}
                                    <p className='text-xs font-normal'>hours</p>
                                </div>:
                                <div>
                                    {timeLeft.minutes}
                                    <p className='text-xs font-normal'>minutes</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-gray-500 font-poppins font-semibold">Ended on</p>
                            <p className="text-black font-poppins font-bold text-lg my-3">{formatDateTime(endTime)}</p>
                        </>
                    )}
                    <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-200">
                        Participate Now
                    </button>
                </div>
            </div>
        </>
    );
}

export default HackathonCard;
