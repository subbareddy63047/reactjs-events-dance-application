// Write your code here
import './index.css'

const EventItem = props => {
  const {each, onClick} = props
  const {registrationStatus, name, location, imageUrl} = each

  const clickedOnEvent = () => {
    onClick(registrationStatus)
  }

  return (
    <li className="each-event-item">
      <button
        type="button"
        onClick={clickedOnEvent}
        className="button-container"
      >
        <img src={imageUrl} alt="event" className="event-image" />
        <p className="each-event-item__heading">{name}</p>
        <p className="each-event-item__location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
