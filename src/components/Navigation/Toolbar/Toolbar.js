import { Logo } from "../../Logo/Logo";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import Style from "./Toolbar.module.css";

export const Toolbar = ({ openSideDrawer }) => {
	return (
		<header className={Style.Toolbar}>
			<div onClick={openSideDrawer}>HOME</div>
			<Logo />
			<nav className={Style.DesktopOnly}>
				<NavigationItems />
			</nav>
		</header>
	);
};