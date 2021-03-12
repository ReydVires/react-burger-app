import { BuildControl } from "./BuildControl/BuildControl";
import Style from "./BuildControls.module.css";
import PropTypes from "prop-types";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Meat", type: "meat" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Bacon", type: "bacon" },
];

export const BuildControls = ({ handleAdd, handleRemove, disabled, price }) => {
	const handleDisable = (type) => {
		const item = disabled.find((val) => val.type === type);
		return item.isDisable;
	};

	return (
		<div className={Style.BuildControls}>
			<p>Current price: <strong>Rp{price.toFixed(2)}</strong></p>
			{controls.map((ctrl) => (
				<BuildControl
					key={ctrl.type}
					label={ctrl.label}
					onAdd={() => handleAdd(ctrl.type)}
					onRemove={() => handleRemove(ctrl.type)}
					isDisable={handleDisable(ctrl.type)}
				/>
			))}
		</div>
	);
};

BuildControls.propTypes = {
	handleAdd: PropTypes.func.isRequired,
	handleRemove: PropTypes.func.isRequired,
	disabled: PropTypes.array,
	price: PropTypes.number,
};