import PropTypes from 'prop-types'
import styles from './CardModal.module.css'
import { useCart } from '../../../../hooks/useCart'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function ModalCard({ drink }) {
    const { removeAllFromCart, removeOneFromCart, addToCart } = useCart()
    return (
        <article  className={styles.card}>
            <img src={drink.strDrinkThumb} alt="" />
            <span>{drink.strDrink}</span>
            <span>{drink.price}</span>
            <div className={styles.counter}>
                <button onClick={() => removeOneFromCart(drink.idDrink)}>-</button>
                <span>{drink.quantity}</span>
                <button onClick={() => addToCart(drink)}>+</button>
            </div>
            <FontAwesomeIcon onClick={() => removeAllFromCart(drink.idDrink)} icon={faTrash} className={styles.iconTrash} />
        </article>
    )
}

ModalCard.propTypes = {
    drink: PropTypes.object.isRequired
}