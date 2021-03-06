import React, {useState} from "react" 


function Post(props) {
  const [curtido, setcurtida] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState("")
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])
  const [inputValue, setInputValue] = useState("")

  // Passo7
  const onClickCurtida = () => {
    if (curtido) {
      setcurtida(!curtido) 
      setNumeroCurtidas(numeroCurtidas -1)
    } else {
      setcurtida(!curtido) 
      setNumeroCurtidas(numeroCurtidas +1)
    }
  };

  // Passo7
  const onClickComentario = () => {
    setComentando(!comentando)

  // Passo7
  const onChangeComentario = (event) => {
    setInputValue(event.target.value)
  };

  // Passo7
  const enviarComentario = (comentario) => {
    

    setComentarios([...comentarios, comentario ])
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    setInputValue("")
  };

  {/* Passo6 */}
  const caixaDeComentario = comentando ? (
    <>
      <label htmlFor={"comentario"} >Comente: </label>
      {/* Passo4 */}
      <input
        id={"comentario"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      {/* Passo4 */}
      <button onClick={() => enviarComentario(inputValue)}>Enviar</button>
    </>
  ) : (
    // Passo8
    comentarios.map((comentario, index) => {
      return (
        <div key={index}> 
        <p>{comentario}</p>
      </div>
      )
    })
    // this.state.comentarios.map((comentario, index) => {
    //   return (
    //     <div key={index}>
    //       <p>{comentario}</p>
    //     </div>
    //   )
    // })
  );

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>{props.nomeUsuario}</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem voc?? ?? requer desapego de quem voc?? imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>N??mero de curtidas: {numeroCurtidas} </span>
          {/* Passo4 */}
          <button onClick={onClickCurtida} >
            {/* Passo6 */}
            {numeroCurtidas === 0 ? "Like" : "Dislike"}
          </button >
        </section>
        <section>
          {/* Passo6 */}
          <span>N??mero de coment??rios: {numeroComentarios}</span>
          {/* Passo4 */}
          <button onClick={onClickComentario}>
            {/* Passo6 */}
            { comentando ? "Fechar coment??rio" : "Adicionar coment??rio"}
          </button>
          <h4>Coment??rios</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  );
};

}

export default Post;