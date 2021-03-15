import { Auxs } from "../../../hoc/Auxs";

export const OrderSummary = ({ ingredients }) => {
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
			<p>Continue to checkout?</p>
		</Auxs>
	);
};