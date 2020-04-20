import React from "react";
import {Link} from "react-router-dom";

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
        libraryCardExpirationDate: ''

    }

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
    }

    deleteMember = (memberId) => {
        fetch(`http://localhost:8080/api/members/${memberId}`, {
            method: "DELETE"
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
                        </h4>
                     </span>

                    }
                    <h3>Library Card Expiration Date</h3>
                    <h4 className="form-control">
                        {this.state.libraryCardExpirationDate}
                    </h4>

                    {this.props.match.path.toString().includes("user-management") &&
                        <Link className="btn btn-primary btn-block" to={"/userAdmin"}
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
