import { useState, useEffect, createContext } from "react"
import PropTypes from 'prop-types'
import { filterDrinksService, getRecipeService } from '../services/drink.service'

const DrinksContext = createContext()

const DrinksProvider = ({ children }) => {
    const [drinks, setDrinks] = useState([])
    const [modal, setModal] = useState(false)
    const [drinkId, setDrinksId] = useState(null)
    const [recipe, setRecipe] = useState({})
    const [loading, setLoading] = useState(false)

    function handleModalClick() {
        setModal(!modal)
    }

    function handleDrinkIdClick(id) {
        setDrinksId(id)
    }

    async function getRecipe() {
        if (!drinkId) return

        try {
            setLoading(true)
            const recipeData = await getRecipeService(drinkId)
            setRecipe(recipeData)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    async function getDrink(data) {
        try {
            setLoading(true)
            const drinksData = await filterDrinksService(data.name, data.category)
            const drinksWithPrice = drinksData.map((drink) => {
                return {
                    ...drink,
                    price: Math.floor(Math.random() * 101)
                }
            })


            setDrinks(drinksWithPrice)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getRecipe();
    }, [drinkId]);

    const contextValues = {
        drinks,
        modal,
        recipe,
        loading,
        handleModalClick,
        handleDrinkIdClick,
        getDrink
    }

    return (
        <DrinksContext.Provider value={contextValues}>
            {children}
        </DrinksContext.Provider>
    )

}

DrinksProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { DrinksContext, DrinksProvider }