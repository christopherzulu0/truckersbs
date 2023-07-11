import { useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react";

interface ReusableModalProps {
    children: React.ReactNode;
    setIsOpen: (value: boolean) => void;
    isOpen: boolean;
}

const ReusableModal = ({ children, isOpen, setIsOpen}: ReusableModalProps) => {

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} size="md"  >
        <ModalOverlay />
        <ModalContent width={['90%', '90%', 'full', 'full']}>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReusableModal;