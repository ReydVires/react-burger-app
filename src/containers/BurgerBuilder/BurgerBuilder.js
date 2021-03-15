import { useState } from "react";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls";
import { Burger } from "../../components/Burger/Burger";
import { OrderSummary } from "../../components/Burger/OrderSummary/OrderSummary";
import { Modal } from "../../components/UI/Modal/Modal";
import { Auxs } from "../../hoc/Auxs";

const priceList = {
	salad: 7450,
	meat: 22500,
	cheese: 18000,
	bacon: 19500,
};

export const BurgerBuilder = () => {
	const [ingredients, setIngredients] = useState({
		salad: 0,
		bacon: 0,
		cheese: 0,
		meat: 0,
	});
	const [totalPrice, setTotalPrice] = useState(0);
	const [ordering, setOrdering] = useState(false);

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
		setTotalPrice(totalPrice + (Reflect.get(priceList, type) || 0));
	};

	const handleRemoveIngredient = (type) => {
		/** @type {number} */
		const prevCount = Reflect.get(ingredients, type);
		const updateCount = prevCount - 1;
		if (updateCount >= 0) {
			updateIngredients(type, updateCount);
			setTotalPrice(totalPrice - (Reflect.get(priceList, type) || 0));
		}
	};

	const disabledInfo = Object.entries(ingredients).map(([type, disabled]) => {
		return { type, isDisable: (disabled <= 0) };
	});

	const purchaseHandler = () => {
		setOrdering(true);
	};

	const purchaseCancelHandler = () => {
		setOrdering(false);
	};

	return (
		<Auxs>
			<Modal show={ordering} modalClosed={purchaseCancelHandler}>
				<OrderSummary ingredients={ingredients} />
			</Modal>
			<Burger ingredients={ingredients} />
			<BuildControls
				handleAdd={handleAddIngredient}
				handleRemove={handleRemoveIngredient}
				handleOrder={purchaseHandler}
				dataListInfo={disabledInfo}
				price={totalPrice}
			/>
		</Auxs>
	);
};