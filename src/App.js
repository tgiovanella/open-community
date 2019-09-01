import React from 'react';
import Manifesto from './manifesto.json';
import List from './Components/List';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {valores : Manifesto};
    
  }

  render(){
    return(
      <div>
        <h1>Open Community - Sul de Minas - </h1>
        <List manifesto = {this.state.valores} />
      </div>
    );
  }
}


export default App;
