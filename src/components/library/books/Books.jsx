import { useState } from "react";
import BookItem from "../bookItem/BookItem";
import Modal from '../../modal/Modal'  
import BookSearch from "../booksearch/BookSearch";

const Books = ({ books, onDeleteBook }) => {
    const [selectedBook, setSelectedBook] = useState(''); 
    const [modalBookDeleted, setModalBookDeleted] = useState(false) 
    const [BookToDeleted, setBookToDeleted] = useState(null) 
    const [searchBook, setSearchBook] = useState("")

    const handleSelectBook = (title) => {
        setSelectedBook(title);
    }

    const handleDeletedBook = (id, title) => {
        setBookToDeleted( { id, title } )
        setModalBookDeleted(prevBool => !prevBool)
    }

    const handleConfirmDelete = () => {
        if(BookToDeleted){
            onDeleteBook(BookToDeleted.id)
            setModalBookDeleted(prevBool => !prevBool)
            setBookToDeleted(null)
        }
    }

    const handleCancelDelete = () => {
        setModalBookDeleted(prevBool => !prevBool)
    }

    const handleSearchBook = (search) => {
        setSearchBook(search)
    }


    const booksMapped = books
    .filter(book => book.title.toLowerCase().includes(searchBook.toLowerCase()))
    .map(book => (
        <BookItem
            id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
            onBookSelected={handleSelectBook}
            onBookDeleted={handleDeletedBook}
        />
    ))


    return (
        <>
            <BookSearch search={searchBook} onSearch={handleSearchBook}/>
            {
                modalBookDeleted && 
                <Modal onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} title={BookToDeleted.title}/>
            }
            {selectedBook
                &&
                <p>Usted ha seleccionado el libro: <b>{selectedBook}</b>
                </p>}
            <div className="d-flex justify-content-center flex-wrap">
                {booksMapped}
            </div>
        </>
    )
};

export default Books;