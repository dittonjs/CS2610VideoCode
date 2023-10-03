
export function Input(props) {
  return (
    <label>
      {props.label}
      <input type={props.type} />
    </label>
  );
}