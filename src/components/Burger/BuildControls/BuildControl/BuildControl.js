import Style from "./BuildControl.module.css";
import PropTypes from "prop-types";

export const BuildControl = ({ label, onAdd, onRemove, isDisable }) => {
	return (
		<div className={Style.BuildControl}>
			<div className={Style.Label}>{label}</div>
			<button disabled={isDisable} className={Style.Less} onClick={onRemove}>Less</button>
			<button className={Style.More} onClick={onAdd}>More</button>
		</div>
	);
};

BuildControl.propTypes = {
	label: PropTypes.string,
	onAdd: PropTypes.func,
	onRemove: PropTypes.func,
	isDisable: PropTypes.bool,
};