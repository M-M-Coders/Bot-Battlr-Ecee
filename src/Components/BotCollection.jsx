import React, { useEffect, useState } from 'react';


function BotFetcher({ setBots }) {


  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(res => res.json())
      .then(botsData => setBots(botsData));
  }, [setBots]);

  return null; // Since this component is only for fetching data, it doesn't render anything
}

export default BotFetcher;
