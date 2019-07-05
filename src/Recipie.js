import React from 'react';
import style from './recipie.module.css';



const Recipie = ({title,image,calories,ingredients}) =>{
    return <div className={style.recipie}>
    <h1>{title}</h1>
    <ol>
    {ingredients.map((ingredient,i)=>(
        <li key={i}>{ingredient.text}</li>
    ))}
    </ol>
    <p>{calories}</p>
<img className={style.image}src={image} alt="img.recipe" />
    </div>
}

export default Recipie;