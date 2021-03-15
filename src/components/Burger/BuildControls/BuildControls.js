import { BuildControl } from "./BuildControl/BuildControl";
import Style from "./BuildControls.module.css";
import PropTypes from "prop-types";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Meat", type: "meat" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Bacon", type: "bacon" },
];

export const BuildControls = ({ handleAdd, handleRemove, dataListInfo, price, handleOrder }) => {
	const handleDisable = (type) => {
		const item = dataListInfo.find((val) => val.type === type);
		return item.isDisable;
	};

	const disabledOrder = () => {
		return dataListInfo.every((val) => val.isDisable);
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
			<button
				className={Style.OrderButton}
				disabled={disabledOrder()}
				onClick={handleOrder}>ORDER NOW!</button>
		</div>
	);
};

BuildControls.propTypes = {
	handleAdd: PropTypes.func.isRequired,
	handleRemove: PropTypes.func.isRequired,
	handleOrder: PropTypes.func.isRequired,
	dataListInfo: PropTypes.array,
	price: PropTypes.number,
};