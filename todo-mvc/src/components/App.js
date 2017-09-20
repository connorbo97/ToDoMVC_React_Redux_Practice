import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const hey = (e) => {
}


const App = () => (
  <div>
    <section className="todoapp">
    <Header />
    	<section className="main">
        	<input id="toggle-all" className="toggle-all" type="checkbox" />
   			<label htmlFor="toggle-all">Mark all as complete</label>

   				<VisibleTodoList/>
   		</section>
   </section>
    <Footer />
  </div>
)

/*
<ul className="todo-list">
	   			<li className="completed">
	   				<div className="view">
	             		<input className="toggle" type="checkbox" onClick={hey}/>
	             		<label>Taste JavaScript</label>
	             		<button className="destroy"></button>
	            	</div>
	            	<input className="edit" value="Create a TodoMVC template" />
	          	</li>

          		<li>
            		<div className="view">
              			<input className="toggle" type="checkbox"/>
              			<label>Buy a unicorn</label>
              			<button className="destroy"></button>
            		</div>
            		<input className="edit" value="Rule the web"/>
          		</li>
   			</ul>

*/

export default App