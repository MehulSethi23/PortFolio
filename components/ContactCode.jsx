import styles from "../styles/ContactCode.module.css";

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{" "}
        <a href="mailto:swagsy2000@gmail.com" target="_blank" rel="noopener">
          swagsy2000@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{" "}
        <a
          href="https://github.com/MehulSethi23"
          target="_blank"
          rel="noopener"
        >
          MehulSethi23
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{" "}
        <a
          href="https://www.linkedin.com/in/mehul-sethi-6a2a301a8/"
          target="_blank"
          rel="noopener"
        >
          Mehul Sethi
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{" "}
        <a
          href="https://www.instagram.com/_swagsy/"
          target="_blank"
          rel="noopener"
        >
          _swagsy
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;facebook:{" "}
        <a
          href="https://www.facebook.com/profile.php?id=100007072412427"
          target="_blank"
          rel="noopener"
        >
          Mehul
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;codeforces:{" "}
        <a
          href="https://codeforces.com/profile/swagsy"
          target="_blank"
          rel="noopener"
        >
          swagsy
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;codechef:{" "}
        <a
          href="https://www.codechef.com/users/mehul_23"
          target="_blank"
          rel="noopener"
        >
          mehul23
        </a>
        ;
      </p>

      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
