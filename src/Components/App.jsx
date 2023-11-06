import React from 'react'
import { Bot } from 'lucide-react';
import MyBotArmy from './MyBotArmy.jsx';
import BotList from './SelectedBot.jsx';
import '../Styles/App.css'

function App() {
  return (
    <div>
      <h1 >Bot Battlr <Bot size={40}  /></h1>
      <MyBotArmy />
      
      
    </div>
  )
}

export default App