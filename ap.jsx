// import { useState, useEffect } from 'react'
import './App.css'
// import { messaging } from './context/firebase'
// import { getToken } from 'firebase/messaging'

function App() {

  // ask user for notification permission
  // async function requestPremission() {
  //   const permission = await Notification.requestPermission();

  //   if (permission === 'granted') {
  //     // generate token/
  //     const token = await getToken(messaging, {
  //       vapidKey:
  //         'BDqMLKNPz0Zo4jDAu0ztLztx3pCkRjKj5SX_atP0it-vEBskoSv7LKucmIdcMhmYGwpfQaWSzCirsDW0hCjeR7o'
  //     });

  //     // console.log('generated tokrn', token);
  //   } else if (permission === 'denied') {
  //     alert('you denied for permission');
  //   }
  // }

  // useEffect(() => {
  //   requestPremission()
  // }, [])


  function handleForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
  }

  return (
    <>
      <h1>Firebase</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="book">Book Name</label>
        <input type="text" id="book" name="book" />

        <label htmlFor="genera">Genera</label>
        <input type="text" id="genera" name="genera" />

        <button type="submit">Send</button>
      </form>
    </>
  )
}

export default App
