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
        audioBooks: [],
        renterId: ''
    }

    rentHardCopy = (memberId) => {
        fetch(`http://localhost:8080/api/members/${memberId}/check-out/${this.props.match.params.bookId}/hard-copy`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        }).then(response => response.json())
    }
    rentAudiobook = (memberId) => {
        fetch(`http://localhost:8080/api/members/${memberId}/check-out/${this.props.match.params.bookId}/audiobook-copy`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        }).then(response => response.json())
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
                {this.state.hardCoverBook && this.state.hardCoverBook.length > 0 &&
                 <div>
                        <h3>Number of Hard Cover copies available: {this.state.hardCoverBook.length}</h3>
                         <h4 >
                             Renter (Member) Id:
                         </h4>
                         <input placeholder="Member Id" type="text" className="input-group"
                                onChange={ (e) =>
                                    this.setState({
                                                      renterId: e.target.value
                                                  })
                                }/>
                        <button className="btn btn-primary btn-sm" onClick={() => {
                            this.rentHardCopy(this.state.renterId)
                        }}>Rent Hard Copy</button>
                 </div>

                }
                {this.state.audioBooks && this.state.audioBooks.length > 0 &&
                    <div>
                        <h3>Number of Audiobook copies: {this.state.audioBooks.length}</h3>
                        <h4 >
                            Renter (Member) Id:
                        </h4>
                        <input placeholder="Member Id" type="text" className="input-group"
                               onChange={ (e) =>
                                   this.setState({
                                                     renterId: e.target.value
                                                 })
                               }/>
                        <button className="btn btn-primary btn-sm" onClick={() => {
                            this.rentAudiobook(this.state.renterId)
                        }}>Rent Audiobook Copy</button>
                    </div>
                }
            </div>
        )
    }
}
