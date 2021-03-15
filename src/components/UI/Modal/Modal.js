import { Auxs } from "../../../hoc/Auxs";
import { Backdrop } from "../Backdrop/Backdrop";
import Style from "./Modal.module.css";

export const Modal = ({ children, show, modalClosed }) => {
	return (
		<Auxs>
			<Backdrop show={show} onClick={modalClosed} />
			<div className={Style.Modal} style={{
				transform: show ? "translateY(0)" : "translateY(-100vh)",
				opacity: show ? "1" : "0",
			}}>
				{children}
			</div>
		</Auxs>
	);
};