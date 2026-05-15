import { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Ope () {
    const[num1,setNum1]=useState("")
    const[num2,setNum2]=useState("")
    const[resultado,setResultado]=useState("")

    function Soma(e){
        e.preventDefault()
        setResultado (Number(num1) + (Number(num2)))
    }
    function Multiplicacao (e){
        e.preventDefault()
        setResultado(Number(num1) * (Number(num2)))
    }
    function Divisao(e){
        e.preventDefault()
        setResultado (Number(num1) / (Number(num2)))
    }
    function Subtracao(e){
        e.preventDefault()
        setResultado (Number(num1) - (Number(num2)))
    }
    return(
        <>
                <label>Digite um número:</label>
                <input
                type="number"
                value={num1} 
                onChange={(e)=> setNum1(e.target.value)}
            />
<br/>
        <label>Digite outro número:</label>
            <input
            type="number"
            value={num2} 
            onChange={(e)=> setNum2(e.target.value)}
            />
<br />
            <button onClick={Soma}>Soma</button>
        <br />
            <button onClick={Divisao}>Divisão</button>
        <br />
            <button onClick={Subtracao}>Subtração</button>
        <br />
            <button onClick={Multiplicacao}>Multiplicação</button>
        <br />
            <p>{resultado}</p>
        </>
    )
}
export default Ope