import logoSource from "../../assets/images/burger-logo.png";
import Style from "./Logo.module.css";

export const Logo = () => {
	return (
		<div className={Style.Logo}>
			<img src={logoSource} alt="burgerLogo" />
		</div>
	);
};