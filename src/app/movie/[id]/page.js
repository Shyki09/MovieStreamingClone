import React from "react";
import Image from "next/image";
import styles from "@/app/styles/common.module.css";

const Page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "59466ded02mshbe14a5d5a512292p13b772jsnd2d7ad9e56bc",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;
  return (
    <div className={styles.conatianer}>
      <h2 className={styles.movie_title}>
        Flix \ <span>{main_data.type}</span>
      </h2>
      <div className={styles.card_section}>
        <div>
          <Image
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={600}
            height={300}
          />
        </div>

        <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};
export default Page;
