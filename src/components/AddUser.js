import React, {Component} from 'react';
import Rainbow from '../hoc/Rainbow'

class AddUser extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      status: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      name: '',
      age: '',
      status: '',
    })
  };

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/>
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} value={this.state.age}/>
          <label htmlFor="status">Status:</label>
          <input type="text" id="status" onChange={this.handleChange} value={this.state.status}/>
          <button className="btn">submit</button>
        </form>
      </div>
    );
  }
}

export default Rainbow(AddUser);
