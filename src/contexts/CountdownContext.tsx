import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData{
    minutos: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountdonw: () => void,
    resetCountdonw: () => void,
}

interface CountdownProviderProps {
    children: ReactNode;
  }

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProviderProps){
    const { startNewChallenge } = useContext(ChallengesContext);

    let coutdownTimeout: NodeJS.Timeout;

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
  
    const minutos = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdonw() {
        setIsActive(true);
      }
    
      function resetCountdonw() {
        clearTimeout(coutdownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(25 * 60);
      }
    
      useEffect(() => {
        if (isActive && time > 0) {
          coutdownTimeout = setTimeout(() => {
            setTime(time - 1);
          }, 1000);
        } else if (isActive && time === 0) {
          setHasFinished(true);
          setIsActive(false);
          startNewChallenge();
        }
      }, [isActive, time]);

    return (
        <CountdownContext.Provider value={{
            minutos,
            seconds,
            hasFinished,
            isActive,
            startCountdonw,
            resetCountdonw,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}