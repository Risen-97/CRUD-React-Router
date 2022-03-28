import { createContext, useContext, useState } from "react";
import DATA from "../db.json";

export const ContactContext = createContext();

const initState = { contactList: [...DATA], user: null };

export const ContactProvider = ({ children }) => {
  const [contact, setContact] = useState(initState);
  return (
    <ContactContext.Provider value={[contact, setContact]}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  return useContext(ContactContext);
};
