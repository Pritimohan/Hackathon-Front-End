import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const ChallengeForm = () => {
  const id = useParams().id;
  const navigate = useNavigate();

  const hackathons = JSON.parse(localStorage.getItem('challenges')) || [];
  const hackathon = hackathons.find((hackathon) => hackathon.id === id);
  
  const [challengeName, setChallengeName] = useState(hackathon?.challengeName || "");
  const [startDate, setStartDate] = useState(hackathon?.startDate || "");
  const [endDate, setEndDate] = useState(hackathon?.endDate || "");
  const [description, setDescription] = useState(hackathon?.description || "");
  const [image, setImage] = useState(hackathon?.image || null);
  const [levelType, setLevelType] = useState(hackathon?.levelType || "Easy");



  const handleImageChange = (e) => {
    const maxSize = 2 * 1024 * 1024;
    if (e.target.files[0].size > maxSize) {
      alert("Image size should be less than 2MB");
      return;
    }
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (!challengeName || !startDate || !endDate || !description || !image || !levelType) {
      alert("Please fill all the fields");
      return;
    }

    if (!id) {
      // Handle form submission for creating
      const challenge = {
        id: uuidv4(),
        createdDate: new Date().toISOString(),
        challengeName,
        startDate,
        endDate,
        description,
        image,
        levelType,
      };
      const challenges = [...hackathons];
      challenges.push(challenge);
      console.log(challenges);
      localStorage.setItem("challenges", JSON.stringify(challenges));
    }

    else {
      // Handle form submission for editing
      const challenges = [...hackathons];
      const index = challenges.findIndex((challenge) => challenge.id === id);
      challenges[index] = {
        id,
        createdDate: hackathon.createdDate,
        challengeName,
        startDate,
        endDate,
        description,
        image,
        levelType,

      };
      localStorage.setItem("challenges", JSON.stringify(challenges));
    }

    setChallengeName("");
    setStartDate("");
    setEndDate("");
    setDescription("");
    setImage(null);
    setLevelType("Easy");

    navigate("/"); // Redirect to home page
  };


  return (
    <div className="max-w-xl p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Challenge Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Challenge Name</label>
          <input
            type="text"
            value={challengeName}
            onChange={(e) => setChallengeName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Challenge Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Start Date</label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">End Date</label>
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            placeholder="Description of the challenge"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Image 2MB</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {image && (
            <div className="mt-4">
              <img src={image} alt="Uploaded Preview" className="h-32 object-cover rounded-md" />
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Level Type</label>
          <select
            value={levelType}
            onChange={(e) => setLevelType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          {!id ? "Create Challenge" : "Edit Challenge"}
        </button>
      </form>
    </div>
  );
};

export default ChallengeForm;
