import React from 'react'
import PropTypes from 'prop-types'

/*

      <li className="editing">
          <input className="edit" autoFocus defaultValue={text}   />
      </li>

*/

const Todo = ({onClick, onChange, onDelete, completed, text, id}) => {
  if(completed === true){
    return (
    <li className='completed' >
      <div className="view">
        <input className="toggle" id={"checkbox" + id} type="checkbox" defaultChecked onChange={onChange}/>
        <label  onClick={onClick}>{text}</label>
        <button className="destroy" onClick={onDelete}></button>
      </div>
    </li>
   )
  } else {
      return (
      <li>
        <div className="view">
          <input className="toggle" id={"checkbox" + id} type="checkbox" onChange={onChange}/>
          <label  onClick={onClick}>{text}</label>
          <button className="destroy" onClick={onDelete}></button>
        </div>
      </li>
     )
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