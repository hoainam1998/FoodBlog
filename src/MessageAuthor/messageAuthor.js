import React from 'react';
import style from './messageAuthor.module.css';

function MessageAuthor() {

    return (
        <div className={style.message}>
            <img src={require(`D:/React/foodeiblog/src/images/quote.png`)} alt="quote"></img>
            <p>Nulla porttitor accumsan tincidunt.
                Curabitur arcu erat, accumsan id imperdiet et,
                porttitor at sem. Donec sollicitudin molestie malesuada.
            </p>
            <p className={style.name}>Elena T.Jaivy</p>
        </div>
    )
}

export default React.memo(MessageAuthor)