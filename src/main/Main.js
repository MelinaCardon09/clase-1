// import React from 'react'
import Counter from './Counter';
import img from'./img/rosas.jpg';
import './css/Counter.css';


function Main(){
    return(
        <div className='text-center'>
            <Counter datos={['Karen Melina Cardona', '20971', '5°A']} />
            <img src={img} alt="rosas.jpg" class='img'/>
            
        </div>
    )
}

export default Main