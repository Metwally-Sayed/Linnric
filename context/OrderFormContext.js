import { createContext, useState,useEffect } from 'react'
const OrderFormContext = createContext({})
export const OrderFormContextProvider = ({ children }) => {
    const [estimatedPrice, setEstimatedPrice] = useState(0);
    const [formData, setFormData] = useState({});//data from neworderpage
    const [secondFormData, setSecondFormData] = useState({});
    const [randomID, setRandomID] = useState(null); //for random number in next page
    return (
        <OrderFormContext.Provider value={{estimatedPrice, setEstimatedPrice,randomID, setRandomID,formData, setFormData ,secondFormData, setSecondFormData}}>
            {children}
        </OrderFormContext.Provider>
    )
}
export default OrderFormContext