import React from 'react';
import './quicksearch.css';
import List from '../List';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'



const QuicksearchP = (props) => {
    

    const listcategories = ({data}) => {
        console.log("mealdata esto xa ki :",data);
        if(data){
            return data.map((item) => {
                console.log("nieb:",item.type);
                
                   
                return(
                      <div className="col-md-6">
                      <Link to={`/List/${item.type}`}>
                      <div class="tilecontainer">
                          <div class="tileComponent1">
                              <img src={`./image/${item.type}.jpg`} className="blockimage"/>
                          </div>
                          <div class="tileComponent2">
                              <div class="componentHeading">
                                 <h3><center>{item.type.toUpperCase()}</center></h3> 
                              </div>
                              <div class="componentSubHeading">
                                  <center> some perfect and exclusive {item.type} option</center>
                              </div>
                          </div>
                      </div>
                  
                  </Link>
                      </div>
                       
                    
                        
                        )
            })
        }
    }

    return(
        <div class="quickSearchContainer">
            <p class="quickSearchHeading">
                Quick Searches
            </p>
            <p class="quickSearchSubHeading">
                Discover your desired Products
            </p>
            <div className="row">
                {listcategories(props)}
            </div>
           
        </div>
    )
}

export default QuicksearchP