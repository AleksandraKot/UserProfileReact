import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './UserProfile.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <UserProfile />
      </div>
  )
  }
}


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App/>,
    document.getElementById('app'));
});
