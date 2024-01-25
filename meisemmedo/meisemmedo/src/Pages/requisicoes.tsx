import { useState } from "react"

function Requisicoes(){
    const[produtos, setProdutos]=useState([])
    const[categorias, setCategorias]=useState([])
    
    const carregarProdutos=()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            setProdutos(json)
        })
    }
    const carregarCategorias=()=>{
        fetch('https://fakestoreapi.com/products/categories')
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            setCategorias(json)
        })
    }
    return(
        <div>
            <button onClick={carregarProdutos}>Carregar Produtos</button><br/>
            {produtos.length} <br />
            <button onClick={carregarCategorias}>Carregar Categorias</button><br />
            {categorias.length} <br />
            {produtos.map((item, index)=>(
                <div>
                    {item[1]}
                </div>
            ))}
        </div>
    )
}
export default Requisicoes;