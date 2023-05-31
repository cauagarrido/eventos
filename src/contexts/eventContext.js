import { createContext, useEffect, useState } from "react";

export const EventContext = createContext({})

let eventos = [
    { 
      id: 1,
      name: "XV Caminhada pelo inicio da trilha de 5 horas",
      img: "https://etecsantosdumont.com.br/wp-content/uploads/2020/11/eventos2.jpg",
      date: "SEX, 12/05/2023 às 04:21"
    },
    {
      id: 2,
      name: "Qualquer coisa",
      img: "https://atualeventos.com/wp-content/uploads/2020/09/atual-eventos-banner.jpg",
      date: "QUA, 17/05/2023, às 13:57"
    },
    {
      id: 3,
      name: "Cochilada nacional a favor do feriado todas as sextas",
      img: "https://atualeventos.com/wp-content/uploads/2020/09/atual-eventos-banner.jpg",
      date: "SEX, 19/05/2023, às 12:34"
    },
  ]
  

export function EventContextProvider(props) {
    const [events, setEvents] = useState(() => {
        let state = JSON.parse(localStorage.getItem("events"))
  
        if(state) {
          return state
        }
  
        return eventos
      })
  
      function addNewEvent(novoEvento) {
        setEvents([...events, novoEvento])
      }
      
      function deleteEvent(id) {
        let eventosAtualizados = events 
        eventosAtualizados = eventosAtualizados.filter(evento => evento.id !== id)
        
        setEvents(eventosAtualizados)
      }
      
      useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events))
      }, [events])
  

    return (
        <EventContext.Provider value={{
            events,
            addNewEvent,
            deleteEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}