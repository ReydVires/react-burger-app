import { useState } from "react";
import { instance as axios } from "../../axios-orders";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls";
import { Burger } from "../../components/Burger/Burger";
import { OrderSummary } from "../../components/Burger/OrderSummary/OrderSummary";
import { Modal } from "../../components/UI/Modal/Modal";
import { Spinner } from "../../components/UI/Spinner/Spinner";
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
	const [loading, setLoading] = useState(false);

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

	const purchaseContinueHandler = () => {
		setLoading(true);
		const order = {
			ingredients: ingredients,
			price: totalPrice,
			customer: {
				name: "Lorem",
			}
		};
		axios.post("/orders.json", order)
			.then((response) => {
				setOrdering(false);
				console.log(response);
			})
			.catch((err) => {
				console.log(err.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<Auxs>
			<Modal show={ordering} modalClosed={purchaseCancelHandler}>
				{loading
					? <Spinner />
					: <OrderSummary
							ingredients={ingredients}
							cancelOrder={purchaseCancelHandler}
							confirmOrder={purchaseContinueHandler}
							totalPrice={totalPrice}
						/>}
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