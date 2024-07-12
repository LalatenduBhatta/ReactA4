import { createContext, useContext, useState } from "react";

const countContext = createContext()

function CountcontextAPI({ children }) {
    const [count, setCount] = useState(0)
    return (
        <>
            <countContext.Provider
                value={{ count, setCount }}>
                {children}
            </countContext.Provider>
        </>
    )
}

export function useCount() {
    return useContext(countContext)
}

export default CountcontextAPI