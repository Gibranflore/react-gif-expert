
import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";


export const GifGrid = ({category}) => {
    
    //react vuelve a disparar 2 veceses este componente

    const { images, isLoading } = useFetchGifs ( category );

    //getGifs( category ); //no volver a disparar la peticion nuevamente

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2>) //aparecer cargando cuando buscas
            }


            <div className="card-grid">
                {
                    images.map( ( image )=> (
                       <GifItem 
                            key={image.id}
                            {...image}
                       />

                    ))
                }
            
            </div>
        </>
    )
}
