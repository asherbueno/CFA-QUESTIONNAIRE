import React from 'react';
import PropTypes from 'prop-types';

const Questions = (props) => {

  return <h4>{props.current_question}</h4>

}

Questions.proptypes = {
  current_question: PropTypes.string
};

export default Questions;
