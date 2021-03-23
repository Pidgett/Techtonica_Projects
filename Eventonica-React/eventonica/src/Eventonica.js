
import React from 'react';

import './index.css';
import NewUser from './newUser.js';
import icon from './calendar.png';
import NewEvent from './newEvent.js';






 function Eventonica() {
  return (
  
<>
    <img src={icon} alt="A calendar icon from flaticon.com with a gold star in the center." style={ {width: "7%", height: "7%"}}/>
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

      <h6>Unica One Font designed by Eduardo Tunni</h6>
    </>
  );
}


export default Eventonica;

