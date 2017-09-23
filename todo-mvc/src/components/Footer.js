import React from 'react'
import FilterLink from '../containers/FilterLink'
import PropTypes from 'prop-types'
/*

*/


const Footer = ({length}) => {
  if(length != 0) {
    return (<footer className="footer">
        <span className="todo-count"><strong>0</strong> item left</span>
        <ul className="filters">
            <li>
              <FilterLink filter="SHOW_ALL">All</FilterLink>
            </li>
            <li>
              <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
            </li>
            <li>
              <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
            </li>
        </ul>
    </footer>
    )
  } else {
    return (<span/>)
  }
}


Footer.propTypes = {
  length: PropTypes.number.isRequired,
}

export default Footer