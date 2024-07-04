import React, { useState } from 'react';

function AddUserModal({ isOpen, onClose }) {
  return (
    <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <div className="p-6">
                <p>This is the modal content.</p>
                </div>
                <ModalFooter>
                <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  )
}

export default AddUserModal