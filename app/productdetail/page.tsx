"use client";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { IoMdCart } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import data from "../components/projectData";
const page = ({ params }) => {
  console.log(params);

  const [item, setItem] = useState(null);
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  useEffect(() => {
    data.map((itm) => {
      if (itm.id.toString() == search) {
        setItem(itm);
      }
    });
  }, [search]);

  return (
    <>
      <div className="mt-24 mb-6 ml-4 sm:ml-0">
        <div className="flex justify-center ">
          <p className="text-red-600 text-3xl">Item Details</p>
        </div>

        <div className=" grid grid-cols  sm:flex justify-center  mt-6">
          <div className="w-[150px]  sm:flex justify-center items-center ">
            <img
              className="flex justify-center  ml-24 sm:ml-0"
              src={item?.src}
              alt="img"
            />
          </div>
          <div className="ml-5 mt-2 ">
            <p className="mt-5">
              <strong>Title :</strong> {item?.title}
              T-Shirts
            </p>

            <p className="mt-3 line-clamp-1 w-[350px]">
              <strong>Discription :</strong>
              {item?.description}
            </p>

            <p className="mt-3">
              <strong>qty :</strong>
              {item?.qty}
            </p>

            <p className="mt-3 ">
              <strong>Price : </strong>${item?.price}
            </p>
            <div className="flex gap-8 mt-6 justify-center sm:mt-16">
              <button className="bg-blue-600 text-white rounded w-[30%] sm:p-2">
                Add To Cart{" "}
              </button>
              <button className="bg-blue-600 text-white rounded w-[30%] p-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
