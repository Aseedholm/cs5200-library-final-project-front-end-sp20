import React from "react";

export default class LibrarianProfilePage extends React.Component {
    state = {
        librarian : {
            username: '',
            password: '',
            email: '',
            dob: '',
            firstName: '',
            lastName: '',
            dateHired: '',
            hasW2OnFile: ''
        }

    }

    componentDidMount() {
        const librarianId = this.props.match.params.librarianId;
        fetch(`http://localhost:8080/api/librarians/id/${librarianId}`)
            .then(response => response.json())
            .then(results => this.setState({
                                               librarian: {
                                                   username: results.username,
                                                   password: results.password,
                                                   email: results.email,
                                                   dob: results.dateOfBirth,
                                                   firstName: results.firstName,
                                                   lastName: results.lastName,
                                                   dateHired: results.dateHired,
                                                   hasW2OnFile: results.hasW2OnFile
                                               }

                                           }))
    }

    render() {
        return(
            <div className="container">
                <div>
                    <h1>LIBRARIAN PROFILE PAGE</h1>
                    <h3>Username</h3>
                    <h4 className="form-control">
                        {this.state.librarian.username}
                    </h4>
                    <h3>Password</h3>
                    <h4 className="form-control">
                        {this.state.librarian.password}
                    </h4>
                    <h3>Email</h3>
                    <h4 className="form-control">
                        {this.state.librarian.email}
                    </h4>
                    <h3>Date of Birth</h3>
                    <h4 className="form-control">
                        {this.state.librarian.dob}
                    </h4>
                    <h3>First Name</h3>
                    <h4 className="form-control">
                        {this.state.librarian.firstName}
                    </h4>
                    <h3>Last Name</h3>
                    <h4 className="form-control">
                        {this.state.librarian.lastName}
                    </h4>
                    <h3>Date Hired</h3>
                    <h4 className="form-control">
                        {this.state.librarian.dateHired}
                    </h4>
                    <h3>W2 on file</h3>
                    <h4 className="form-control">
                        {this.state.librarian.hasW2OnFile &&
                        this.state.librarian.hasW2OnFile.toString()

                        }

                    </h4>

                </div>
            </div>
        )
    }
}
