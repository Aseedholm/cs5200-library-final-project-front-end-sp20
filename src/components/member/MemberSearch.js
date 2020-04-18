import React from "react";
import {Link} from "react-router-dom";

export default class MemberSearch extends React.Component {
    state = {
        members: {},
        memberUsernameSearched: ''
    }

    componentDidMount() {
        let searchMember = this.props.match.params.memberSearchedFor
        console.log("MEMBER SEARCHED FOR", searchMember)
        console.log(this.props.match.params)
        if(searchMember === undefined) {
            searchMember = ' '
        }
        //findUserByUsername api call here.
        fetch(`http://localhost:8080/api/member/username/${searchMember}`)
            .then(response => response.json())
            .then(results => this.setState({
                                            members: results,
                                            memberUsernameSearched: searchMember
                                           }))


        // fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchMember}&maxResults=40&orderBy=relevance`)
        //     .then(response => response.json())
        //     .then(results => this.setState({
        //                                        members: results.items,
        //                                        memberUsernameSearched: searchMember
        //                                    }))

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.memberSearchedFor !== this.props.match.params.memberSearchedFor) {
            this.findUserByUsername(this.props.match.params.memberSearchedFor)
        }
    }

    findUserByUsername = (username) =>
        fetch(`http://localhost:8080/api/member/username/${username}`)
            .then(respnose => respnose.json())
            .then(results => this.setState({
                                               members: results
                                           }))

    render() {
        return(
            <div>
                <h1>
                    Member Username: ({this.props.match.params.memberSearchedFor})
                </h1>

                <ul className="list-group">
                    <span className="list-group-item">
                        <input
                            value={this.state.memberUsernameSearched || ''}
                            onChange={(e) => this.setState({
                                                               memberUsernameSearched: e.target.value
                                                           })}
                            className={`form-control`}/>

                        <button
                            onClick={() => this.props.history.push(`/member-search/${this.state.memberUsernameSearched}`)}
                            className={`btn btn-primary btn-block`}>
                            Search User
                        </button>

                    </span>

                    {this.state.members &&
                            <Link to={`/book-search/book/${this.state.members.id}`}>
                                {this.state.members.id}
                                <br/>
                                {this.state.members.username}
                            </Link>
                    }
                </ul>
            </div>
        )
    }
}
