// import React from "react";
// import "./SearchForm.css";
// import { Row, Col, Form, Button } from "react-bootstrap";

// const SearchForm = props => (
//   <Form>
//     <Row>
//       {/* Search Input */}
//       <Col sm={8}>
//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Address or Place</Form.Label>
//           <Form.Control
//             value={props.search}
//             onChange={props.handleInputChange}
//             name="place"
//             type="text"
//             className="form-control"
//             placeholder="Leu Gardens"
//             id="place"
//           />
//         </Form.Group>

//       </Col>
//       <Col sm={4}>

//         <Button
//           className="btn btn-pink"
//           type="submit"
//           onClick={props.handleFormSubmit}
//         >
//           Search
//           </Button>
//       </Col>
//     </Row>
//   </Form>
// );

// export default SearchForm;


import React from "react";
import "./SearchForm.css";
import { Row, Col } from "../Grid";

const SearchForm = props => (

  <form className="search">
    <div className="form-group">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="place"
        type="text"
        className="form-control"
        placeholder="Leu Gardens"
        id="place"
      />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-pink"
      >
        Search
      </button>
    </div>
  </form>

);

export default SearchForm;



