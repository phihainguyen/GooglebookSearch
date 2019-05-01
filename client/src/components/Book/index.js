//the React object is imported from react module, this built in module and object is imported but even tho we are not using this object directly when we compile our code it allows us to reference to the React we will need it to be imported
import React from "react";
//the specific ListItem object is imported in from the List folder found inside the component folder
import { ListItem } from "../List";
//the specific row and col objects are imported from the Grid folder found inside the component folder
import { Row, Col } from "../Grid";
import "./style.css";

//the book function will take in these functional components in as parameters which returns the JSX for the form with the appropriate bindings to the parameters that were passed in. The forms become functional components and arent needed to be written out into its separate functions
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    //listItem is imported from the List folder located inside the components folder which returns the value of the title subtitle, author, description, image, button and link to the function
    <ListItem>
      //uses the specific Row function that was imported in from the Grid folder
      <Row className="flex-wrap-reverse">
        //uses the specific Col function imported from the Grid folder
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img
            className="img-thumbnail img-fluid w-100"
            src={image}
            alt={title}
          />
        </Col>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
