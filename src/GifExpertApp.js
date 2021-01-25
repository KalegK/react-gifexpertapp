import  { useState } from "react";
import  AddCategory  from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp=()=>{
    // const categories= ['Evangelion','Dragon ball','One piece']

    const [categories, setCategories] = useState(['Evangelion']);

    // const handleAdd=(e)=>{
    //      const anime= 'pokemon';
    //     setCategories([...categories,anime]);
    //     setCategories(categories.concat(anime));
    // }

    return(
        <> 
            <h2>GifExpertApp</h2>
            
            < AddCategory setCategories={setCategories}/>     
            <hr></hr>

            <ol>
                { 
                  categories.map(category => (
                    
                    <GifGrid 
                    
                        key={category}
                        category={category}

                    />

                  )
                
                ) 
                }
            </ol>

        </>
    )
}