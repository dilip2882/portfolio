import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const database = [
    {
      title: "SQlite",
      src: "/images/logos/sqlite.png",
      className: "h-10 w-14",
    },
    {
      title: "Firebase",
      src: "/images/logos/firebase.png",
      className: "h-10 w-14",
    },
  ]

  const programminLanguage = [
    {
      title: "Java",
      src: "/images/logos/java.png",
      className: "h-10 w-14",
    },
    {
      title: "Kotlin",
      src: "/images/logos/kotlin.png",
      className: "h-10 w-14",
    },
    {
      title: "Python",
      src: "/images/logos/python.png",
      className: "h-10 w-14",
    },
    {
      title: "Javascript",
      src: "/images/logos/js.png",
      className: "h-10 w-14",
    },
  ]

  return (
    <div className="mb-12">
      <div>
        <Heading
          as="h3"
          className="font-black text-2xl md:text-2xl lg:text-2xl mb-4"
        >
          Tech Stack
        </Heading>
      </div>
      <ol type="1" className="pl-4">
        <li>
          <Heading
            as="h3"
            className="font-black text-sm md:text-sm lg:text-sm my-4"
          >
            Programming Languages
          </Heading>
          <div className="flex flex-wrap">
            {programminLanguage.map((item) => (
              <Image
                src={item.src}
                key={item.src}
                width={`200`}
                height={`200`}
                alt={item.title}
                className={twMerge("object-contain mr-4 mb-4", item.className)}
              />
            ))}
          </div>
        </li>
        <li>
          <Heading
            as="h3"
            className="font-black text-sm md:text-sm lg:text-sm my-4"
          >
            Database Languages
          </Heading>
          <div className="flex flex-wrap">
            {database.map((item) => (
              <Image
                src={item.src}
                key={item.src}
                width={`200`}
                height={`200`}
                alt={item.title}
                className={twMerge("object-contain mr-4 mb-4", item.className)}
              />
            ))}
          </div>
        </li>
      </ol>
    </div>
  );
};
