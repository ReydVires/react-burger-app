import { useState } from "react";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls";
import { Burger } from "../../components/Burger/Burger";
import { Auxs } from "../../hoc/Auxs";

export const BurgerBuilder = () => {
	const [ingredients, setIngredients] = useState({
		salad: 0,
		bacon: 0,
		cheese: 0,
		meat: 0,
	});

	const updateIngredients = (type, count) => {
		const updateIngredients = {
			...ingredients
		};
		Reflect.set(updateIngredients, type, count);
		setIngredients(updateIngredients);
	};

	const handleAddIngredient = (type) => {
		/** @type {number} */
		const prevCount = Reflect.get(ingredients, type);
		const updateCount = prevCount + 1;
		updateIngredients(type, updateCount);
	};

	const handleRemoveIngredient = (type) => {
		/** @type {number} */
		const prevCount = Reflect.get(ingredients, type);
		const updateCount = prevCount - 1;
		if (updateCount >= 0) {
			updateIngredients(type, updateCount);
		}
	};

	return (
		<Auxs>
			<Burger ingredients={ingredients} />
			<BuildControls
				handleAdd={handleAddIngredient}
				handleRemove={handleRemoveIngredient}
			/>
		</Auxs>
	);
};