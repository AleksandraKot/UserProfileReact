import React from 'react';
import ReactDOM from 'react-dom';
import UserProfileWrapper from './UserProfileWrapper.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <UserProfileWrapper />
      </div>
    )
  }
}


document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <App />,
    document.getElementById('app'));
});
