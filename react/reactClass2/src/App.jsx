import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import './App.css'
import Lottery from './Lottery'
import { sum } from './helper'



function App() {
  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  }

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
     
      
      {/* <Lottery /> */}
      
      {/* <TodoList />
      <LudoBoard /> */}
    </>
  )
}

export default App
