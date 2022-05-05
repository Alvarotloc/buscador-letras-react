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
    const [isCargando, setIsCargando] = useState(false);

    const busquedaLetra = async(busqueda:IBusqueda) => {
        setIsCargando(true);
        try {
            const {artista,cancion} = busqueda;
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            const {data} = await axios(url);
            setLetra(data.lyrics);
            setIsCargando(false);
            setAlerta('');
        } catch (error) {
            setAlerta('Canción No Encontrada')
        }
    }
    return (
        <LetrasContext.Provider value={{
            alerta,
            setAlerta,
            busquedaLetra,
            letra,
            isCargando
        }}>
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}
export default LetrasContext