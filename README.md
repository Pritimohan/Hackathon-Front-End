
# Hackathon Publishing Platform

This is a frontend web application that allows users to publish hackathons with various details such as name, description, start time, end time, picture, and difficulty level (easy, medium, hard). Users can filter hackathons by different criteria and view details of each hackathon. The project is built using **React**, **Redux**, and **React Router DOM**, with data stored in **localStorage**.

## Link

[Hackathon Publishing Platform](https://capable-cendol-4a01f6.netlify.app/)

## Features

- **Publish Hackathons**: Users can create and publish hackathons by providing details such as:
  - Name
  - Description
  - Start Time & End Time
  - Picture
  - Difficulty Level (easy, medium, hard)
  
- **View & Filter Hackathons**: Users can view hackathons and filter them based on:
  - **Sorting**: Sort hackathons from newest to oldest and vice versa.
  - **Difficulty Level**: Filter hackathons by easy, medium, or hard.
  - **Status**: Filter hackathons by upcoming, running, or past.
  
- **Hackathon Cards**:
  - **Active Hackathons**: Displays a timer showing how long until the hackathon ends.
  - **Upcoming Hackathons**: Displays a timer showing when the hackathon will start.
  - **Past Hackathons**: Displays the start and end date.

- **Hackathon Details Page**: 
  - Clicking on a hackathon card takes the user to a detailed page where all information related to the hackathon is displayed.
  - The page includes options to **edit** or **delete** the hackathon.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For managing the global state of the application.
- **React Router DOM**: For routing between different pages.
- **LocalStorage**: For storing hackathon data locally on the user's machine.

## Getting Started

### Prerequisites

To run this project locally, you need:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Pritimohan/Hackathon-Front-End.git
```

2. Install the required dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm run dev
```

## Usage

- **Publish a Hackathon**: Fill out the form on the homepage to publish a new hackathon.
- **View Hackathons**: Browse through the hackathons listed and use the filter options to sort by date, difficulty level, or status.
- **Search**: Use the search bar to find hackathons by name.
- **Edit/Delete**: Click on a hackathon to view its details, where you can edit or delete the hackathon.

## Data Storage

All hackathon data is stored in **localStorage**, meaning the data will persist across page reloads. However, the data is not stored on a server, so it will be lost if the user clears their localStorage.

## Future Enhancements

- Backend integration to store hackathon data on a server.
- User authentication for creating and managing hackathons.
- More advanced filtering and search features.

## License

This project is open-source and available under the [MIT License](LICENSE).
