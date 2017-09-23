import React from 'react'
import PropTypes from 'prop-types'

const hey = (e) => {
  console.log('hey');
}

class Todo extends React.Component {
  render() {
    if(this.props.completed == true){
      return (
      <li className='completed'>
        <div className="view">
          <input className="toggle" id={"checkbox" + this.props.id} type="checkbox" defaultChecked onChange={this.props.onChange}/>
          <label onClick={this.props.onClick}>{this.props.text}</label>
          <button className="destroy" onClick={this.props.onDelete}></button>
        </div>
      </li>
     )
    } else {
        return (
        <li className='nothing' >
          <div className="view">
            <input className="toggle" id={"checkbox" + this.props.id} type="checkbox" onChange={this.props.onChange}/>
            <label onClick={this.props.onClick}>{this.props.text}</label>
            <button className="destroy" onClick={this.props.onDelete}></button>
          </div>
        </li>
       )
    }

  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo