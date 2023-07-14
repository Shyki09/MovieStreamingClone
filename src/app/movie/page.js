import React from "react";
import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";

const Movie = async () => {
  await new Promise((res) => setTimeout(res, 2000));

  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "59466ded02mshbe14a5d5a512292p13b772jsnd2d7ad9e56bc",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  console.log(data);

  return (
    <>
      <section className={styles.moviesSection}>
        <div className={styles.container}>
          <h1>Series and Movies</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Movie;
