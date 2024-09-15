import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';
const SingleSweet = () => {
    const { id } = useParams();
    const singoloSweet = data.find((item) => item.id === parseInt(id));


    if (!singoloSweet) {
        return <p>Prodotto non trovato</p>;
    }

    return (
        <div className='container-single-sweet'>
            <img className="container-single-sweet-img" src={singoloSweet.immagine} alt={singoloSweet.nome} />
            <div className='container-single-sweet-body'>

                <h1>{singoloSweet.nome}</h1>
                <p>{singoloSweet.descrizioneCompleta}</p>
                <h2>{parseFloat(singoloSweet.prezzo).toFixed(2)} €</h2>
                {/* <div>
                    <button>Compra</button>
                </div> */}

            </div>
        </div>
    );
};

export default SingleSweet;
