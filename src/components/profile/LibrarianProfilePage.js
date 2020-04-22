import React from "react";
import {Link} from "react-router-dom";

export default class LibrarianProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        librarian : {
            username: '',
            password: '',
            email: '',
            dob: '',
            firstName: '',
            lastName: '',
            dateHired: '',
            hasW2OnFile: '',

        },
        editing: false
    }

    changeEditing = () => {
        if (this.state.editing === false) {
            this.setState({
                              editing: true
                          })
        } else {
            this.setState({
                              editing: false
                          }
            )
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
                                                   hasW2OnFile: results.hasW2OnFile,
                                               }

                                           }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.librarian !== this.state.librarian) {
            this.setState(prevState => {
                prevState.librarian = this.state.librarian
                return prevState
                          })
        }
    }

    deleteLibrarian = (librarianId) => {
        fetch(`http://localhost:8080/api/librarians/${librarianId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }

    render() {
        return(
            <div className="container">
                <div>
                     <button className="btn btn-primary btn-sm float-right"
                             onClick={() => {
                                 this.changeEditing()
                                 console.log(this.state.editing)}
                             }>
                         Edit
                     </button>

                    <h1>LIBRARIAN PROFILE PAGE</h1>
                    {this.state.editing === false &&
                     <div>
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
                    }
                    {this.state.editing === true &&
                     <div>
                         <h3>Username</h3>
                         <input className="form-control" placeholder="Username" onChange={(e) => {
                             const newUsername = e.target.value;
                             this.setState({
                                 librarian: {
                                     ...this.state.librarian, username: newUsername
                                 }
                                           }
                                )

                         }
                         }
                         value={this.state.librarian.username}/>

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
                    }



                    {this.props.match.path.toString().includes("user-management") &&
                     <Link className="btn btn-primary btn-block" to={"/userAdmin"}
                           onClick={ () => {
                               this.deleteLibrarian(this.props.match.params.librarianId)
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
