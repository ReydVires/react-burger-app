import { Logo } from "../../Logo/Logo";
import Style from "./Toolbar.module.css";

export const Toolbar = () => {
	return (
		<header className={Style.Toolbar}>
			<div>HOME</div>
			<Logo />
			<nav>...</nav>
		</header>
	);
};