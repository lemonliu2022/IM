import { createHashRouter } from 'react-router-dom'
import App from './App'
import Chat from './pages/Chat'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'chat',
        element: <Chat />,
      },
    ],
  },
])

export default router