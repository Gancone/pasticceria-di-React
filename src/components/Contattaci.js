import React from 'react';

const Contattaci = () => {
    return (
        <form className='container-main-form' action="https://formspree.io/f/meojwlga"
            method="POST">
            <div className='container-form'>
                <div className='container-contattaci'>
                    <label className='contattaci-label'>Nome</label>
                    <input type='text' placeholder='Il tuo nome' name='name' />

                </div>

                <div className='container-contattaci'>
                    <label className='contattaci-label'>Cognome</label>
                    <input type='text' placeholder='Il tuo cognome' name='surname' />
                </div>
                <div className='container-contattaci'>
                    <label className='contattaci-label'>Email</label>
                    <input type='email' placeholder='La tua email' name='email' />

                </div>
                <div className='container-contattaci'>
                    <label className='contattaci-label'>Descrizione</label>
                    <textarea type='text' placeholder='Inserisci qui la descrizione' rows={10} name='description'></textarea>

                </div>
                <button type='submit'>Invia</button>
            </div>


        </form>
    )
}

export default Contattaci;
