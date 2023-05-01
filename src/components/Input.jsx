export default function Input(props) {
  const { type = "text", ...rest } = props;

  return <input {...rest} type={type} className="input" />;
}
