import React from 'react';
import {Link} from "react-router-dom";

export default class BookSearch extends React.Component {

    state = {
        books: [],
        bookNameSearch: ''
    }

    componentDidMount() {
        let searchTitle = this.props.match.params.bookSearchedFor
        console.log("ORIGINAL TITLE", searchTitle)
        console.log(this.props.match.params)
        if(searchTitle === undefined) {
            searchTitle = ' '
        }
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTitle}&maxResults=40&orderBy=relevance`)
            .then(response => response.json())
            .then(results => this.setState({
                                               books: results.items,
                                               bookNameSearch: searchTitle
                                           }))

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.bookSearchedFor !== this.props.match.params.bookSearchedFor) {
            this.findBookByName(this.props.match.params.bookSearchedFor)
            {console.log(this.state.books)}
        }
    }

    findBookByName = (title) =>
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=40&orderBy=relevance`)
            .then(response => response.json())
            .then(results => this.setState({
                                               books: results.items
                                           }));

    render() {
        return(
            <div>
                <h1>
                    Book Name: ({this.props.match.params.bookSearchedFor})
                </h1>
                <ul className="list-group">
                    <span className="list-group-item">
                        <input
                            value={this.state.bookNameSearch || ''}
                            onChange={(e) => this.setState({
                                                               bookNameSearch: e.target.value
                                                           })}
                            className={`form-control`}/>

                        <button
                            onClick={() => this.props.history.push(`/book-search/${this.state.bookNameSearch}`)}
                            className={`btn btn-primary btn-block`}>
                            Search Book
                        </button>

                    </span>


                    {this.state.books && this.state.books.length > 0 && this.state.bookNameSearch !== 'undefined' && this.state.bookNameSearch !== 'Undefined' && this.state.bookNameSearch !== null
                        && this.state.books.map((book, index) =>
                            <li key={index} className="list-group-item">
                                <Link to={`/book-search/book/${book.id}`}>
                                    {book.volumeInfo.title}
                                    <br/>
                                    By: {book.volumeInfo.authors}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
