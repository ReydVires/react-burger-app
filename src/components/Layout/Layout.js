import { useState } from "react";
import { Auxs } from "../../hoc/Auxs";
import { SideDrawer } from "../Navigation/SideDrawer/SideDrawer";
import { Toolbar } from "../Navigation/Toolbar/Toolbar";
import Style from "./Layout.module.css";

export const Layout = ({ children }) => {
	const [showSideDrawer, setShowSideDrawer] = useState(false);

	const sideDrawerCloseHandler = () => {
		setShowSideDrawer(false);
	};

	const sideDrawerOpenHandler = () => {
		setShowSideDrawer(true);
	};

	return (
		<Auxs>
			<Toolbar openSideDrawer={sideDrawerOpenHandler} />
			<SideDrawer
				open={showSideDrawer}
				close={sideDrawerCloseHandler}
			/>
			<main className={Style.Content}>
				{children}
			</main>
		</Auxs>
	);
};