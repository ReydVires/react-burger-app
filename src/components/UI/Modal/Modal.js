import Style from "./Modal.module.css";

export const Modal = ({ children, show }) => {
	return (
		<div className={Style.Modal} style={{
			transform: show ? "translateY(0)" : "translateY(-100vh)",
			opacity: show ? "1" : "0",
		}}>
			{children}
		</div>
	);
};