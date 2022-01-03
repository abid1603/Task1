import React, { useState } from 'react'
import './Style.css';
import {cardinfo} from './Obj';

export default function Card() {
    const [search, setsearch] = useState('')
    return (
            
            <div>
                <div class="topnav">
                     <input type="text" onChange={(e)=>{
                         setsearch(e.target.value);
                         //console.log(search)
                     }} placeholder="Search.."/>
                </div>
                    <div className='body justify-content-around'>
                    {cardinfo.map(card => 
                        {
                            if(card.title.includes(search)){
                                return <div className='card'>
                                {card.heading.split(' ')[0] === 'Autometed' ? 
                                <h6 className='h6Green'> {card.heading} </h6> : 
                                <h6 className='h6Violet'> {card.heading} </h6>}
                                <h2 className='title'>{card.title}</h2>
                                <p className='text'>{card.intents} Intents</p>
                                <div className='btn-group'>
                                <button type="button" className="btnBlue hsb">View</button>
                                <button type="button" className="btnRed hsb">Remove</button>
                                </div>
    
                                <div className='footer'>
                                    Last Update: Jan 23, 2021 @ 4:32am
                                </div>
    
                            </div> 
                            } else{
                                return <span></span> }
                        }
                    )}
                </div>
            </div>
    )
}

