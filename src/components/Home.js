import React, {Component} from 'react';
import Users from "./Users";
import {Link} from 'react-router-dom';
import User from '../assets/user.png';
import {connect} from 'react-redux';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
    }
  }

  deleteUser = (index) => {
    let users = this.state.users.filter((user, i) => {
      return i !== index
    });
    this.setState({
      users: users
    })
  };

  render () {
    console.log(this.props)
    const {posts} = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={User} alt="user"/>
            <div className="card-content">
              <Link to={'/' + post.id}>
              <span className="card-title red-text">
                {post.title}
              </span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Post Yet</div>
    );
    return (
      <div className="home">
        {postList}
        <Users users={this.state.users} deleteUser={this.deleteUser}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
};

export default connect(mapStateToProps)(Home);
