import React from "react";
import {Link} from "react-router-dom";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class MemberProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        member : {
            username: '',
            password: '',
            email: '',
            dob: '',
            firstName: '',
            lastName: '',
            sponsoredBy: ''
        },
        libraryCardExpirationDate: '',
        checkedOutBooks: [],
        sponsorInfo:{}

    }

    findSponsorInformation = (sponsorId) =>
        fetch(`http://localhost:8080/api/members/id/${sponsorId}`)
            .then(result => result.json())
            .then(response => this.setState({
                sponsorInfo: response
                                            }))

    componentDidMount() {
        const memberId = this.props.match.params.memberId;
        fetch(`http://localhost:8080/api/members/id/${memberId}`)
            .then(response => response.json())
            .then(results => this.setState({
                                               member: {
                                                   username: results.username,
                                                   password: results.password,
                                                   email: results.email,
                                                   dob: results.dateOfBirth,
                                                   firstName: results.firstName,
                                                   lastName: results.lastName,
                                                   sponsoredBy: results.sponsoredBy
                                               }

                                           }))

        fetch(`http://localhost:8080/api/library-cards/member-id/${memberId}`)
            .then(response => response.json())
            .then(results => this.setState({
                                               libraryCardExpirationDate: results.expirationDate
                                               }))

        fetch(`http://localhost:8080/api/members/${memberId}/checked-out-currently`)
            .then(response => response.json())
            // .then(results => console.log(results))
            .then(results => this.setState({
                                               checkedOutBooks: results
                                           }))

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.checkedOutBooks.length !== this.state.checkedOutBooks.length) {
            this.setState(prevState => {
                            prevState.checkedOutBooks = this.state.checkedOutBooks
                            return prevState
                          })
        }
    }


    deleteMember = (memberId) => {
        fetch(`http://localhost:8080/api/members/${memberId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }

    deleteBookCopy = (bookId) => {
        fetch(`http://localhost:8080/api/book-copies/${bookId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }

    returnBook = (bookId) => {
        fetch(`http://localhost:8080/api/members/${this.props.match.params.memberId}/return/${bookId}`, {
            method: "POST"
        })
            .then(response => response.json())
    }

    render() {
        return(
            <div className="container">
                <div>
                    <h1>MEMBER PROFILE PAGE</h1>
                    <h3>Username</h3>
                    <h4 className="form-control">
                        {this.state.member.username}
                    </h4>
                    <h3>Password</h3>
                    <h4 className="form-control">
                        {this.state.member.password}
                    </h4>
                    <h3>Email</h3>
                    <h4 className="form-control">
                        {this.state.member.email}
                    </h4>
                    <h3>Date of Birth</h3>
                    <h4 className="form-control">
                        {this.state.member.dob}
                    </h4>
                    <h3>First Name</h3>
                    <h4 className="form-control">
                        {this.state.member.firstName}
                    </h4>
                    <h3>Last Name</h3>
                    <h4 className="form-control">
                        {this.state.member.lastName}
                    </h4>
                    {this.state.member.sponsoredBy &&
                     <span>
                        <h3>Sponsored By</h3>
                        <h4 className="form-control">
                            {this.state.member.sponsoredBy}
                            {console.log("HERE",this.state.sponsorInfo)}
                        </h4>
                     </span>

                    }
                    <h3>Library Card Expiration Date</h3>
                    <h4 className="form-control">
                        {this.state.libraryCardExpirationDate}
                    </h4>

                    <br/>
                    <h3> Currently Rented Books by ID </h3>
                    {this.state.checkedOutBooks && this.state.checkedOutBooks.length > 0 &&
                     this.state.checkedOutBooks.map((book, index) =>
                        <li key={index} className="list-group-item">
                            <span>
                                Rented Book Id: {book[0].id}
                                <br/>
                                Rented Book Name: {book[1]}
                                {this.props.match.path.toString().includes("user-management") &&
                                    <button className="btn btn-primary btn-sm float-right" onClick={() => {
                                        this.deleteBookCopy(book[0].id)
                                    }}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                }
                                {this.props.match.path.toString().includes("user-management") &&
                                 <button className="btn btn-primary btn-sm float-right" onClick={() => {
                                     this.returnBook(book[0].id)
                                 }}>
                                     Return Book

                                 </button>
                                }
                            </span>
                        </li>
                     )
                    }
                    <br/>
                    {this.props.match.path.toString().includes("admin") &&
                        <Link className="btn btn-primary btn-block" to={"/userAdmin"}
                                onClick={ () => {
                                    this.deleteMember(this.props.match.params.memberId)
                                }}
                        >
                            Delete
                        </Link>

                    }
                    {this.props.match.path.toString().includes("librarian") &&
                     <Link className="btn btn-primary btn-block" to={"/librarian"}
                           onClick={ () => {
                               this.deleteMember(this.props.match.params.memberId)
                           }}
                     >
                         Delete
                     </Link>

                    }


                </div>
            </div>
        )
    }
}
