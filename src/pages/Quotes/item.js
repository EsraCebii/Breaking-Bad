import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

function Item({item}) {
    return (
        <div className="quote_item">
            <Link to={`/quotes/${item.quote_id}`}><q style={{color:"wheat"}}>{item.quote}</q></Link>
            <strong>{item.author}</strong>
        </div>
    )
}

export default Item
