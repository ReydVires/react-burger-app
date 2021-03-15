import { Logo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import Style from "./Toolbar.module.css";

export const Toolbar = () => {
	return (
		<header className={Style.Toolbar}>
			<div>HOME</div>
			<Logo />
			<nav>
				<NavigationItems />
			</nav>
		</header>
	);
};