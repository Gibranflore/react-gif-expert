import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => { //Todo esto es la logica del formulario captura lo que escribimos
        event.preventDefault();
        if (inputValue.trim().length <=1) return; //El if llama al usatate.trim y que tenga almentos mas de un caracter

        //setCategories(categories=> [ inputValue, ...categories ]);
        onNewCategory(inputValue.trim())//El trim ayuda a verificar lose espacios adelante y atras
        setInputValue(''); //esto ayuda una vez que demos enter borre el formulario
    }

  return (
    <form onSubmit={(event)=> onSubmit(event)}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
    )
}
/* El return tien un formulario form que guarda un onSubmit
"on" se refirere que esta llamdo algo, en este caso un event "event"
es un funcion que esta llamndo en este caso el onSubmit */
