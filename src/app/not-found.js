import Link from "next/link";
import styles from "@/app/styles/common.module.css";

const NotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.error_page}>
        <div>
          <h1>404</h1>
          <h2>Not Found</h2>
          <p>Could not find requested input</p>
          <Link href="/">
            <button>Go to Home Page</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
