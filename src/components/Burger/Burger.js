import Style from "./Burger.module.css";
import { BurgerIngredient } from "./BurgerIngredient/BurgerIngredient";

export const Burger = () => {
	return (
		<div className={Style.Burger}>
			<BurgerIngredient type="bread-top" />
			<BurgerIngredient type="meat" />
			<BurgerIngredient type="cheese" />
			<BurgerIngredient type="meat" />
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};