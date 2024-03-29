"use client";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { DLT } from "@/redux/actions/Action";
import Add from "@/redux/actions/Action";
import REMOVE from "@/redux/actions/Action";
import { Table } from "react-bootstrap";
import Link from "next/link";
import { FaAngleDoubleLeft } from "react-icons/fa";

const CardDetails = () => {
  const getdata = useSelector((state) => state.cartReducer.carts);

  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);

  const send = (e) => {
    // console.log(e);
    dispatch(Add(e));
  };

  const del = (id) => {
    dispatch(DLT(id));
  };
  const remove = (it) => {
    dispatch(REMOVE(it));
  };
  const total = () => {
    let price = 0;
    getdata.map((elem, k) => {
      price = elem.price * elem.qty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);
  return (
    <>
      <div className="flex justify-center mt-20  ">
        {getdata.length ? (
          <div className="sm:flex justify-center w-[70%] shadow border ">
            <Table>
              <div className="flex justify-center text-red-600 text-2xl  mt-10 "></div>
              <tbody>
                {getdata.map((e) => {
                  return (
                    <>
                      <tr className=" cursor-pointer">
                        <td>
                          <img
                            className="h-24 w-32  cursor-pointer mt-5"
                            src={e.src}
                          />
                        </td>
                        <td>
                          <p>
                            {" "}
                            <strong className="mt-1">Title :</strong> {e.title}
                          </p>
                          <p>
                            {" "}
                            <strong>Price : </strong>$
                            {(e.price.toFixed(2) * e.qty).toFixed(2)}{" "}
                          </p>
                          <div className="flex ">
                            <strong className="">Quantity : </strong>
                            <div className="ml-20 rounded text-1xl justify-around flex gap-3 bg-slate-500 w-20">
                              <span onClick={() => send(e)}>+</span>
                              <span>{e.qty}</span>
                              <span onClick={() => remove(e.it)}>-</span>
                            </div>
                          </div>
                        </td>

                        <td>
                          <FaTrashAlt
                            className="text-red-600 cursor-pointer text-2xl mt-10"
                            onClick={() => del(e.id)}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
                <p className="flex  mt-5 relative left-60 ">
                  <strong className="text-2xl text-red-400 ">Total :</strong>
                  <span className="text-2xl ml-1">${price.toFixed(2)}</span>
                </p>
              </tbody>
            </Table>
          </div>
        ) : (
          <div className="mt-12 ">
            {" "}
            <img
              className="w-[30rem]"
              src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
            />
            {/* <h1 className="text-red-600 text-2xl">Your Cart Is Empty</h1> */}
            <Link href="/">
              <p className="flex justify-center underline text-blue-600">
                {" "}
                <FaAngleDoubleLeft
                  className="mr-2 mt-1
                "
                />
                <span> Go to Home Page</span>
              </p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CardDetails;
