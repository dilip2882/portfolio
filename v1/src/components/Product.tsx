"use client";
import { Product } from "@/types/products";
import Image from "next/image";
import React, { useState } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion } from "framer-motion";

export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState(product.thumbnail);
  return (
    <div>
      <div className="flex lg:flex-row justify-between items-center flex-col">
        <Heading className="font-black mb-2 pb-1"> {product.title}</Heading>
        <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Paragraph className="max-w-xl mb-10">{product.description}</Paragraph>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={activeImage}
        className="relative w-full flex items-center justify-center" 
      >
        <Image
          src={activeImage} 
          alt="thumbnail"
          height="1000"
          width="1000"
          className="max-h-[350px] w-auto rounded-md object-contain"
        />
        <div className="absolute bottom-0 bg-white h-7 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>
      <div className="flex flex-row justify-center my-8 flex-wrap"> 
        {product.images.map((image, idx) => (
          <button
            title="product thumbnail"
            onClick={() => setActiveImage(image)}
            key={`image-thumbnail-${idx}`}
          >
            <Image
              src={image}
              alt="product thumbnail"
              height="1000"
              width="1000"
              className="max-h-[150px] w-auto object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
            />
          </button>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-bold">Project Overview</h2>
        <div className="prose prose-sm md:prose-base max-w-none text-neutral-600">
          {product?.content}
        </div>
        <a
          href={product.href}
          target="__blank"
          className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
        >
          {product.live ? "Live Preview" : "Go To Source" }
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"  
            stroke-linecap="round"
            stroke-linejoin="round"
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
          >
            <path d="M5 12l14 0"></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
