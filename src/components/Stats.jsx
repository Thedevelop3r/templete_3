import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap justify-around sm:mb-20 mb-6`}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.id}
          className="flex flex-row-reverse justify-center items-center text-white"
        >
          <h4 className="mx-2 font-poppins font-normal xs:text-[26px] text-[20px] xs:leading-[26px] leading-[21px] text-gradient">
            {stat.title}
          </h4>

          <p
            className="font-poppins font-bold xs:text-[40px] text-[30px] xs:leading-[53px]
          leading-[43px]"
          >
            {stat.value}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
