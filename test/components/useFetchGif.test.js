import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/components/hooks/useFetchGifs";


describe('Prueba en el hool useFetchGifs', () => {


    test('Debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('Gumball') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

     });

     test('Debe de retornar un arreglo de imagenes y isLoading en false', async () => {

        const { result } = renderHook( () => useFetchGifs('Gumball') );

        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();


    });
});