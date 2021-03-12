import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/69971157?s=400&u=c6bab2988a2e8bfd5f63dffadaf54ae1f34df7e8&v=4"
        alt="Lucas Vanzuita"
      />
      <div>
        <strong>Lucas Vanzuita</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          level { level }
        </p>
      </div>
    </div>
  );
}
