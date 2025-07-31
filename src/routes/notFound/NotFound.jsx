import { Button } from "react-bootstrap";
import { useNavigate } from "react-router"

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/")
    }

    return(
        <div className="text-center mt-3">
            <h2>¡Ups! La pagina no fue encontrada</h2>
            <Button className="text-center" onClick={handleGoBack}>    
                Volver al inicio de sesión.
            </Button>
        </div>
    )
}

export default NotFound;