import { buildFeedbackpath, extractFeedback } from "../api/feedback";

function FeedBackPage(props) {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackpath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedBackPage;
