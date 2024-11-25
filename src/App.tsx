import React from "react";
import Tasks from "./Tasks/Tasks.tsx";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.mainBox}>
      <Tasks />
    </div>
  );
}
export default App;
