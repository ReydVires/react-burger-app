import { Auxs } from "../../../hoc/Auxs";
import { Button } from "../../UI/Button/Button";

export const OrderSummary = ({ ingredients, cancelOrder, confirmOrder, totalPrice }) => {
	const transformIngredients = Object.keys(ingredients).map((key) => {
		return (
			<li key={key}>
				<span style={{textTransform: "capitalize"}}>{key}</span>: {Reflect.get(ingredients, key)}
			</li>
		);
	});

	return (
		<Auxs>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{transformIngredients}
			</ul>
			<p>Total price: <strong>Rp{totalPrice.toFixed(2)}</strong></p>
			<p>Continue to checkout?</p>
			<Button btnType="Danger" onClick={cancelOrder}>Cancel</Button>
			<Button btnType="Success" onClick={confirmOrder}>Continue</Button>
		</Auxs>
	);
};