import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'  

function ModalDeletedBook( {onConfirm, onCancel, title}) {
    return (
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
      
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>¿Usted desea eliminar el libro {title}?</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <p>El borrado del mismo sera irreversible</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='outline-primary' onClick={onCancel}>Cancelar</Button>
          <Button variant="danger" onClick={onConfirm}>Eliminar libro</Button>
        </Modal.Footer>
        </Modal.Dialog>
        
    </div>
    )
}   

export default ModalDeletedBook