import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Main from './Main'
import PropTypes from 'prop-types'
import BottomText from './BottomText'

const App = ({todos}) => {

	return ( 
	  <div>
	    <section className="todoapp">
	   		<Header />
	   		<Main length={todos.length}/>
	  		<Footer length={todos.length}/>
	   	</section>
	   	<BottomText />
	  </div>
	)
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default connect(
	({todos}) => ({todos})
)(App)