import React, { createContext } from 'react'



export const ProductContext = createContext();


const productContext = ({ children }) => {


    return (
        <div>
            <ProductContext.Provider value={{}}>
                {children}
            </ProductContext.Provider>
        </div>
    )
}

export default productContext
