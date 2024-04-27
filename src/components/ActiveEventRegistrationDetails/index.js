// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {activeEvent, eventOptions} = props

  const renderInitialView = () => (
    <p className="initial-para">
      Click on an event, to view its <br /> registration details
    </p>
  )

  const renderRegisterView = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-register-img"
      />
      <p className="yet-register-para">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="yet-register-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="yet-register-img"
      />
      <h1 className="yet-register-para registered-para">
        You have already registered for <br />
        the event
      </h1>
    </div>
  )

  const renderRegistrationClosedView = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-register-img"
      />
      <h1 className="yet-register-para">Registrations Are Closed Now!</h1>
      <p className="yet-register-para">Stay tuned. We will reopen</p>
    </div>
  )

  switch (activeEvent) {
    case eventOptions.initialView:
      return renderInitialView()

    case eventOptions.YET_TO_REGISTER:
      return renderRegisterView()

    case eventOptions.REGISTERED:
      return renderRegisteredView()

    case eventOptions.REGISTRATIONS_CLOSED:
      return renderRegistrationClosedView()

    default:
      return null
  }
}
export default ActiveEventRegistrationDetails
