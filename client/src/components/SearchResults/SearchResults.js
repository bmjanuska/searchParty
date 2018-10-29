// import React from "react";
// import "./SearchResults.css";
// import { Row, Col, Form, Button } from "react-bootstrap";


// const SearchResults = props => (
//   <div>
//     <Form>

//       <Row>
//         <Col sm={12}>
//           <Form.Group controlId="exampleForm.ControlInput1">
//             <h5 className="card-title">Address: </h5>
//             <p className="card-text">{props.formatted_address}</p>
//             <p className="card-text">
//               <span className="latlng">Lat: </span> {props.lat}
//               <span className="latlng"> | </span>
//               <span className="latlng">Lng: </span> {props.lng}
//             </p>
//             <Form.Label>Add a Clue</Form.Label>
//             <Form.Control type="Clue" placeholder="50-acre botanical oasis in the Big O" />
//           </Form.Group>
//         </Col>
//       </Row>

//       <Row>
//         <Col sm={12}>
//           <Form.Group controlId="exampleForm.ControlSelect1">
//             <Form.Label>Add location to Challenge: </Form.Label>
//             <Form.Control as="select">
//               {/* Make these options challenges from the Database */}
//               <option>1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//             </Form.Control>
//           </Form.Group>
//         </Col>
//       </Row>

//       <Row>
//         <Col >
//           <Button href="#" className="btn btn-purple text-right">Add to Challenge</Button>
//         </Col>
//       </Row>
//     </Form>
//   </div>
// );

// export default SearchResults;

import React from "react";
import "./SearchResults.css";
import { Row, Col } from "../Grid";

const SearchResults = props => (

  <div>
    <span className="search-results card">
      <div className="card-body">
        <Row>
          <Col size="12">
            {/* address  */}
            <h5 className="card-title">Address: </h5>
            <p className="card-text">{props.formatted_address}</p>
            {/* latlng  */}
            <p className="card-text">
              <span className="latlng">Lat: </span> {props.lat}
              <span className="latlng"> | </span>
              <span className="latlng">Lng: </span> {props.lng}
            </p>
            {/* clue */}
            <label htmlFor="clue">Clue</label>
            <input
              // Send this to database as a Clue
              name="clue"
              type="text"
              className="form-control"
              placeholder="Add Clue a Here"
              id="clue"
            />
            <br></br>
            {/* challenge */}
            <label htmlFor="challenge">Challenge</label>
            <input
              // Send this to database as a Clue
              name="challenge"
              type="text"
              className="form-control"
              placeholder="Add to this challenge"
              id="challenge"
            />


            <br></br>
            <button href="#" className="btn btn-purple text-right">Add to Challenge</button>

          </Col>

        </Row>
      </div>
    </span>
  </div>
);

export default SearchResults;

