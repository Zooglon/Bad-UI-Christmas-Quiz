import Image from "next/image";
import styles from "./page.module.css";

const Logo = () => (
  <div>
    <a href="/" target="_blank" rel="noopener noreferrer">
      By{" "}
      <Image
        src="/assets/osLogo.png"
        alt="Outserve Logo"
        className={styles.vercelLogo}
        width={100}
        height={50}
        priority
      />
    </a>
  </div>
);
