export default function Imagecard(props) {
  console.log("props:", props);
  return (
    <div className="each-poki">
      <h3> {props.title} </h3>
      <img alt={props.title} src={props.image} width={300} />
      <p>{props.description} </p>
    </div>
  );
}
