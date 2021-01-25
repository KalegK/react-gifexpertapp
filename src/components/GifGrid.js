import React from 'react'
import {useFetchGif} from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {
    
    
    const {data:images,loading}=useFetchGif(category);



    // getGifs();


    return (
        <>
        <h3>{category}</h3>
        {loading && <p>Loading..</p> }
        <div className="card-grid">
           

               {
                   images.map(imagen=>(

                        <GifGridItem
                        key={imagen.id}
                        {...imagen}
                        />
                        
                   ))
               }
        

        </div>
        </>
    )
}
