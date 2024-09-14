import React, { useState } from 'react';
import data from "../data";
import { Link } from 'react-router-dom';


const Card = () => {

    const [searchProduct, setSearchProduct] = useState("");

    const handleSearch = (e) => {
        setSearchProduct(e.target.value);
    }

    const filteredProducts = data.filter(prodottoFiltrato =>
        prodottoFiltrato.nome.toLowerCase().includes(searchProduct.toLowerCase())
    );
    return (
        <div className='container-tot-card'>
            <input
                type="text"
                placeholder="Cerca il tuo dolcetto..."
                value={searchProduct}
                onChange={handleSearch}
                className="search-input"
            />
            <div>
                <ul className='tot-cards'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((el) => (
                            <SingleCard {...el} />
                        ))
                    ) : (
                        <h2>Nessun prodotto trovato</h2>
                    )}
                </ul>

            </div>
        </div>
        /* {
            data.map(el => {

                return <SingleCard {...el} />

            })
        } */

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
