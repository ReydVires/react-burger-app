import PropTypes from "prop-types";
import Style from "./Button.module.css";

export const Button = ({ children, onClick, btnType }) => {
	return (
		<button
			className={[Style.Button, Reflect.get(Style, btnType)].join(" ")}
			onClick={onClick}>{children}</button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	btnType: PropTypes.string.isRequired,
};