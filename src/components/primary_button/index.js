import style from "./primary_button.module.scss";

function PrimaryButton({
  value,
  marginTop,
  textColor,
  type,
  checkValidations,
  disabled,
}) {
  return (
    <input
      value={value}
      type={type}
      className={`${style.primary_button} ${style[marginTop]} ${style[textColor]}`}
      onClick={checkValidations}
      disabled={disabled}
    />
  );
}

export default PrimaryButton;
