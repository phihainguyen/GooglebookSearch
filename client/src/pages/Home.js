//React is imported from react and Component is deconstructed so that we wont have to refer to React.Component everytime below
import React, { Component } from "react";
// jumbotron is imported in taking in the value of the divs
import Jumbotron from "../components/Jumbotron";
//this Card function contains takes in the 3 arguments which will be passed as function components and the Card function takes in the state of icon, title, and children as parameters.
import Card from "../components/Card";
//Form is imported in and the Form function takes in the state of q and of the handler handleInputChange, handleFormSubmit functions as parameters.
import Form from "../components/Form";
//the book function will take in the books info as functional components in as arguments passing it to the templates parameter
import Book from "../components/Book";
//footer is being imported in from the components folder to be reused here
import Footer from "../components/Footer";
//the API crude operation is imported in from the util folder
import API from "../utils/API";
//the specific row and col objects are imported from the Grid folder found inside the component folder
import { Col, Row, Container } from "../components/Grid";
//the specific List object is imported in from the List folder found inside the component folder
import { List } from "../components/List";

//using the ES6 class we have a class called Home here that extends the Component which is a built in react class. Its basically a way to convert this Home "function", into now a class
// convert a function component like Clock to a class in five steps:

// Create an ES6 class, with the same name, that extends React.Component.

// Add a single empty method to it called render().

// Move the body of the function into the render() method.

// Replace props with this.props in the render() body.

// Delete the remaining empty function declaration.
class Home extends Component {
  //this is the current state of the Home page which displays to the UI on load of the page. When there are data that are being changed in the state it will keep track of that and figure what has been changed it will reach out to the real DOM and update it accordingly, but if not it will just be storing it in memory via the virtual DOM, and until the state is set to a new state it will not display the changes to the real DOM. On the page load in this current state we have an empty array of books, and empty string q, and a Message that is dsiplayed saying Search For A Book To Begin.
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  //this handleInputChange is an event handler that takes in the value of the user's input in the search input field. Once it takes in its value it will update the state with the
  handleInputChange = event => {
    // this ES6 method is a shorthand syntax that allows you to assign the property values to a variable via destructuring an object. In this shorthand destructuring object syntax your variable will be the same as its key. In this case the value of the name entered in the input will trigger the event.target which in this case is an onchange event listener which will capture the value and set the State of the virtual DOM to update the real DOM to display what was typed into the input box by the user
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //the getBooks is a function called inside the handleSubmitForm onclick function which calls the API's get route. passing on current state of q which in returns gets a response of the books with that book title which was searched by the user from the google api. The new state will be set with these info displaying to the UI, populating the books array, showing a list of results.

  //it is also called inside the handleBookSave function which

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      //if there is no value for books, then the message on the UI will displaying No new books Found Try a Different Query
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };
  // this is an event listener specifically an onclick listener which will call the getBooks function when the handleFormSubmit fires allowing the user to get data back
  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  //this function will take in the book's id value through its parameter which will find the book with the id that is matching it's exact id triggering the API route for saveBook
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };
  //renders method/function that returns a markup seen below. This markup called JSX which stands for JavaScript XML, essentially is used to describe what the UI will look like.These codes would then be passed through Babel, a modern JavaScript compiler, would then take these JSX syntax and convert it into plain JavaScript code which browsers can then understand
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
          <Col size="md-12">
            {/* //the Card object was imported and used here from the Card folder
            located in the Component folder */}
            <Card title="Book Search" icon="far fa-book">
              {/* //uses the Form object which was imported from the Form folder
              located in the Component folder, which utilizes the onclick,
              onchange eventlistener taking in the value of the input through q */}
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {/* //conditional statement if there are books in the collection then it will display the books else it will display "No New Books Found, Try a Different Query" */}
              {this.state.books.length ? (
                <List>
                  {/* //this will map over the array and display all the books each having the information shown in the keys below appearing on the UI  */}
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      //this button is an onclick listener which is in charge for saving the books by its id when fired
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                //this is the message which displays when no books are found in the saved collection "No New Books Found, Try a Different Query"
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}
// Home page here is exported
export default Home;
