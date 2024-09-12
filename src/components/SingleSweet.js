import React from 'react';
import { useParams } from 'react-router-dom';

const SingleSweet = () => {
    const { id } = useParams();
    return (
        <div>
            sono un singolo dolcetto con id {id}
        </div>
    )
}

export default SingleSweet;
