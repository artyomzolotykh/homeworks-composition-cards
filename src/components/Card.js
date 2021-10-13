import PropTypes from "prop-types";

const Card = props => {
  return (
    <div className="card">

      {props.children}

      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">{props.buttonText}</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

Card.defaultProps = {
  link: "#",
  buttonText: "Go somewhere",
};

export default Card;