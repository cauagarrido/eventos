import { useNavigate } from "react-router-dom"
import "./Card.css"
//import IMG  from "../../assets/events.jpg"

export function Card({id, name, date, onDeleteEvent, img}) {
  const navigate = useNavigate()
    
  function navigateToEvent() {
      navigate("/events/" + id, {
        state: {img, name, date, id}
      })
    }
 

  return (
    <div className="card">
        <img src={img /* ? img : IMG */} alt={name} />
        
        <div className="infos-container">
          <div>
            <h4>{name}</h4>
            <span>{date}</span>
          </div>
          
          <button onClick={() => onDeleteEvent(id)}>
            x
          </button>
          <button onClick={navigateToEvent}>
            &gt;
          </button>
        </div>
      </div>
    )
}

/* props = {
  img, name, date
} 

props.name
props.img*/