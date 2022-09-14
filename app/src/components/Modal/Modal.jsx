import ReactDOM from "react-dom";

import ModalInner from "./ModalInner";

const Modal = ({ children, ...props }) => {
  const modalRoot = document.getElementById("modal-root");

  return ReactDOM.createPortal(
    props.active && <ModalInner {...props}>{children}</ModalInner>,

    modalRoot
  );
};

export default Modal;
