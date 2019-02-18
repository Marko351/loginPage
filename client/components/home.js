import React from 'react';
import Header from './header';

const Home = () => {
  return (
      <React.Fragment>
        <Header/>
        <div className="jumbotron">
          <h2>Welcome to login page</h2>
        </div>
      </React.Fragment>
  )
}

export default Home;