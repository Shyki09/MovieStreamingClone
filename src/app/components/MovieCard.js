import React from "react";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";

const MovieCard = (curElem) => {
  const { id, type, title, synopsis } = curElem.jawSummary;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={curElem.jawSummary.backgroundImage.url}
            alt={title}
            width={280}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 18)}</h2>
          <p>{`${synopsis.substring(0, 66)} ...`}</p>
          <Link href={`/movie/${id}`}>
            <button>Play</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
