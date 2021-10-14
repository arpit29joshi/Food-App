import { Fragment } from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClose} />;
}
function ModalOverlay(props) {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
}

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
}
export default Modal;
