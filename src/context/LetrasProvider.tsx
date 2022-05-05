import { createContext, useState } from 'react';
import type { IBusqueda } from '../components/Formulario';
import axios from 'axios';

const LetrasContext = createContext<any>({});
type IChildren = {
    children : JSX.Element
}

const LetrasProvider = ({children}:IChildren) => {
    const [alerta, setAlerta] = useState('');
    const [letra, setLetra] = useState('');

    const busquedaLetra = async(busqueda:IBusqueda) => {
        try {
            const {artista,cancion} = busqueda;
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            const {data} = await axios(url);
            setAlerta(data.lyrics);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <LetrasContext.Provider value={{
            alerta,
            setAlerta,
            busquedaLetra,

        }}>
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}
export default LetrasContext