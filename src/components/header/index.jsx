import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./header.module.css"
import { faCartShopping, faRightToBracket, faRightFromBracket, faHouse } from "@fortawesome/free-solid-svg-icons"
import useModal from "../../hooks/useModal"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from 'react-router-dom'


export default function Header() {
    const navigate = useNavigate()
    const { toogleModal } = useModal()
    const { currentUser, logout } = useAuth()
    return (
        <header className={`py-5 ${styles.header}`}>
            <div>
                <h1>Buscador de Bebidas</h1>

                {
                    !currentUser ? (
                        <>
                            <FontAwesomeIcon icon={faHouse} onClick={() => navigate('/')} /><small style={{ padding: '0 10px' }}>HOME</small>
                            <FontAwesomeIcon icon={faRightToBracket} onClick={() => navigate('/login')} /><small style={{ padding: '0 10px' }}>LOGIN</small>
                            <FontAwesomeIcon icon={faCartShopping} onClick={toogleModal} /><small style={{ padding: '0 10px' }}>CART</small>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faHouse} onClick={() => navigate('/')} /><small style={{ padding: '0 10px' }}>HOME</small>
                            <FontAwesomeIcon icon={faRightFromBracket} onClick={() => logout()} /><small style={{ padding: '0 10px' }}>LOGOUT</small>
                            <FontAwesomeIcon icon={faCartShopping} onClick={toogleModal} /><small style={{ padding: '0 10px' }}>CART</small>
                            <h4 style={{ padding: '15px 10px 0px' }}>Bienvenido {currentUser.name}</h4>
                        </>
                    )
                }
            </div>
        </header>
    );
}