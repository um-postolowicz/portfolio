import { createContext } from "react";

const LanguageContext = createContext();
const { Consumer, Provider } = LanguageContext;

export { Consumer, Provider };
export default LanguageContext;
