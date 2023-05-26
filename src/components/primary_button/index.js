import style from "./primary_button.module.scss";

function PrimaryButton({ buttonName, marginTop, textColor }) {
  return (
    <input
      type="button"
      value={buttonName}
      className={`${style.primary_button} ${style[marginTop]} ${style[textColor]}`}
    />
  );
}

export default PrimaryButton;
