import React, { useState } from 'react';

import HackathonCard from '../../components/HackathonCard';
import { Link } from 'react-router-dom';
import FilterSection from './FilterScetion';

function ExploreChallengesSection() {
  const [filteredChallenges, setFilteredChallenges] = useState([]);
  return (
    <>
      <FilterSection onFilterChange={setFilteredChallenges} />
      <div className='min-h-screen bg-[#003145] p-11 grid grid-cols-3 gap-10'>
        {filteredChallenges.length > 0 ? (
          filteredChallenges.map((hackathon) => (
            <Link key={hackathon.id} to={`/hackathons/${hackathon.id}`}>
              <HackathonCard
                id={hackathon.id}
                title={hackathon.challengeName}
                startTime={hackathon.startDate}
                endTime={hackathon.endDate}
                imageUrl={hackathon.image}
              />
            </Link>
          ))
        ) : (
          <p className="text-white font-poppins">No challenges found....</p>
        )}
      </div>
    </>
  );
}

export default ExploreChallengesSection;
