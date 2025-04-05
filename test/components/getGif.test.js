import { getGifs } from "../../src/helpers/getGIf";

describe('pruebas es gerGifs()', () => { 

    test('debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('Earth');
        //console.log(gifs);
        expect( gifs.length ).toBeGreaterThan(0)
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })

     });
 });