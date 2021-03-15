import Style from "./Backdrop.module.css";

export const Backdrop = ({ show, onClick }) => {
	return (show && <div className={Style.Backdrop} onClick={onClick}></div>);
};