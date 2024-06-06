const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className={`modal-overlay ${isOpen ? "" : "hidden"}`}>
        <div className="modal-content bg-gray-50" onClick={onClose}>
          <div
            className="bg-gray-50 flex flex-col "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="bg-blue-600 self-end px-3 py-2 rounded-full"
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
