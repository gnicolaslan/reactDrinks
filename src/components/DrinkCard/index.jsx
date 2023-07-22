import { Col, Card, Button } from "react-bootstrap"
import { useDrinks } from "../../hooks/useDrinks"
import PropTypes from "prop-types"
import { useCart } from "../../hooks/useCart";

export default function DrinkCard({ drink }) {

    const { handleModalClick, handleDrinkIdClick, } = useDrinks();
    const { addToCart } = useCart()

    function handleAddToCart(drink) {
        addToCart(drink)
    }

    return (
        <Col md={6} lg={3}>
            <Card className="mb-4">
                <Card.Img
                    variant="top"
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrinkThumb}`}
                />

                <Card.Body>
                    <Card.Title>
                        {drink.strDrink}
                    </Card.Title>
                    <div className="d-flex">
                        <div className="w-40 p-2 mt-2">
                            <Button
                                variant="warning"
                                className="text-uppercase"
                                onClick={
                                    () => {
                                        handleModalClick()
                                        handleDrinkIdClick(drink.idDrink)
                                    }
                                }
                            >Ver Receta
                            </Button>
                        </div>
                        <div className="w-40 p-2 mt-2">
                            <Button
                                variant="primary"
                                className="text-uppercase"
                                onClick={() => handleAddToCart(drink)}
                            >Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        idDrink: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};