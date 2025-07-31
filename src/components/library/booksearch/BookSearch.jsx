import { Form } from 'react-bootstrap'

const BookSearch = ({search, onSearch}) => {

    const handleChangeInput = (e) => {
      onSearch(e.target.value)
    }   

  return (
    <Form.Group className='mb-3' controlId='searchBook'>
      <Form.Control
        type="text"
        placeholder="Buscar libro.."
        onChange={handleChangeInput}
        value={search}
      />
    </Form.Group>
  )
}

export default BookSearch