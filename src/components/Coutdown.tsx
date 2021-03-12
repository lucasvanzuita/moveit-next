import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/Coutdown.module.css";

export function Coutdown() {
  const {
    minutos,
    seconds,
    hasFinished,
    isActive,
    startCountdonw,
    resetCountdonw,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutos).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.coutdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdonw}
            >
              {/* {isActive ? "Abandonar ciclo" : "Iniciar um cilco"} Mudaria o nome do button após o click*/}
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdonw}
            >
              Iniciar um cilco
            </button>
          )}
        </>
      )}
    </div>
  );
}
