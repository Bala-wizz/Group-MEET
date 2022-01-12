import { useNavigate } from "react-router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetUpHandler(meetUpData) {
    //sending a request to a database using fetch method
    fetch(
      "https://react-meetup-2f419-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1> Add New MeetUp</h1>

      <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
}
export default NewMeetupPage;
