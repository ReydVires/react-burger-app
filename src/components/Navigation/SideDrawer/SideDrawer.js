import { Auxs } from "../../../hoc/Auxs";
import { Logo } from "../../Logo/Logo";
import { Backdrop } from "../../UI/Backdrop/Backdrop";
import { NavigationItems } from "../NavigationItems/NavigationItems";
import Style from "./SideDrawer.module.css";

export const SideDrawer = ({ open, close }) => {
	const transformStyle = [Style.SideDrawer, Style.Close];
	if (open) {
		transformStyle.pop();
		transformStyle.push(Style.Open);
	}

	return (
		<Auxs>
			<Backdrop show={open} onClick={close}/>
			<div className={transformStyle.join(" ")}>
				<div className={Style.Logo}><Logo /></div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Auxs>
	);
};