export default function Post(props) {
  return (
    <div>
      <h3>
        {props.title} - {props.author}
      </h3>
      <div>{props.content}</div>
      <hr />
    </div>
  );
}
