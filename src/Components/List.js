import React from 'react';

export default function List(props){
    let Manifesto = props.manifesto.manifesto;
    let Itens = Manifesto.conteudo.map((valor) => 
        <li key = {valor.valor}>{valor.valor}
            <ul>
                <li>
                    {valor.descricao}
                </li>
            </ul>
        </li>
    );

    return(
        <ol>{Itens}</ol>
    );
}