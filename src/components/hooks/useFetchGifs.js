import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/getGIf";

export const useFetchGifs = ( category ) => {

        const [images, setImages] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []); //arreglo de mis dependencias solo se dispara 1 vez

    return {
        images,
        isLoading
    }
}
