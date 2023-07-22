import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./CartModal.module.css"
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons"
import useModal from "../../hooks/useModal"
import { useCart } from "../../hooks/useCart"
import { ModalCard } from "./components/Card"

export default function CartModal() {
    const { isOpen, toogleModal } = useModal()
    const {
        cart,
        clearCart,
        sendOrder,
        orderTotal } = useCart()

    if (isOpen) return (
        <div className={styles.modalBg}>
            <div className={styles.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={styles.icons} onClick={toogleModal} />
                <h2>Mi Carrito</h2>
                <section className={styles.modalBody}>
                    <div className={styles.modalDrinksListContainer}>
                        {cart.cartItems.length === 0 && (
                            <h3>No hay Productos en el Carrito</h3>
                        )}
                        {
                            cart.cartItems.map((drink) => (
                                <ModalCard key={drink.idDrink} drink={drink} />
                            ))
                        }

                    </div>
                    <aside>
                        <p>Total: {orderTotal}</p>
                        <div className={styles.btnContainer}>
                            <button className={styles.clear} onClick={clearCart}>Vaciar Carrito</button>
                            <button className={styles.confirmOrder} onClick={sendOrder}>Confirmar Compra</button>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    )
}