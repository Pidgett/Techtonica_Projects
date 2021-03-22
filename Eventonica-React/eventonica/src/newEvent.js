import React from 'react';
import './index.css';


const NewEvent = () => {
   /* const [name, setName] = useState("");
    const [date, setDate] = useState(Date);
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [summary, setSummary] = useState("");
*/
    return(
        <>
        <div className="createEvent">
        <form>
            <label htmlFor="name">Event Name
                <input type="text"
                placeholder="Type Event Name Here"
                required
                />
            </label>
            <br></br>
            <label htmlFor="date">Date
                <input type="date"
                placeholder="Choose Date"
                required
                />
            </label>
            <br></br>
            <label htmlFor="location">Location
                <input type="text"
                placeholder="Type Event Name Here"
                required
                />
            </label>
            <br></br>
            <label htmlFor="category">Category
                <input type="text"
                placeholder="What kind of event is this?"
                />
            </label>
            <br></br>
            <label htmlFor="summary">
                <textarea className="summary"
                 placeholder="Type your event description here"
                 />
            </label>
            <br></br>
            <label htmlFor="public">Is this event public or private?
            <br></br>
            <input type="radio"
            name="public?"
            value="Public"
            />Public
            </label>
            <label htmlFor="private">
            <input type="radio"
            name="public?"
            value="Private"
            />Private
            </label>
            <br></br>
            <div className="Submit">
            <label htmlFor="Submit">
                <button className="Submit"
                >
                    Submit
                </button>
            </label>
            </div>
        </form>
        </div>
        </>
    )
}



export default NewEvent;