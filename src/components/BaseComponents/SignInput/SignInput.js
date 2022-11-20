import "./SignInput.css";

function SignInput({
  header,
  type,
  placeholder,
  value,
  errorText,
  onChange,
  minLength,
  maxLength,
  pattern,
}) {
  console.log(errorText);
  return (
    <label className="sign-input">
      <span className="sign-input__span sign-input__span_header">{header}</span>
      <input
        className="sign-input__input sign-input__span_error"
        type={type}
        id={type}
        name={type}
        required
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        autoComplete="off"
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      ></input>
      <span className="sign-input__span sign-input__span_error" id={type}>
        {errorText}
      </span>
    </label>
  );
}

export default SignInput;
