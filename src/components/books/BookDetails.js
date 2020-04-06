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
    }

    state = {
        book: {},
        image: {}
    }
    render() {
        console.log(this.state.book);
        console.log(this.state.image)
        return(
            <div>
                <h1>{this.state.book.title}</h1>
                <img src={this.state.image.smallThumbnail}/>
                <h1>Author: {this.state.book.authors}</h1>
                <h1>Publisher: {this.state.book.publisher}</h1>
                <h1>Page Count: {this.state.book.pageCount}</h1>
                {/*<label>Book Description: {this.state.book.description}</label>*/}
            </div>
        )
    }
}
