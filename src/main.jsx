import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import AuthProvider from './Auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
   <div className='max-w-7xl mx-auto'>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
   </div>
)
