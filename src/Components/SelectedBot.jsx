import React from 'react';
import { HeartPulse, Zap, ShieldHalf } from 'lucide-react';

function SelectedBot({ bot, handleReleaseFromArmy }) {
 return (
    <div className="additional-info">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <h6>{bot.catchphrase}</h6>
      <p><HeartPulse size={15}/>{ bot.health}</p>
      <p><Zap size={15}/>{bot.damage}</p>
      <p><ShieldHalf size={15}/>{bot.armor}</p>
      <h5>created at: {bot.created_at}</h5>
      <h5>updated at: {bot.updated_at}</h5>
      <h3>{bot.bot_class}</h3>
      <button className='btn1' onClick={() => handleReleaseFromArmy(bot)}>x</button>
    </div>
 );
}

export default SelectedBot;