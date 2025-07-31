import { useState } from "react";
import { books as BOOK_DATA } from "../../data/books"
import { Button, Col, Row } from "react-bootstrap";
import NewBook from '../library/newBook/NewBook'
import Books from '../library/books/Books'

const Dashboard = ({ onLogout }) => {
  
  const [books, setBooks] = useState(BOOK_DATA);
   const handleAddBook = (newBook) => { 
     const newBookWithId = {
       id: books[books.length - 1].id + 1,
       ...newBook,
     };
     setBooks(prevBooks => [newBookWithId, ...prevBooks])
   }
  
   const handleDeletedBook = (id) => { 
     setBooks(prevBooks => prevBooks.filter(book => book.id !== id))
   }
  return (
    <>
      <Row className="w-100">
        <Col/>
        <Col md={3} className="d-flex justify-content-end m-3">
            <Button onClick={onLogout}>Cerrar sesión</Button>
        </Col>
      </Row>
      <h1>Book Champions</h1>
      <p>¡Bienvenidos a book champions!</p>
      <NewBook onBookAdded={handleAddBook} books={books}/>
      <Books books={books} onDeleteBook={handleDeletedBook} /> 
    </>
  )
}

export default Dashboard