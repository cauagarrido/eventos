import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Card } from "../../components/Card/Card";
import { EventContext } from "../../contexts/eventContext";
import "./Home.css"

export function Home() {
    const { events, addNewEvent, deleteEvent } = useContext(EventContext)

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [img, setImg] = useState()

    function handleUploadIMG(e) {
      const reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => setImg(reader.result)
    }

    function handleSubmit(e) {
      e.preventDefault()
      let ultimoId = events.length > 0 ? events[events.length - 1].id : 0

      const novoEvento = {
        id: ultimoId + 1,
        name,
        date,
        img
      }

      addNewEvent(novoEvento)
    }
    
    useEffect(() => {
      localStorage.setItem("events", JSON.stringify(events))
    }, [events])

  return (
    <>
      <Header />
      <h1>Bem vindo ao site de eventos</h1>

      <section className="App-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome do evento</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label>Data do evento</label>
            <input type="text" id="date" onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label className="input-img" htmlFor="img">Selecionar Imagem do evento</label>
            <input type="file" id="img" onChange={handleUploadIMG} />
          </div>
          <div className="div-img">
            <img src={img} alt="" />
          </div>
          <button>Cadastrar evento</button>
        </form>

        <div className="events-container">
          {events.map(evento => {
            return (
              <Card 
                key={evento.id} 
                id={evento.id} 
                img={evento.img} 
                name={evento.name} 
                date={evento.date} 
                onDeleteEvent={deleteEvent} />
            )
          })}
        </div>
      </section>
    </>
  );
}