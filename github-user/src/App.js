
import React from 'react';
import axios from 'axios'
import UserCard from './UserCard';

class App extends React.Component{

  state = {
    input: '',
    profile: {},
    username: 'ariuka11',
    followers: []
  }

  componentDidMount(){
    this.axiosApiCall();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.username !== this.state.username){
      this.axiosApiCall();
    }
  }

  axiosApiCall(){
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        console.log("Getting User info:", res)
        this.setState({
          ...this.state, 
          profile: res.data
        })
      })
      .catch(err => {
        console.log('Not successful:', err)
      })
      //Followers API call
    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
        .then(res => {
          console.log("Getting Followers info:", res)
          this.setState({
            ...this.state, 
            followers: res.data
          })
        })
        .catch(err => {
          console.log('Followers Not successful:', err)
        })
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      username : this.state.input,
    })
  }

  render(){
    return (
      <div>
        <form onSubmit = {e => this.handleSubmit(e)}>
          <input 
            type = 'text'
            name = 'input'
            placeholder = 'Search User'
            value = {this.state.input}
            onChange = {e => this.handleChange(e)}
          />
          <button>Search User</button>
        </form>
        <UserCard profile = {this.state.profile} followers = {this.state.followers} />
      </div>
    )
  }
}

export default App;
