import React from 'react';
import CirclePercentAge from './component/CirclePercentAge'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      progressPercent: 0
    }
  }

  componentDidMount(){
    var self = this;
  var tim = setInterval(function(){
    if(self.state.progressPercent>=55){
      clearInterval(tim);
      return;
    }
    else{
      self.setState({progressPercent: self.state.progressPercent + 1});
      return;
    }
  }, 10);
  }
  render(){
    return (<CirclePercentAge percent={50} />);
  }
}
module.exports = App;
