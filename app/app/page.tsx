import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import GetData, { Data } from "./get_data";
import Card from "./components/card";

export default async function Page() {
  const data = await GetData();

  return (
    <>
      <div className="w-full grid h-full sm:place-items-center">
        <section className="max-w-2xl text-center shadow-2xl shadow-[#1125d4]/20 sm:rounded-3xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:rounded-xl z-20">
            <div className="bg-gradient-to-b from-[#7857ff] to-[#2e2be8] pt-4 pb-6 rounded-b-3xl sm:rounded-3xl justify-center items-center flex flex-col gap-4 px-12 text-white">
              <p className="text-[#c8c7ff] font-medium">Your Result</p>
              <div className="bg-gradient-to-b from-[#4e21ca] to-[#2421ca00] rounded-full w-48 h-48 flex justify-center items-center flex-col gap-2">
                <p className="font-extrabold text-6xl">76</p>
                <p className="text-[#c8c7ff] ">of 100</p>
              </div>
              <p className="font-bold text-2xl">Great</p>
              <p className="text-[#c8c7ff]">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>

            <div className="flex flex-col place-content-between sm:rounded-3xl px-4 py-4 gap-4">
              <h1 className="font-bold text-lg text-start">Summary</h1>
              {data.map((item, index) => {
                return (
                  <Card
                    key={index}
                    icon={item.icon}
                    score={item.score}
                    title={item.category}
                    bg={cardBg(item.category)}
                    color={cardColor(item.category)}
                  />
                );
              })}
              <button className="bg-[#303b5a]  hover:bg-blue-800 text-white rounded-3xl p-2 font-bold">
                Continue
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function cardBg(category: string) {
  switch (category) {
    case "Reaction":
      return "bg-[#ff5757]/10";
    case "Memory":
      return "bg-[#ffb01f]/10";
    case "Verbal":
      return "bg-[#00bd91]/10";
    case "Visual":
      return "bg-[#1125d4]/10";
    default:
      return "bg-[#ff5757]/10";
  }
}

function cardColor(category: string) {
  switch (category) {
    case "Reaction":
      return "text-[#ff5757]";
    case "Memory":
      return "text-[#ffb01f]";
    case "Verbal":
      return "text-[#00bd91]";
    case "Visual":
      return "text-[#1125d4]";
    default:
      return "text-[#ff5757]";
  }
}
