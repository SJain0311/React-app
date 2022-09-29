import NewMeetupForm from "../components/meetups/NewMeetupForm";
import React from "react";
import {useNavigate} from "react-router-dom"

function NewMeetup() {
  const navigate=useNavigate();
  function addMeetHandler(meetupData) {
    fetch(
      "https://react-getting-app-a5937-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        meaders: {
          "Content-Type": "application/json",
        },
      }
    ).then(()=>
    {
      navigate('/')
    })
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetHandler} />
    </section>
  );
}

export default NewMeetup;
