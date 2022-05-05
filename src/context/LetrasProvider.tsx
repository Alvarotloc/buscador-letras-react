import { createContext, useState } from 'react';

const LetrasContext = createContext<any>({});
type IChildren = {
    children : JSX.Element
}

const LetrasProvider = ({children}:IChildren) => {
    const [alerta, setAlerta] = useState('');
    return (
        <LetrasContext.Provider value={{
            alerta,
            setAlerta
        }}>
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}
export default LetrasContext