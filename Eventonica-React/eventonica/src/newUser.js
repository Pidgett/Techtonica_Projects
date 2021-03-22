import React, {useState} from 'react';
import './index.css';




const NewUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    
    return (
      <>
        <form>
          <label value="firstName">Name: 
            <input type = "text"
             placeholder="First Name"
              required
               onChange = {(e) => { console.log(firstName); setFirstName(e.target.value)}} 
            />
          </label>
            <span> </span>
          <label value="lastName">
            <input type = "text"
             placeholder="Last Name"
              required
               onChange = {(e) => { console.log(lastName); setLastName(e.target.value)}} 
            />
          </label>
          <br></br>
          <label value="city">City
            <select id = "city"
             onChange = {(e) => { console.log(city); setCity(e.target.value)}}
            >
                <option value= "" >Select City </option>
                <option value="Los Angeles, CA">Los Angeles, CA</option>
                <option value="New York, NY">New York, NY</option>
                <option value="Chicago, IL">Chicago, IL</option>
                <option value="Austin, TX">Austin, TX</option>
                <option value="Houston, TX">Houston, TX</option>
                <option value="Oakland, CA">Oakland, CA</option>
                <option value="San Francisco, CA">San Francisco, CA</option>
                <option value="Vallejo, CA">Vallejo, CA</option>
                <option value="San Jose, CA">San Jose, CA</option>
                <option value="Phoenix, AZ">Phoenix, AZ</option>
                <option value="Philadelphia, PA">Philadelphia, PA</option>
                <option value="Dallas, TX">Dallas, TX</option>
                <option value="Fort Lauterdale, FL">Fort Lauterdale, FL</option>
                <option value="Portland, OR">Portland, OR</option>
                <option value="Seattle, WA">Seattle, WA</option>

            </select>
          </label>
        </form>
        </>
    );
  };

  export default NewUser;

