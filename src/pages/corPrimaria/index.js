import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



 export default function CorPrimaria(){
     const[cor, setCor] = useState('')
     const[resposta, setResposta] = useState(false)


     async function CalcularClick(){
         const resp = await axios.get('http://localhost:5000/dia2/corprimaria/' + cor)

         if(resp.data.cor === true)
         {
             setResposta("Cor Primaria")
         }
         else
         {
             setResposta("Não é cor primaria")
         }
     }

     return(
         <div>
             <div>
                <Link to='/'>voltar</Link>

                <h1 className="titulo"> Programa Cor Primaria</h1>

                Cor: &nbsp;
                <input type='text' value={cor} onChange={e => setCor(e.target.value)} />

                <button onClick={CalcularClick}> Verificar</button>

                <div>
                    Cor Primaria? {resposta}

                </div>

             </div>

         </div>
     )
 }