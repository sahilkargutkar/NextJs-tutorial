import { useRef } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailRef = useRef();
  const feedbackRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  // function loadFeedbackHandler() {
  //   fetch("/api/feedback")
  //     .then((response) => response.json)
  //     .then((data) => setFeedbackItems(data.feedback));
  // }

  return (
    <div>
      <h1>HomePage</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email:-</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback:-</label>
          <textarea id="feedback" rows="5" ref={feedbackRef}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
