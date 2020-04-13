import React from 'react'

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        userType : '',
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
        dtype: 'Member',
        dateOfBirth: ''

        // Member : {
        //     firstName: '',
        //     lastName: '',
        //     username: '',
        //     password: '',
        //     email: '',
        //     dtype: 'Member',
        //     dateOfBirth: ''
        // },
        // Librarian : {
        //     firstName: '',
        //     lastName: '',
        //     username: '',
        //     password: '',
        //     email: '',
        //     dtype: 'Librarian',
        //     dateOfBirth: ''
        // },
        // Admin : {
        //     firstName: '',
        //     lastName: '',
        //     username: '',
        //     password: '',
        //     email: '',
        //     dtype: 'Admin',
        //     dateOfBirth: ''
        // }
    }

    register = (user) => {
        {this.state.dtype === 'Member' &&
            fetch(`http://localhost:8080/api/members`, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'content-type': 'application/json'
                },
            }).then(response => response.json())
        }
        {this.state.dtype === 'Librarian' &&
         fetch(`http://localhost:8080/api/librarians`, {
             method: 'POST',
             body: JSON.stringify(user),
             headers: {
                 'content-type': 'application/json'
             },
         }).then(response => response.json())
        }
        {this.state.dtype === 'Administrator' &&
         fetch(`http://localhost:8080/api/admins`, {
             method: 'POST',
             body: JSON.stringify(user),
             headers: {
                 'content-type': 'application/json'
             },
         }).then(response => response.json())
        }

    }

    render() {
        return(
            <div className="container">
                <h4>
                    Registration
                </h4>




                {/*<select id="userType" className="custom-select">*/}
                <select id="userType" className="custom-select" onChange={(event => {
                    const newUserType = event.target.value;
                    this.setState({
                                      dtype : newUserType
                                  })
                })}
                        value={this.state.dtype}>
                    <option value="Member">
                        Member
                    </option>
                    <option value="Librarian">
                        Librarian
                    </option>
                    <option value="Administrator">
                        Administrator
                    </option>

                </select>
                <h4 >
                    First Name
                </h4>

                <input placeholder="First Name" type="text" className="input-group"
                onChange={ (e) =>
                    this.setState({
                        firstName: e.target.value
                                  })
                }/>
                <br/>
                <h4 >
                    Last Name
                </h4>
                <input placeholder="Last Name" type="text" className="input-group"
                       onChange={ (e) =>
                           this.setState({
                                             lastName: e.target.value
                                         })
                       }/>
                <br/>
                <h4 >
                    Username
                </h4>
                <input placeholder="Username" type="text" className="input-group"
                       onChange={ (e) =>
                           this.setState({
                                             username: e.target.value
                                         })
                       }/>
                <br/>
                <h4 >
                    Password
                </h4>
                <input placeholder="Password" type="password" className="input-group"
                       onChange={ (e) =>
                           this.setState({
                                             password: e.target.value
                                         })
                       }/>
                <br/>
                {/*<h4 >*/}
                {/*    Verify Password*/}
                {/*</h4>*/}
                {/*<input placeholder="Verify Password" type="password" className="input-group"/>*/}
                {/*<br/>*/}
                <h4 >
                    Email
                </h4>
                <input placeholder="Email" type="text" className="input-group"
                       onChange={ (e) =>
                           this.setState({
                                             email: e.target.value
                                         })
                       }/>
                <br/>
                <h4 >
                    Date of Birth
                </h4>
                <input type="date" className="input-group"
                       onChange={ (e) =>
                           this.setState({
                                             dateOfBirth: e.target.value
                                         })
                       }/>
                <br/>
                <button className="btn btn-primary btn-block"
                        onClick={ () => {
                            let user = {
                                firstName: this.state.firstName,
                                lastName: this.state.lastName,
                                username: this.state.username,
                                password: this.state.password,
                                email: this.state.email,
                                dtype: this.state.dtype,
                                dateOfBirth: this.state.dateOfBirth

                            }
                            this.register(user)
                        }}
                >
                    Registration
                </button>
            </div>
        )
    }
}
