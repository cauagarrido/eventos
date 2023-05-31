import { NavLink, useParams } from "react-router-dom"
import { useContext } from "react"
import { EventContext } from "../../contexts/eventContext";
import { EventContainer, ImageContainer, NavContainer } from "./styles";

export function Event() {
    const { id } = useParams()
    const { events } = useContext(EventContext)

    let event = events.find(item => item.id == id)

    if(!event) {
        return (
            <>
                <NavLink to="/">Voltar para o inicio</NavLink> 
                <h1>Evento não encontrado</h1>
            </>
        )
    }

    return (
        <EventContainer>
            <NavContainer to="/">Voltar para o inicio</NavContainer> {/* TAG A */}
            <h1>{event.name}</h1>
            <h1>{event.date}</h1>
            <ImageContainer 
                size="20rem"
                src={event.img} 
                alt={event.name}
                />
            <ImageContainer 
                size="30rem"
                src={event.img} 
                alt={event.name}
                />
            <ImageContainer 
                /* size="10rem" */
                src={event.img} 
                alt={event.name}
                />
        </EventContainer>
    )
}