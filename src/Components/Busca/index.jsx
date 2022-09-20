function Busca ({busca, buscaODA}) {
    return( 
       <div className="busca">
        <span>Digite no campo para iniciar a sua busca</span>
        <input
            name = 'busca'
            type= 'text'
            value={busca}
            onChange={buscaODA}
        />
       </div> 
    )
} 

export default Busca