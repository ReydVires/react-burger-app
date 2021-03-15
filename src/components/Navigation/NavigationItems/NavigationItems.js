import { NavItem } from "../NavItem/NavItem";
import Style from "./NavigationItems.module.css";

export const NavigationItems = () => {
	return (
		<ul className={Style.NavigationItems}>
			<NavItem link="#" active>Burger Builder</NavItem>
			<NavItem link="#">Checkout</NavItem>
		</ul>
	);
};