import React from "react";
import {BrowserRouter, Link} from "react-router-dom";
import HomePageStyle from "./HomePage.css"

export default class HomePage extends React.Component {
    state = {

    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render() {
        return(
            <div className="container">
                <div className="justify-content-center">
                    <h1>
                        Welcome to The Library!
                    </h1>
                    <Link className="btn btn-primary btn-block " to={`/login`}>
                        Login
                    </Link>
                    <br/>

                    <Link className="btn btn-primary btn-block " to={`/registration/`}>
                        Registration
                    </Link>
                    {/*<br/>*/}
                    {/*<Link className="btn btn-primary btn-block " to={`/member-profile/`}>*/}
                    {/*    Member Profile*/}
                    {/*</Link>*/}
                    {/*<br/>*/}
                    {/*<Link className="btn btn-primary btn-block " to={`/member-profile/8`}>*/}
                    {/*    Member Profile TEST ADULT*/}
                    {/*</Link>*/}
                    {/*<br/>*/}
                    {/*<Link className="btn btn-primary btn-block " to={`/member-profile/11`}>*/}
                    {/*    Member Profile TEST CHILD*/}
                    {/*</Link>*/}
                    {/*<br/>*/}
                    {/*<Link className="btn btn-primary btn-block " to={`/librarian-profile/`}>*/}
                    {/*    Librarian Profile*/}
                    {/*</Link>*/}
                    {/*<br/>*/}
                    {/*<Link className="btn btn-primary btn-block " to={`/librarian-profile/17`}>*/}
                    {/*    Librarian Profile TEST*/}
                    {/*</Link>*/}
                    <br/>
                    <Link className="btn btn-primary btn-block " to={`/book-search/`}>
                        Book Search
                    </Link>
                    <br/>
                    <Link className="btn btn-primary btn-block " to={`/member-search`}>
                        Search Members
                    </Link>
                    {/*<br/>*/}
                    {/*<Link className="btn btn-primary btn-block " to={`/member-search/`}>*/}
                    {/*    Member Search*/}
                    {/*    /!*<FontAwesomeIcon icon={faBook} />*!/*/}
                    {/*    /!*<FontAwesomeIcon icon={faSearch} />*!/*/}
                    {/*</Link>*/}
                    {/*<br/>*/}
                    {/*<Link className="btn btn-primary btn-block " to={`/librarian-search/`}>*/}
                    {/*    Librarian Search*/}
                    {/*    /!*<FontAwesomeIcon icon={faBook} />*!/*/}
                    {/*    /!*<FontAwesomeIcon icon={faSearch} />*!/*/}
                    {/*</Link>*/}

                </div>

            </div>
        )
    }
}
