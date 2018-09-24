import React from 'react';

const Challenge = () => (
    <div>
        <h2>Task</h2>
        <p>Clue: Lorem Ipsum. Blah blah blah</p>

        <button
            type="submit"
            // onClick={props.handleFormSubmit}
            className="btn btn-success"
        >
            Check In
      </button>
    </div>
);

// Make a list of tasks or places the user neeeds to visit. 
// These "tasks" are exclusive to the specific challenge they are on. 

//The challenge shows the following 

// Step/ Task #
// Clue 
// Button to check into the spot 
// if the user is at the location they can check in and get a modal
// notification that reveals the name of the spot ora huzzah you made it
// else it says that the user is not at the destination yet! 

// Would be nice to have cute photos of Search Wizard with the pop up notifications
// 

export default Challenge; 