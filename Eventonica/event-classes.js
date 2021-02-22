class Eventonica {
    addEvent(eventType, name, id) {
      
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
  
    deleteEvent(name, id) {
        while(d < Event.all.length){
            if(id === Event.all[d].id && name === Event.all[d].name){

            }
        }
      // Deletes Event
    }
  
    findEventsByDate() {
      // Return items in Event.all with a specified date
    }
  
    findEventsbyCategory() {
      // Return items in Event.all with a specified category
    }
  
    addUser() {
      // Adds a new User
    }
  
    updateUser() {
      // Update existing User
    }
  
    deleteUser() {
      // Deletes User
    }
  }
  
  class Event {
    static all = [];
    static _nextId = 100;
  
    constructor() {
      this.id = Event._nextId++;
      // decide what properties are required
      Event.all.push(this); // keep track of all created instances
    }
  
    static findByDate() {
      return [];
    }
  
    static findByCategory() {
      return [];
    }
  }
  
  class User {
    static all = [];
    static _nextId = 200;
  
    constructor() {
      this.id = User._nextId++;
      // decide what properties are required on an instance
      User.all.push(this); // keep track of all created instances
    }
  }