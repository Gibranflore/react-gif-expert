import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory/>', () => { 

    test('Debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => {} } /> ); //Se crea sujeto de pruebas
        const input = screen.getByRole('textbox'); //Extraemos el input llamada directa con el getbyrole

        fireEvent.input( input, { target: { value: 'Travel' }} ); //Disparamos el evento

        expect(input.value ).toBe('Travel'); //la Asercion lo que esperamos

     })

     test('Debe de llamar onNewCategory si el input tiene valor', () => {

        const inputValue = 'Travel';// simular que yo lo yo escribo
        const  onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> ); //El valor que voy a evaluar

        const input = screen.getByRole('textbox'); //importo referencias al input y al form
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }} ); // Disparo el primer evonto del formualrio
        fireEvent.submit( form )

        expect( input.value ).toBe('')
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );//Este valor si hace que sea llamada con las caja de texto
        
      });

      test('No debe de llamar el onNewCategory si el input esta vacio', () => {

        const inputValue = '';
        const  onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form )

        expect( input.value ).toBe('')
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        //expect( onNewCategory ).not.toHaveBeenCalled();

       })

 });