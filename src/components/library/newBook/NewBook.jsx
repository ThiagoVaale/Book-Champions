import { useRef, useState } from "react";
import { Button, Card, Col, Form, Row, FormSelect } from "react-bootstrap";

const NewBook = ({ onBookAdded, books }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [available, setAvailable] = useState(false);
  const [error, setError] = useState({
    title: false,
    author: false,
    rating: false
  });

  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const ratingRef = useRef(null);

  const uniqueAuthors = Array.from(new Set(books.map((book) => book.author)));

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };

  const handleChangePageCount = (event) => {
    setPageCount(event.target.value);
  };

  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  };

  const handleChangeAvailability = (event) => {
    setAvailable(event.target.checked);
  };

  const handleAddBook = (event) => {
    event.preventDefault();

    if (!title) {
      alert("Debes ingresar el titulo del libro");
      titleRef.current.focus();
      setError(prevError => ({
        ...prevError,
        title: true
      }))
      return;
    }

    if (!author) {
      alert("Debes ingresar el author del libro");
      authorRef.current.focus();
      setError(prevError => ({
        ...prevError,
        author: true
      }))
      return;
    }

    if (!rating) {
      alert("Debes ingresar el rating del libro");
      ratingRef.current.focus();
      setError(prevError => ({
        ...prevError,
        rating: true
      }))
      return;
    }

    const newBook = {
      title,
      author,
      rating,
      pageCount,
      imageUrl,
      available,
    };

    onBookAdded(newBook);
    setTitle("");
    setAuthor("");
    setRating("");
    setPageCount("");
    setImageUrl("");
    setAvailable(false);
  };

  return (
    <Card className="m-4 w-50" bg="success">
      <Card.Body>
        <Form className="text-white" onSubmit={handleAddBook}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresar título"
                  onChange={handleChangeTitle}
                  value={title}
                  ref={titleRef}
                  className={error.title ? "border border-danger" : ""}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Autor</Form.Label>
                <FormSelect
                  name="author"
                  onChange={handleChangeAuthor}
                  value={author}
                  ref={authorRef}
                  className={error.author ? "border border-danger" : ""}
                >
                  <option>Seleccione un autor</option>
                  {uniqueAuthors.map((author, index) => (
                    <option key={index} value={author}>
                      {author}
                    </option>
                  ))}
                </FormSelect>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Puntuación</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de estrellas"
                  max={5}
                  min={0}
                  onChange={handleChangeRating}
                  value={rating}
                  ref={ratingRef}
                  className={error.rating ? "border border-danger" : ""}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="pageCount">
                <Form.Label>Cantidad de páginas</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingresar cantidad de páginas"
                  min={1}
                  onChange={handleChangePageCount}
                  value={pageCount}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Form.Group className="mb-3" controlId="imageUrl">
              <Form.Label>URL de imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar url de imagen"
                onChange={handleChangeImageUrl}
                value={imageUrl}
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-end">
            <Col
              md={3}
              className="d-flex flex-column justify-content-end align-items-end"
            >
              <Form.Check
                type="switch"
                id="available"
                className="mb-3"
                label="¿Disponible?"
                onChange={handleChangeAvailability}
                checked={available}
              />
              <Button variant="primary" type="submit">
                Agregar lectura
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewBook;
