const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className={`modal-overlay ${isOpen ? "" : "hidden"}`}>
        <div className="modal-content" onClick={onClose}>
          <div
            className="bg-gray-50 flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end h-10 w-10 m-1 rounded-[50%] hover:bg-red-500"
              onClick={onClose}
            >
              &times;
            </button>
            <div className="p-3">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
