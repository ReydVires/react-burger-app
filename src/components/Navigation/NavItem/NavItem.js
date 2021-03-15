import Style from "./NavItem.module.css";

export const NavItem = ({ children, link, active }) => {
	return (
		<li className={Style.NavItem}>
			<a
				href={link}
				className={active && Style.active}>{children}</a>
		</li>
	);
};