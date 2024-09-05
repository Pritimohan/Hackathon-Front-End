import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import EntryPage from './pages/EntryPage/EntryPage.jsx'
import CreateChallengePage from './pages/CreateChallengePage/CreateChallengePage.jsx'
import HackathonPage from './pages/HackathonsPage/HackathonPage.jsx'

import { Provider } from 'react-redux'
import { store } from './redux/store.js'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <EntryPage />
    },
    {
      path: '/create-challenge',
      element: <CreateChallengePage />
    },
    {
      path: '/hackathons/:id', // pars the id from the url
      element: <HackathonPage />
    },
    {
      path: '/edit-challenge/:id',
      element: <CreateChallengePage />
    }
    
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
