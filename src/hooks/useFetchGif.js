import { useEffect, useState } from "react"
import  { getGifs } from '../components/helpers/getGifs'

export const useFetchGif=(category)=>{

    const [state, setState] = useState({
        data:[],
        loading:true

    });

    useEffect(()=>{

        getGifs(category)
            .then(img=>{

                    setState({
                        data:img,
                        loading:false
                    });


            })

    },[category])

 
    return state; // devuevle el arreglo vacio y loading
}