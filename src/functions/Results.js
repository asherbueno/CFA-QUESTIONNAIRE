import React from 'react';
import PropTypes from 'prop-types';

const Results = (props) => {
  return(
    <div>
      <h3>{props.end_message}</h3>
      <p> Results </p>
      <p> Your score was  {props.score} </p>
      <button onClick={props.retryButton}>Retry</button>
    </div>
   )
}
Results.propTypes = {
  end_message: PropTypes.string,
  score: PropTypes.number,
  restart: PropTypes.func.isRequired
};

Results.defaultProps = {
  end_message: 'Congratulations!',
  score: 0

};

export default Results;
