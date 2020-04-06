import React from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom";
import BookSearch from "./BookSearch";
import BookDetails from "./BookDetails";

export class BookContainer extends React.Component {
    render () {
        return (
            <div className="container">

                <BrowserRouter>
                    <Link to={`/`}>
                        <button>
                            Book Search
                        </button>

                    </Link>
                    <Route
                        path="/book-search/"
                        exact={true}
                        component={BookSearch}
                    />

                    <Route
                        path="/book-search/:bookSearchedFor"
                        exact={true}
                        component={BookSearch}
                    />

                    <Route
                        path="/book-search/book/:bookId"
                        exact={true}
                        component={BookDetails}
                    />
                </BrowserRouter>
            </div>
        )
    }
}
