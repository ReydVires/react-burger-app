import { Auxs } from "../../hoc/Auxs";
import { Toolbar } from "../Navigation/Toolbar/Toolbar";
import Style from "./Layout.module.css";

export const Layout = ({ children }) => {
	return (
		<Auxs>
			<Toolbar />
			<main className={Style.Content}>
				{children}
			</main>
		</Auxs>
	);
};