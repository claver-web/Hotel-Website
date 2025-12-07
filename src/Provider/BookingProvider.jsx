// import { BookingDetailsContext } from "../context/BookingContext";
import { createContext, useState } from "react";

export const BookingDetailsContext = createContext();

export default function BookingProvider({children}){

    const [BookingDetails, setBookingDetails] = useState(
        {
        checkIn: "",
        checkOut: "",
        guests: 1,
        roomType: "Deluxe",
        }
    )
    
    return (
        <BookingDetailsContext.Provider value={{BookingDetails, setBookingDetails}}>
            {children}
        </BookingDetailsContext.Provider>
    )

}