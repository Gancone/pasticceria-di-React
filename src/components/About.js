import React from 'react';
import pasticceria from "../media/image/pasticceria.png";

const About = () => {
    return (
        <div className='container-about'>
            <img src={pasticceria} alt='Negozio di pasticceria' />
            <p className='paragraph-about'>
                La Pasticceria React è un’elegante boutique dolciaria situata nel cuore della città, rinomata per la sua combinazione unica di tradizione e innovazione. Il locale accoglie i visitatori con un design moderno ma accogliente, dove l’attenzione ai dettagli si riflette sia nell'arredamento che nelle creazioni culinarie. Le vetrine, sempre curate, espongono una vasta gamma di dolci artigianali, dalle classiche torte italiane ai dessert più creativi e contemporanei.

                Tra le specialità della casa spiccano i macaron colorati, i croissant sfogliati alla perfezione, e le torte monumentali, spesso scelte per eventi speciali e celebrazioni.<br /> Il nome "React" riflette la capacità della pasticceria di adattarsi ai gusti moderni, pur mantenendo una profonda connessione con le tecniche tradizionali.

                Oltre ai dolci, la Pasticceria React è famosa per la sua selezione di caffè gourmet e cioccolate calde fatte in casa, ideali per accompagnare una pausa in qualsiasi momento della giornata. L’atmosfera amichevole e professionale del personale rende ogni visita un’esperienza memorabile, sia per chi desidera un rapido spuntino dolce, sia per chi è in cerca di una creazione personalizzata per un’occasione speciale.

                <br />In sintesi, la Pasticceria React è un punto di riferimento per chi cerca l’eccellenza nel mondo della pasticceria, un luogo dove ogni dolce è pensato per sorprendere e deliziare.
            </p>
        </div>
    )
}

export default About
