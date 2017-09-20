import React from 'react'
import PropTypes from 'prop-types'

const hey = (e) => {
  console.log('hey');
}

class Todo extends React.Component {
  render() {
    if(this.props.completed == true){
      return (
      <li className='completed' onClick={this.props.onClick}>
        <div className="view">
          <input className="toggle" id={"checkbox" + this.props.id} type="checkbox" defaultChecked/>
          <label>{this.props.text}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
     )
    } else {
        return (
        <li className='nothing'  onClick={this.props.onClick}>
          <div className="view">
            <input className="toggle" id={"checkbox" + this.props.id} type="checkbox"/>
            <label>{this.props.text}</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" value="Create a TodoMVC template" />
        </li>
       )
    }

  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo