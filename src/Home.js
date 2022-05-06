import React from 'react';
import './Home.css';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
import Card5 from './card5';
import Card6 from './card6';

function Main(){
    return (
        <div>
        <h1 className='star img'>taste the best</h1>
                <div class='row'>
                <div class="col-sm-4"><Card1/> </div>
                <div class="col-sm-4">  <Card2/>  </div>
                <div class="col-sm-4">  <Card3/> </div>
                </div> 

                
                <div class='row'>
                <div class="col-sm-4"><Card4/> </div>
                <div class="col-sm-4">  <Card5/>  </div>
                <div class="col-sm-4">  <Card6/> </div>
                </div>
                
                </div>
    )
}

export default Main;