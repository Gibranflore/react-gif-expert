import {useState} from 'react'
import { AddCategory, GifGrid } from './components';


export default function GifExpertApp() {

    const [categories, setCategories] = useState(['earth']);

    const onAddCategory = (newcategory) => { //Todo esto ayuda para capturar lo que escribimos y lo añada al formulario
        
        if( categories.includes(newcategory) ) return; //llamamos categories e includes ve si ya tiene gurardo lo de newcategory y no lo añade
        //categories.push(newcategory);
        setCategories([newcategory, ...categories ])
    }

  return (
    <>
         <h1>GifExpertApp</h1>
              
        <AddCategory //Esto se esta exportando es la nueva categoria que se añadira

            //setCategories={setCategories}
            onNewCategory={(value) => onAddCategory(value)}
            //CurrentCategory = {categories}
        />

            {
                //<li key={ category }>{category}</li> 
                categories.map((category) => (
                <GifGrid key={category} category={category}/>
                ))
            }
    </>  
    )
}
//No usar el i "indice" con las llaves para eliminar duplicados, porque eliminaria la poscion 0
{/*  //un coponente agrupar todos los elementos de la misma categoria , mostra 1 categoria
    */}