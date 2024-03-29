"use client";
import { TodoContext, useTodoContext } from "@/contexts/TodoContext";
import { useContext, useEffect, useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { DLT } from "@/redux/actions/Action";
import Add from "@/redux/actions/Action";
import REMOVE from "@/redux/actions/Action";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearch(!search);
  };

  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartReducer.carts);
  // console.log(getdata);

  let { count } = useContext(TodoContext);

  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(Add(e));
  };

  const del = (id) => {
    dispatch(DLT(id));
  };

  // remove one function
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
  // code for  cart copen
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // code for cRT OPEN CLOSED
  return (
    <div
      className=" flex flex-flow-row  bg-blue-600 gap-8 items-center md:px-24  px-4 py-2 
      fixed top-0 right-0 left-0 md:justify-around  sm:justify-around max-[600px]:justify-center p-3   "
    >
      <div className="flex flex-row ">
        <button
          onClick={toggleMenu}
          className="sm:hidden block fixed z-10 top-3 left-3 bg-blue-600 p-2 rounded-md text-white focus:outline-none "
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            onClick={toggleMenu}
            className="overlay fixed top-0 left-0 w-full h-full opacity-50 z-50"
          ></div>
        )}
        <div
          className={`menu fixed z-50 top-0 left-0 w-2/3 h-full bg-white shadow-lg transform mt-14 transition-transform ease-in-out duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:w-1/3`}
        >
          <button
            onClick={toggleMenu}
            className="close-btn absolute top-1 right-1 cursor-pointer"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-row justify-start ml-4">
            <Link href="/">
              <FaShippingFast className="text-6xl cursor-pointer  text-blue-600  " />
            </Link>

            <div className="">
              <p className=" mt-4 ml-1 font-bold w-[100px] text-blue-600">
                Apna Store
              </p>
            </div>
          </div>
          <ul className="mt-10 text-center">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* hamberger and their menu closed */}
      <div className="flex flex-row items-center gap-0   ">
        <Link href="/">
          <FaShippingFast className="text-white text-6xl cursor-pointer sm:block hidden " />
        </Link>

        <div className="">
          <p className="text-white  text-center font-bold w-[100px] sm:block hidden ">
            Apna Store
          </p>
        </div>
      </div>
      <div className="flex flex-1 max-[639px]:hidden sm:block  ">
        <div className="flex  px-3 py-1 bg-white rounded-sm items-center flex-row gap-4 xl:w-[70%] lg:w-[70%] sm:w-[100%] ">
          <input
            className="rounded  md:w-[100%] px-3 py-1 max-[575px]:w-36   "
            type="text"
            placeholder="Search for Products.."
          />
          <IoSearchSharp className="text-2xl text-blue-600  " />
        </div>
      </div>
      {/* chat search bar */}
      <div className="relative sm:hidden h-10 flex flex-1">
        <input
          type="text"
          className={`${
            search ? "block" : "hidden"
          }  w-[100%]  border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
          placeholder=" Search..."
        />
        <button
          onClick={toggleSearch}
          className=" absolute inset-y-0 right-0 pr-3s   "
        >
          {search ? (
            <svg
              className="h-5 w-5 text-gray-400   "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <IoSearchSharp className="text-white text-2xl" />
          )}
        </button>
      </div>
      <div className=" flex min-[400px]:relative ">
        {" "}
        <Link href="/carddetails">
          <FaCartPlus
            className="text-white text-2xl cursor-pointer  "
            // id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          ></FaCartPlus>{" "}
        </Link>
        <div />
        <span className="bg-red-600 text-center  h-5 w-5 text-sm mt-2  relative right-0.5 text-white rounded-full ">
          <div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {getdata.length ? (
                <div className=" w-26 p-10 flex justify-center items-center">
                  <Table>
                    <thead>
                      <tr>
                        <th className="flex text-center text-red-400 text-2xl mb-5 relative left-24 	">
                          CART DETAILS
                        </th>
                      </tr>
                    </thead>
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
                                  <strong>Title :</strong> {e.title}
                                </p>
                                <p>
                                  {" "}
                                  <strong>Price : </strong>$
                                  {e.price.toFixed(2) * e.qty}
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
                                  className="text-red-600 cursor-pointer text-2xl"
                                  onClick={() => del(e.id)}
                                />
                              </td>
                            </tr>
                          </>
                        );
                      })}
                      <p className="flex  mt-5 relative left-60 ">
                        <strong className="text-2xl text-red-400 ">
                          Total :
                        </strong>
                        <span className="text-2xl">$ {price.toFixed(2)}</span>
                      </p>
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div className="card_details  justify-center items-center	w-[240px] p-10 relative">
                  <RxCross2
                    onClick={handleClose}
                    className="fas fa-close smallclose  absolute top-2 ml-40 text-3xl cursor-pointer active:text-red-500"
                  />

                  <p className="text-1xl relative bottom-7">
                    Your cart is empty
                  </p>
                  <img
                    className="w-30"
                    src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
                  />
                </div>
              )}
            </Menu>
          </div>
          {/* <h1>{count}</h1> */}
          {getdata.length >= 1 ? (
            <h1>{getdata.length}</h1>
          ) : (
            <p className="bg-blue-600 text-blue-600">.</p>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
