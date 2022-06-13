import React from 'react';
import {RedeSocial, ImagemSocial} from "./styled"

function ImagemButton(props) {
    return (
        <RedeSocial>
            <ImagemSocial src={ props.imagem }/>
            <p>{ props.texto }</p>
        </RedeSocial>

    )
}

export default ImagemButton;