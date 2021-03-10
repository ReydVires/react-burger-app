import { Auxs } from "../../hoc/Auxs";

export const Layout = ({ children }) => {
	return (
		<Auxs>
			<div>
				<h2>Toolbar, SideDrawer, Backdrop</h2>
			</div>
			<main>{children}</main>
		</Auxs>
	);
};