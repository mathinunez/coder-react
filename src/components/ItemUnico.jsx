import {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import {unicoPersonaje} from '../src/AllPerson'

function Item() {
  const[item,setItem]=useState(null)


    const params = useParams()

    useEffect(()=>{
     unicoItem(params.id, setItem)
    }, [params.id])
  return (
    <> 
    {item != null ?(
        <div>
    <h1>Personaje con el id {params.id}</h1>
    <p> con el nombre <b>{item.name}</b> </p>
    <img src={item.image} alt="imagen"/>
     </div> 
  ) : ('no hay productos para mostrar')}

    </>
  )
}

export default Item