import Modal from './Modal'

function DeleteModal({ contactId, closeModal, dispatch }) {
    const handleDelete = () => {
        dispatch({ type: 'deleteContact', payload: contactId });
        closeModal();
    };

    return (
        <Modal>
            <h3>This contact will be deleted, are you sure?</h3>
            <div className="confirm-box">
                <button className="delete-yes btn" onClick={handleDelete}>
                Yes
                </button>
                <button className="delete-no btn" onClick={closeModal}>
                No
                </button>
            </div>
        </Modal>
    );
}

export default DeleteModal