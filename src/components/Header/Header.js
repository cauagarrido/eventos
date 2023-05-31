import "./Header.css"
import eventIcon from "../../assets/evento.png"

export function Header() {
    return (
        <header>
            <div>
                <h1>Sympla</h1>
                <img src={eventIcon} alt="" />
            </div>

            <div>
                <a href="#">Acesse sua conta</a>
                <a href="#">Eventos</a>
                <a href="#">Crie seu evento</a>
            </div>
        </header>
    )
}