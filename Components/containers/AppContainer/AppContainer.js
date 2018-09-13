import React, { Component } from 'react';
// import MapComponent from '../../components/MapComponent';
import SearchBar from '../SearchBarContainer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{width: "100%",height:"100%"}}>
        <SearchBar />
        {/*<MapComponent />*/}
      </div>
    );
  }
}

export default App;
