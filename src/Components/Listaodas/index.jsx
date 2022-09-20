function Listaodas ({odas}) {
    return(
        odas.map(oda => (
            <div key={oda._id}>
              <h1>Nome do projeto: {oda.nome}</h1>
              <p><strong>Usuário:</strong> {oda.usuario}</p> 
              <p><strong>Descrição:</strong> {oda.descricao} </p>
              <p><strong>Data de quando foi inserido:</strong> {oda.data_inclusao} </p>
              <p><strong>Palavras chave:</strong> {oda.palavras_chave} </p>
            </div>
          
        ))
    )
}

export default Listaodas

