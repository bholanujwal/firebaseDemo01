import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FirebaseProvider } from './context/firebase.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <FirebaseProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseProvider>
)
