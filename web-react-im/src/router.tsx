import { createHashRouter } from 'react-router-dom'
import App from './App'
import Chat from './pages/Chat'
import Session from './pages/Chat/Session'
import Contacts from './pages/Contacts'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'chat',
        element: <Chat />,
        children: [
          {
            path: 'session/:id',
            element: <Session />
          }
        ]
      },
      {
        path: 'contacts',
        element: <Contacts />
      }
    ],
  },
])

export default router