import React from 'react'

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        userType : ''
    }

    render() {
        return(
            <div className="container">
                <h4>
                    Registration
                </h4>

                <select id="userType" className="custom-select">
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

                <input placeholder="First Name" type="text" className="input-group"/>
                <br/>
                <h4 >
                    Last Name
                </h4>
                <input placeholder="Last Name" type="text" className="input-group"/>
                <br/>
                <h4 >
                    Username
                </h4>
                <input placeholder="Username" type="text" className="input-group"/>
                <br/>
                <h4 >
                    Password
                </h4>
                <input placeholder="Password" type="password" className="input-group"/>
                <br/>
                <h4 >
                    Verify Password
                </h4>
                <input placeholder="Verify Password" type="password" className="input-group"/>
                <br/>
                <h4 >
                    Email
                </h4>
                <input placeholder="Email" type="text" className="input-group"/>
                <br/>
                <h4 >
                    Date of Birth
                </h4>
                <input type="date" className="input-group"/>
                <br/>
                <button className="btn btn-primary btn-block">{/*Can add onClick() to use a fetch request at controller. */}
                    Registration
                </button>
            </div>
        )
    }
}
