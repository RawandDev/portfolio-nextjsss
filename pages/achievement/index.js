import React from "react";
import data from "../../utils/data.json";
import Link from "next/link";

function Achievements() {
  return (
    <div>
      {data?.map((item, index) => {
        return (
          <Link href={`achievement/${item?.id}`} key={index}>
            <a>
              <div className="max-w-md relative pb-10 mb-10 cursor-pointer shadow-xl rounded-lg dark:hover:bg-gray-800 hover:bg-gray-100 transition-all duration- overflow-visible">
                <svg
                  width="42"
                  height="400"
                  viewBox="0 0 43 629"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -left-10 overflow-visible"
                >
                  <rect x="20" y="43" width="4" height="1034" fill="#ff5da2" />
                  <circle
                    cx="21.5"
                    cy="21.5"
                    r="20"
                    fill="#fff"
                    stroke="#FF5DA2"
                    strokeWidth="3"
                  />
                  <circle cx="21.5" cy="21.5" r="13.5" fill="#FF5DA2" />
                </svg>
                <span className="font-semibold">{item?.date}: </span>
                <span>{item?.brief}</span>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default Achievements;
