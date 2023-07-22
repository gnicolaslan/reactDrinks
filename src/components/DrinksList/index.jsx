import { Row } from "react-bootstrap"
import { useDrinks } from "../../hooks/useDrinks"
import DrinkCard from "../DrinkCard"

export default function DrinksList() {
    const { drinks } = useDrinks()

    if (drinks.lenght === 0) {
        return (
            <Row className="p-5 m-5">
                <h1 className="text-center">No hay resultados</h1>
            </Row>
        )
    }

    return (
        <Row className="mt-5">
            {
                drinks.map((drink) => (
                    <DrinkCard key={drinks.idDrink} drink={drink} />
                ))
            }
        </Row>
    )
}