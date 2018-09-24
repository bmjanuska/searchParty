import React from 'react';

const Challenge = () => (
    // Make a list of tasks or places the user neeeds to visit. 
    // These "tasks" are exclusive to the specific challenge they are on. 
    <div>
        <hr></hr>
        {/* // Challenge Name */}
        <h2>Orlando Challenge</h2>
        {/* // Step/ Task # */}
        <h3>Location 1</h3>
        {/* // Clue  */}
        <p>Clue: Come here to learn fullstack MERN</p>
        {/* // Button to check into the spot 
            // if the user is at the location they can check in and get a modal
            // notification that reveals the name of the spot ora huzzah you made it
            // else it says that the user is not at the destination yet!  */}
        <button
            type="submit"
            // onClick={props.handleFormSubmit}
            className="btn btn-success"
        >
            Check In
      </button>
    </div>
);



// Would be nice to have cute photos of Search Wizard with the pop up notifications

export default Challenge; 