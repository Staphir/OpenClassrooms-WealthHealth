import { useEffect, useRef } from "react";
import "./react-modal-text.css";

function ModalText ({text, isVisible, closeModalFunction}) {
    const dialogRef = useRef();

    useEffect(() => {
        if (isVisible) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [isVisible]);

    return (
        <dialog ref={dialogRef} className="modal-dialog">
            <p className="modal-text">{text}</p>
            <div className="modal-close-button" onClick={closeModalFunction}>
                <span className="modal-close-cross" onClick={closeModalFunction} />
            </div>
        </dialog>
    )
}

export default ModalText;