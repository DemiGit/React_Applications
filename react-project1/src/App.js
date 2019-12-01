import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import Header from './components/Header/Header';

const FormShape = () => {
  return <div>This is box shape!</div>
}

class Box extends React.Component {
  constructor(props){
    super(props);
    this.state = {show: false}
    this.showToggle = this.showToggle.bind(this);
  }

  showToggle() {
    const {show} = this.state;
    this.setState({show: !show});
  }

  render() {
    return <div>
      <button onClick = {this.showToggle}>Switch On</button>
      {this.state.show && <FormShape/>}
    </div>
  }

}

const App = (props) => {
  return <div>
    <Header />
    <Navbar/>
    <Route path={'/profile/:userId?'} render={() => <Profile />}/>
    <Route exact path={'/users'} render={() => <Users />}/>
    <Box/>
  </div>
}

export default App;
