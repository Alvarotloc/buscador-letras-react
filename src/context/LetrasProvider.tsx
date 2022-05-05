import { createContext, useState } from 'react';

const LetrasContext = createContext<any>({});
type IChildren = {
    children : JSX.Element
}

const LetrasProvider = ({children}:IChildren) => {
    return (
        <LetrasContext.Provider value={{}}>
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}
export default LetrasContext