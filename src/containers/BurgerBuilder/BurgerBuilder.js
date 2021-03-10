import { Burger } from "../../components/Burger/Burger";
import { Auxs } from "../../hoc/Auxs";

export const BurgerBuilder = () => {
	return (
		<Auxs>
			<Burger />
			<div>Build Controls</div>
		</Auxs>
	);
};