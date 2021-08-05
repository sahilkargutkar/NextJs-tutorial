import classes from "./event-content.module.css";

function EventContent(props) {
  const { text } = props;
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
