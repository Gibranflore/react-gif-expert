import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/components/hooks/useFetchGifs";

jest.mock('../../src/components/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Night'

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue( { 
            images: [],
            isLoading: true
         } );

        render( <GifGrid category={ category }/>)
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

     });

     test('Debe de mostar items cuando se cargen las imagen useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Night',
                url: 'https//localhost/Night.jpg'

            },
            {
                id: 'ABC',
                title: 'Night',
                url: 'https//localhost/Night.jpg'

            },
        ]

        useFetchGifs.mockReturnValue( { 
            images: gifs,
            isLoading: false
         } );

        render( <GifGrid category={ category }/>)
        
        expect( screen.getAllByRole( 'iamg' ).length ).toBe(2)

      });
 });