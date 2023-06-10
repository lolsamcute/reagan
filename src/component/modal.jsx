
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

const ModalLayout =(props) => {
    return (
        <>


      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
        
          <ModalCloseButton />
          <ModalBody>
           {props.children}
          </ModalBody>

          
        </ModalContent>
      </Modal>
        
        </>
    )
}

export default ModalLayout;