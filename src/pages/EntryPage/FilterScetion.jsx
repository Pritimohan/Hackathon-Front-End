import { useEffect, useState } from "react";
import { sortChallenges } from '../../utils/sortChallenges.js';
import { MdCancel } from "react-icons/md";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

import { useDispatch } from "react-redux";
import { toggleIsOpen } from '../../redux/isOpenSlice.js'



function FilterSection({ onFilterChange }) {
    const dispatch = useDispatch();

    const challenge = JSON.parse(localStorage.getItem('challenges')) || [];
    const [selectedStatus, setSelectedStatus] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [shortOrder, setShortOrder] = useState('newest');
    const [isOpen, setIsOpen] = useState(false);

    // Handle open
    const handleOpen = () => {
        setIsOpen(!isOpen);
        dispatch(toggleIsOpen(!isOpen));
    }

    // Handle short order
    const handleShortOrder = (event) => {
        const { value } = event.target;
        if (value === 'newest' || value === 'oldest') {
            setShortOrder(value);
        }
    };
    // Handle status change
    const handleStatusChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedStatus([...selectedStatus, value]);
        } else {
            setSelectedStatus(selectedStatus.filter((status) => status !== value));
        }
    };
    // Handle level change
    const handleLevelChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedLevels([...selectedLevels, value]);
        } else {
            setSelectedLevels(selectedLevels.filter((level) => level !== value));
        }
    };
    // Handle search text change
    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };
    // Filter challenges based on status, levels, search text and short order.
    useEffect(() => {
        let filtered = challenge;

        if (selectedStatus.length > 0 && !selectedStatus.includes('All')) {
            filtered = filtered.filter((item) => selectedStatus.includes(item.status));
        }

        if (selectedLevels.length > 0) {
            filtered = filtered.filter((item) => selectedLevels.includes(item.levelType));
        }

        if (searchText) {
            filtered = filtered.filter((item) =>
                item.challengeName.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        if (shortOrder) {
            filtered = sortChallenges(filtered, shortOrder);
            console.log(filtered);
        }

        onFilterChange(filtered);
        // isOpen && setIsOpen(false);

    }, [selectedStatus, selectedLevels, searchText, shortOrder]);

    return (
        <div className=' bg-[#002A3B] flex justify-center items-center relative gap-4 flex-col py-2 pt-10'>
            <h2 className=' font-poppins font-semibold text-xl text-white'>Explore Challenges</h2>

            <div className=' w-1/2 grid grid-cols-7 gap-3 grid-rows-2'>
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchTextChange}
                    placeholder="Search"
                    className="px-4 py-1 border border-gray-300 rounded-md col-span-6 h-12 outline-none"
                />

                <div className='relative z-40'>

                    <button
                        onClick={handleOpen}
                        className={`flex justify-between items-center bg-white h-12 px-3 py-1.5 border border-gray-300 rounded-md relative ${isOpen ? 'w-64' : ''}`}
                    >
                        <span>Filter</span>
                        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown size={20} />}
                    </button>
                    {isOpen && (
                        <div className="bg-white rounded-lg p-4 w-64 absolute mt-1">
                            <div className="mb-4">
                                <h3 className="font-medium text-gray-700 mb-2">Status</h3>
                                <div>
                                    <label className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            value="All"
                                            onChange={handleStatusChange}
                                            checked={selectedStatus.includes('All') ? true : false}
                                            className="mr-2"
                                        />
                                        All
                                    </label>
                                    <label className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            value="Active"
                                            onChange={handleStatusChange}
                                            checked={selectedStatus.includes('Active') ? true : false}
                                            className="mr-2"
                                        />
                                        Active
                                    </label>
                                    <label className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            value="Upcoming"
                                            onChange={handleStatusChange}
                                            checked={selectedStatus.includes('Upcoming') ? true : false}
                                            className="mr-2"
                                        />
                                        Upcoming
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value="Past"
                                            onChange={handleStatusChange}
                                            checked={selectedStatus.includes('Past') ? true : false}
                                            className="mr-2"
                                        />
                                        Past
                                    </label>
                                </div>
                            </div>

                            <div className='mb-4'>
                                <h3 className="font-medium text-gray-700 mb-2">Level</h3>
                                <div>
                                    <label className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedLevels.includes('Easy') ? true : false}
                                            value="Easy"
                                            onChange={handleLevelChange}
                                            className="mr-2"
                                        />
                                        Easy
                                    </label>
                                    <label className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedLevels.includes('Medium') ? true : false}
                                            value="Medium"
                                            onChange={handleLevelChange}
                                            className="mr-2"
                                        />
                                        Medium
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedLevels.includes('Hard') ? true : false}
                                            value="Hard"
                                            onChange={handleLevelChange}
                                            className="mr-2"
                                        />
                                        Hard
                                    </label>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-700 mb-2">Sort By</h3>
                                <div>
                                    <label className="flex items-center mb-2">
                                        <input
                                            type="radio"
                                            value="newest"
                                            onChange={handleShortOrder}
                                            checked={shortOrder === 'newest'}
                                            className="mr-2"
                                        />
                                        Newest to Oldest
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            value="oldest"
                                            onChange={handleShortOrder}
                                            checked={shortOrder === 'oldest'}
                                            className="mr-2"
                                        />
                                        Oldest to Newest
                                    </label>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
                <div className=' flex gap-3 col-span-7 h-9  '>
                    {selectedLevels.map((level) => (
                        <div
                            key={level} className='text-white bg-slate-500 px-4 py-1 rounded-full flex items-center justify-center gap-2 z-40'>
                            {level}
                            <span
                                className='cursor-pointer hover:scale-110 transform transition-transform'
                                onClick={() => setSelectedLevels(selectedLevels.filter((item) => item !== level))}
                            > <MdCancel />
                            </span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default FilterSection;