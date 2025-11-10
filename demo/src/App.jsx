import { useState, useEffect } from 'react'
import './App.css'
import { messaging } from './firebase'
import { getToken } from 'firebase/messaging'

function App() {

  // ask user for notification permission
  async function requestPremission() {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      // generate token/
      const token = await getToken(messaging, {
        vapidKey:
          'BDqMLKNPz0Zo4jDAu0ztLztx3pCkRjKj5SX_atP0it-vEBskoSv7LKucmIdcMhmYGwpfQaWSzCirsDW0hCjeR7o'
      });

      // console.log('generated tokrn', token);
    } else if (permission === 'denied') {
      alert('you denied for permission');
    }
  }

  useEffect(() => {
    requestPremission()
  }, [])

  return (
    <>
     <h1>hello</h1>
    </>
  )
}

export default App
