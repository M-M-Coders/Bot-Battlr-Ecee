import React, { useState } from 'react';
import BotCollection from './BotCollection.jsx';
import SelectedBot from './SelectedBot.jsx';
import '../Styles/BotArmy.css';

function BotArmy() {
 const [bots, setBots] = useState([]);
 const [selectedBots, setSelectedBots] = useState([]);

 const handleAddToArmy = (bot) => {
    const selectedBotCopy = { ...bot };
    setSelectedBots([...selectedBots, selectedBotCopy]);
 };

 const handleReleaseFromArmy = (bot) => {
    setSelectedBots(selectedBots.filter(selectedBot => selectedBot.id !== bot.id));
 };

 return (
    <div className="bot-collection">
      <BotCollection setBots={setBots} />

      {bots.map(bot => (
        <div className="card" key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>{bot.name}</h2>
          <p>{bot.catchphrase}</p>

          <button className='btn2' onClick={() => handleAddToArmy(bot)}>Add Army</button>

          {selectedBots.some(selectedBot => selectedBot.id === bot.id) && (
            <SelectedBot bot={bot} handleReleaseFromArmy={handleReleaseFromArmy} />
          )}
        </div>
      ))}
    </div>
 );
}

export default BotArmy;