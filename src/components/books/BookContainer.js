import React from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom";
import BookSearch from "./BookSearch";
import BookDetails from "./BookDetails";
import LoginPage from "../login/LoginPage";
import Registration from "../registration/Registration";
import MemberPage from "../member/member-page"
import LibrarianPage from "../librarian/librarian-page"
import UserAdminPage from "../userAdmin/userAdmin-page"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faBook} from "@fortawesome/free-solid-svg-icons";

export class BookContainer extends React.Component {
    render () {
        return (
            <div className="container row">

                <BrowserRouter>
                    <div>
                        <Link className="btn btn-primary btn-sm float-right " to={`/book-search/`}>
                            Book Search
                            {/*<FontAwesomeIcon icon={faBook} />*/}
                            {/*<FontAwesomeIcon icon={faSearch} />*/}
                        </Link>
                        <br/>
                        <Link className="btn btn-primary btn-sm float-right " to={`/login`}>
                            Login
                        </Link>
                        <br/>
                        <Link className="btn btn-primary btn-sm float-right " to={`/registration/`}>
                            Registration
                        </Link>
                    </div>

                    <div className="col">
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

                        <Route
                            path="/login"
                            exact={true}
                            component={LoginPage}
                        />

                        <Route
                            path="/registration"
                            exact={true}
                            component={Registration}
                        />

                        <Route
                            path="/member"
                            exact={true}
                            component={MemberPage}
                        />

                        <Route
                            path="/librarian"
                            exact={true}
                            component={LibrarianPage}
                        />

                        <Route
                            path="/userAdmin"
                            exact={true}
                            component={UserAdminPage}
                        />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
