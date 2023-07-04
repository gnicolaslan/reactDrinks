import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={`py-5 ${styles.header}`}>
            <h1>Buscador de Bebidas</h1>
        </header>
    )
}