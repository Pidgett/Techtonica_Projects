let _nextId = 100;
function generateId() {
  return _nextId++;
}

/**
 * Paste your code from Part 1 into this file but keep the module check at the very end.
 * (The following is a just a small subset for the Add Event form on the example page to work)
 */
class Event {
  static all = [];
  static _nextId = 100;

  constructor(name, category, date) {
    this.name = name;
    this.id = generateId();
    this.category = category;
    this.date = date;
    this.users = [];
    // attributes you choose will go here
  }
}

class User {
    static all = [];
    static _nextId = 200;
  
    constructor(name) {
      this.id = User._nextId++;
      this.name = name;
      this.socialitePoints =0;
      
      // decide what properties are required on an instance
      User.all.push(this); // keep track of all created instances
    }
}

class Eventonica {
  constructor() {
    this.allUsers = [];
    this.allEvents = [];
  }

  addEvent(name) {
    const event = new Event(name);
    this.allEvents.push(event);
    return event;
  }

  getAllEvents() {
    return this.allEvents;
  }

  updateEvent(id, property, value) {
    for(let u = 0; u < Event.all.length; u++){
        if(id === Event.all[u].id && Event.all[u].hasOwnProperty(property)){
            Event.all[u].property = value;
            
        } else if(id === Event.all[u].id && Event.all[u].hasOwnProperty(property) === false){
            console.log("Invalid event property name.");
            return "Invalid event property name.";
        } else{
            console.log("Event not found.");
            return "Event not found.";
        }
    }
}

deleteEvent(eventName, eventId) {
  let tempArr = [];
    for(let d = 0; d < all.length; d++){
        if(eventId === Event.all[d].id && eventName === Event.all[d].name){
            tempArr.push(Event.all.slice(d-1), Event.all.slice(1, Event.all.length));
            Event.all = tempArr;
            console.log(all);
            return Event.all;
        } else{
          console.log("Event not found.");
          return "Event not found.";
        }
    }
    return Event.all;
  /* Deletes Event ;slices event from existing event array "all",
   pushes remaining events to new temp array, and assigns value
   for tempArr to all*/
}

findEventsByDate(date) {
  let qDResults = [];
  for(let qD = 0; qD < Event.all.length; qD++){
    if(Event.all[qD].date === date){
      qDResults.push(Event.all[qD]);
      
    };
    //console.log(qDResults);
  }
  console.log(qDResults.length, "results from search.");
  return qDResults;
  // Return items in Event.all with a specified date
}

findEventsbyCategory(category) {
  let qC = [];
  for(let c = 0; c < Event.all.length; c++){
    if(Event.all[c].category === category){
      qC.push(Event.all[c]);

    }
    console.log("Your search returned these results:", qC);
    return qC;
  }
  // Return items in Event.all with a specified category
}

addUser(eventId, userId) {
  for(let i = 0; i < Event.all.length; i++){
    if(Event.all[i].id === Event.id){
      let participant={

      };

      for(let u = 0; u < User.all.length; u++){
        if(User.all[u].id === User.id){
          participant = User.all[u];
        } else{
          return "User not found."
        }
      }
      Event.all[i].users.push(participant);
    } else{
      return "Event not found";
    }
  }
  // Adds a new User
}

updateUser(userId, property, value) {
  for(let u = 0; u < User.all.length; u++){
    if(userId === User.all[u].id && User.all[u].hasOwnProperty(property)){
        User.all[u].property = value;
        
    } else if(User.Id === User.all[u].id && User.all[u].hasOwnProperty(property) === false){
        console.log("Invalid user property name.");
        return "Invalid user property name.";
    } else{
        console.log("User not found.");
        return "User not found.";
    }
}
  // Update existing User
}

deleteUser(userName, userId) {
  let tempUsers = [];
    for(let d = 0; d < User.all.length; d++){
        if(userId === User.all[d].id && userName === User.all[d].name){
            tempUsers.push(User.all.slice(d-1), User.all.slice(1, all.length));
            User.all = tempArr;
            console.log(User.all);
            return User.all;
        } else{
          console.log("Event not found.");
          return "Event not found.";
        }
    }
    return User.all;
  // Deletes User
}
}

if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event };
}
