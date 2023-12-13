import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { hny } from '../App'

const Navigation = () => {
  const { pathname } = useLocation();

  const sendSearchEvent = (duration) => {
    let ev = hny.newEvent();
    ev.addField("event_type", "search");
    ev.addField("search_term", pathname.replace("/", ""));
    ev.addField("duration_ms", duration);
    ev.send();
  };

  const handleButtonClick = () => {
    const startTime = performance.now()
    // find location where results are return; endTime - startTime = duration
    sendSearchEvent(startTime)
  };
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain" onClick={handleButtonClick}>Mountain</NavLink></li>
        <li><NavLink to="/beach" onClick={handleButtonClick}>Beaches</NavLink></li>
        <li><NavLink to="/bird" onClick={handleButtonClick}>Birds</NavLink></li>
        <li><NavLink to="/food" onClick={handleButtonClick}>Food</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;