import { Auxs } from "../../hoc/Auxs";
import Style from "./Layout.module.css";

export const Layout = ({ children }) => {
	return (
		<Auxs>
			<div>Toolbar, SideDrawer</div>
			<main className={Style.Content}>
				{children}
			</main>
		</Auxs>
	);
};