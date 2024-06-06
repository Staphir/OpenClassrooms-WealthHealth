import { useEffect, useRef } from "react";
import "./react-modal-text.css";

function ModalText ({buttonName, text, onOpen, onClose}) {
    const dialogRef = useRef();

    const openModal = () => {
        dialogRef.current.showModal();
        onOpen && onOpen();
    }
    const closeModal = () => {
        dialogRef.current.close();
        onClose && onClose();
    }

    return (
        <>
            <button className="modal-button" onClick={openModal}>{buttonName}</button>
            <dialog className="modal-dialog" ref={dialogRef}>
                <p className="modal-text">{text}</p>
                <div className="modal-close-button" onClick={closeModal}>
                    <span className="modal-close-cross"/>
                </div>
            </dialog>
        </>
    )
}

export default ModalText;