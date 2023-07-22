import React from 'react';
import './my.css'


const Card=(props)=>{
    
    return(<>
        <div className='cards'>
          <div className='card'>
           <img src={props.imgsrc} alt='' className='card__img'/>
           <div className='card__info'>
              <span className='card__category'>{props.title}</span>
              <h3 className='card__title'>{props.sname}</h3>
              <a href={props.link} target='_blank' rel='noreferrer'>
                 <button>Read Now</button>
              </a>
           </div>
          </div>
          </div>
          
    
    </>)
  }

  export default Card