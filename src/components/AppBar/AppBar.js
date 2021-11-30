import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Toggle from "../Toggle/Toggle";
import styles from './AppBar.module.css'
import { useState } from "react";

export default function AppBar({ navItems, logoImg, minimized=false }) {
  const [isMinimized, setIsMinimized] = useState(minimized)
  const toggle=()=>setIsMinimized((state)=>!state)
  return (
    <div className={`${styles.appBar} ${isMinimized?styles.minimized:''}`}>
      <div className={styles.logoThumb}>
        <Logo imageUrl={logoImg} />
      </div>

      <div className={styles.content}>
        <Toggle reversed={isMinimized} onClick={ toggle}/>
        <Navigation items={navItems} />
      </div>
    </div>
  );
}
