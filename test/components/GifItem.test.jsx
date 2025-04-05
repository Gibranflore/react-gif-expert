

import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Prueblas en GifItem', () => { 

    const title = 'Earth';
    const url = 'https://earth.com/live.jpg'


    test('Debe hacer match con el snapshot', () => { 

        const { container } = render ( <GifItem title={title} url={ url } /> )
        expect(container).toMatchSnapshot();

    });

    test('Debe mostrar el url y el ALT indicado', () => {

        //expect( screen.getByRole('img').alt ).toBe( title + "!" );
        //expect( screen.getByRole('img').rsc ).toBe( url );
        render ( <GifItem title={title} url={ url } /> )

        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('Debe de mostrar el titulo en el componente', () => { 
        render ( <GifItem title={title} url={ url } /> )
        expect( screen.getByText(title) ).toBeTruthy(); //En el screen ver si existe
    })
}); 