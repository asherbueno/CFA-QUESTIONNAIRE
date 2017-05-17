import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
    return <p>{props.current_step}/{props.question_length}</p>

}

ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired,
  question_length: PropTypes.number.isRequired
}
export default ProgressBar;
