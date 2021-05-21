import React, { Component } from "react";
import Listingd from './Listingd';





class Listapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothing:'',
    
    };
    
    
  }
 

  render() {
    
    return (
        <div>
        
             <Listingd d={this.state.clothing}/>
        
        </div>
             
    )
    }
      
      
      
    
  
   componentDidMount() {
    const product=this.props.match.params.type;
     fetch(`https://aqueous-taiga-18405.herokuapp.com/${product}`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      },
   })
      .then((res) => res.json())
     .then((d) => {console.log("data fuck:",d)
        this.setState({ clothing: d });
     });
 }


}

export default Listapi;
