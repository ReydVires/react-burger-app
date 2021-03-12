import Style from "./Burger.module.css";
import PropTypes from "prop-types";
import { BurgerIngredient } from "./BurgerIngredient/BurgerIngredient";

export const Burger = ({ ingredients }) => {
	let transformedIngredients = Object.keys(ingredients).map((ingredientKey) => {
		/** @type {number} */
		const count = Reflect.get(ingredients, ingredientKey);
		return [...Array(count)]
			.map((_, i) => <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />);
	});

	const isEmptyIngredients = transformedIngredients.reduce((acc, curr) => acc.concat(curr), []).length === 0;
	if (isEmptyIngredients) {
		transformedIngredients = <p>Please add some ingredients here!</p>;
	}

	return (
		<div className={Style.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

Burger.propTypes = {
	ingredients: PropTypes.object,
};