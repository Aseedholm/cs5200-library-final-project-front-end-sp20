import React from "react";

export default class BookDetails extends React.Component {

    componentDidMount() {
        const bookId = this.props.match.params.bookId;
            fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
            .then(response => response.json())
            .then(book => this.setState({
                                            book: book.volumeInfo,
                                            image: book.volumeInfo.imageLinks
                                        }))
            fetch(`http://localhost:8080/api/hard-copy-books/${bookId}`)
                .then(response => response.json())
                .then(result => this.setState({
                    hardCoverBook: result
                                              }))
            fetch(`http://localhost:8080/api/audio-books/${bookId}`)
                .then(response => response.json())
                .then(result => this.setState({
                                                  audioBooks: result
                                              }))
    }

    state = {
        book: {},
        image: {},
        hardCoverBook: [],
        audioBooks: []
    }
    render() {
        return(
            <div>
                {this.state.book.title &&
                    <h1>{this.state.book.title}</h1>
                }

                {this.state.book.subtitle &&
                    <h2>{this.state.book.subtitle}</h2>
                }

                {this.state.image &&
                    <img src={this.state.image.smallThumbnail}/>
                }

                {this.state.book.authors &&
                    <h1>Author: {this.state.book.authors}</h1>
                }
                {this.state.book.publisher &&
                    <h1>Publisher: {this.state.book.publisher}</h1>
                }
                {this.state.book.pageCount &&
                    <h1>Page Count: {this.state.book.pageCount}</h1>
                }
                {this.state.hardCoverBook &&
                 <h1>Number of Hard Cover copies available: {this.state.hardCoverBook.length}</h1>
                }
                {this.state.audioBooks &&
                 <h1>Number of Audiobook copies: {this.state.audioBooks.length}</h1>
                }
            </div>
        )
    }
}
