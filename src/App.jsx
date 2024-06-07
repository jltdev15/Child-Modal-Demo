import { useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModalSecond, setShowModalSecond] = useState(false);

  return (
    <>
      <div className=" h-screen flex justify-center items-center flex-col gap-6">
        <button
          className="bg-blue-600 text-gray-50 p-6"
          onClick={() => setShowModal(true)}
        >
          Open Modal No. 1
        </button>

        {/* First modal */}

        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <div className="bg-gray-50">
            <h2>Hello from the Modal!</h2>
            <p>This is some modal content.</p>
            <button
              className="bg-red-500 w-full text-gray-50 p-3 inline-block"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </Modal>

        {/* Second Modal */}
        <button
          className="bg-red-600 text-gray-50 p-6"
          onClick={() => setShowModalSecond(true)}
        >
          Open Modal No. 2
        </button>

        <Modal
          isOpen={showModalSecond}
          onClose={() => setShowModalSecond(false)}
        >
          <h2>Hello from the Second Modal!</h2>
          <p>This is some modal content.</p>
          <button
            className="bg-red-500 w-full text-gray-50 p-3 inline-block"
            onClick={() => setShowModalSecond(false)}
          >
            Close
          </button>
        </Modal>
      </div>
    </>
  );
}

export default App;
