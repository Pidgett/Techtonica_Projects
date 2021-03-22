
import React from 'react';

import './index.css';
import NewUser from './newUser.js';
import './calendar.png';
import NewEvent from './newEvent.js';






 function Eventonica() {
  return (
  
<>
    <img src='calendar.png' alt="A calendar icon from flaticon.com with a gold star in the center."/>
      <h1>
        Eventonica</h1>
        
      <div id="Users">
      <br></br>
        <h3>Users</h3>
          <NewUser />
          </div>
         
      <div id="Events">
      <br></br>
          <h3>Events</h3>
          <NewEvent />
      </div>
    </>
  );
}


export default Eventonica;

