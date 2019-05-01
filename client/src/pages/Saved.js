//React is imported from react and Component is deconstructed so that we wont have to refer to React.Component everytime below
import React, { Component } from "react";
//Jumbotron is imported from the Jumbotron folder located inside the component folder
import Jumbotron from "../components/Jumbotron";
// the Card component is imported form the Card folder from the components folder, which will allow us to reuse the card component layout
import Card from "../components/Card";
//Book is imported from the Book folder located in the components folder which allows us to reuse the Book component template for searching for a book
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
  //a reference to the component state at the time the change is being applied. It should not be directly mutated. Instead, changes should be represented by building a new object based on the input from state and props, the current state will display the books that were saved displaying to the UI the books that'll be in the books array
  state = {
    books: []
  };
  //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here to show the saved books in the collection
  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      //  //a request used to update the component. Changes to the component state and tells React that this component and its children need to be re-rendered with the updated state meaning updating the state with the Books that were saved. This is the primary method you use to update the UI in response to event handlers and server responses.
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  //this an event handler which listens for an onclick to delete a book by searching for its id
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      //the Container function is imported and used here which will take in the value of the children  as well as the className of the child's div if one exists//
      <Container>
        {/* //row is imported and used which also takes the value of the children as
        well as the nameClass of the div children if it exists// */}
        <Row>
          {/* Col is  imported and used which takes in the value of the size of the col, which determines the number of row via the use of Grid and it also takes in the value of the childs div*/}
          <Col size="md-12">
            {/* //Jumbotron is imported in and reused here the jumbotron function takes in the value of what will be in the child's div */}
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">
                Search for and Save Books of Interest.
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
