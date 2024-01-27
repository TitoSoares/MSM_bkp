import { useEffect, useState } from "react"
import { Produto } from "../Types/produto"

function Requisicoes(){
    const[produtos, setProdutos]=useState<Produto[]>([])
    const[categorias, setCategorias]=useState([])
    
    useEffect(()=>{

    },[])
    const carregarProdutos=()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response)=>{
            return response.json()
        })
        .then((json)=>{
            setProdutos(json)
        })
        alert("A função foi executada!")
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
            {produtos.map((item, index)=>(
                <div key={index}>
                    <img src={item.image} className="requisicoes"/>
                    {item.title} <br />
                    {item.description} <br />
                </div>
            ))} <br />
            <button onClick={carregarCategorias}>Carregar Categorias</button><br />
            {categorias.length} <br />
            {produtos.length}
        </div>
    )
}
export default Requisicoes;