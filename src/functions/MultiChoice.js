import React from 'react';
import PropTypes from 'prop-types';

const MultiChoice = (props) => {
    return (
      <div>
        {props.answers.map((answer, i) => <button key={i} onClick={() => props.updateSelected(answer)}>{answer}</button>)}
        <p> you have selected {props.selectedAnswer} </p>
        <br />
        <button onClick={props.handleSubmit}>Submit</button>
      </div>
    )
}

MultiChoice.propTypes = {
  selectedAnswer: PropTypes.string,
  updateSelected: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired
}
export default MultiChoice;
