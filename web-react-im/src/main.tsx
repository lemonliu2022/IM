import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './assets/css/global.less'

const rootDOM = document.getElementById('root')

if(rootDOM) {
  ReactDOM.createRoot(rootDOM).render(
    <RouterProvider router={router} />
  )
}
