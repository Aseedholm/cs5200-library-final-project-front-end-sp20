import React from "react";
import {Link} from "react-router-dom";

export default class UserAdminPage extends React.Component {
    state = {

    }


    render() {
        return(
            <div>
                <h1>User Admin</h1>
                <Link className="btn btn-primary btn-block " to={`/user-management/admin/registration`}>
                    Create User (Member, Librarian, Administrator)
                </Link>
                <Link className="btn btn-primary btn-block " to={`/user-management/member-search`}>
                    Search Members
                </Link>
            </div>

        )
    }

}
