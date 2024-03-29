"use client";
import data from "@/app/components/projectData";
import { TodoContext } from "@/contexts/TodoContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Menu from "@mui/material/Menu";
import "@/app/components/Cards.css";
import { useDispatch } from "react-redux";
import Add from "@/redux/actions/Action";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Cards = () => {
  let { setCount } = useContext(TodoContext);
  const addToCart = () => {
    setCount((pre) => pre + 1);
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (item) => {
    // Pass data to page2 using query parameters
    // router.push({
    //   pathname: "/productdetail",
    //   query: { data: item },
    // });
    router.push(`/productdetail?id=${item.id}`, { data: item });
  };
  const send = (e) => {
    // console.log(e);
    dispatch(Add(e));
  };
  return (
    <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 grid-flow-row  px-5  auto-rows-max mt-5 justify-center items-center">
      {data.map((item) => {
        return (
          <div
            className="m-2 
           bg-white border shadow p-3  "
          >
            {" "}
            <div
              className="flex justify-center "
              onClick={() => handleClick(item)}
            >
              {/* <Link href={`/productId/${product.id}`}> */}
              <Image
                className="mt-3 w-[50%] h-44 cursor-pointer  "
                src={item.src}
                width={150}
                height={100}
              />{" "}
              {/* </Link> */}
            </div>
            <div>
              <div className="line-clamp-1 mt-3">
                <p>
                  <strong>{item.title}</strong>
                </p>
                <p>ckpack, Fits 15 Laptops</p>
              </div>
              {/* product Description  */}
              <div className="line-clamp-1  ">
                <p className="text-gray-600">{item.description} </p>{" "}
                <p>
                  {" "}
                  walks in the forest. Stash your laptop (up to 15 inches) in
                  the padded sleeve, your everyday
                </p>
              </div>
              {/* Price Product */}
              <div className="mt-2 flex justify-center gap-16 ">
                <span className="font-bold mt-2">
                  Price:<span className="font-normal">${item.price} </span>
                </span>
                <button
                  id="basic-button"
                  onClick={() => send(item)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded w-[45%] "
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
