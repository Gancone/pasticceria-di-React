import React from 'react';
import data from "../data";
import { Link } from 'react-router-dom';


const Card = () => {
    return (
        <div className='container-tot-card'>
            {
                data.map(el => {

                    return <SingleCard {...el} />

                })
            }

        </div>
    )
}


const SingleCard = ({ immagine, nome, prezzo, descrizione, id }) => {
    return (
        <div className='card' key={id}>
            <div>
                <Link to={`/lista/${id}`}> <img className='container-img' src={immagine} alt={nome} /></Link>
            </div>
            <div className='container-body'>
                <h3>{nome}</h3>
                <p>{descrizione}</p>
                <h4>{parseInt(prezzo).toFixed(2)} €</h4>
            </div>
            <div className='container-buy'>
                {/* <h2 className='operator add'>-</h2> */}
                <button>Compra</button>
                {/* <h2 className='operator'>+</h2> */}
            </div>

        </div>
    )
}
export default Card;
