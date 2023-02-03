import React, { useState, useEffect ,useContext} from "react";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import DraftForm from "../../components/DraftForm";
import Cookies from "universal-cookie";
import OrderFormProgressBar from "../../components/OrderFormProgressBar";
import { GiCheckMark } from "react-icons/gi";
import { nanoid } from "nanoid";
import OrderFormContext from"../../context/OrderFormContext"
const generateID = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
};
const Draftorder = () => {
  const cookies = new Cookies();

  const router = useRouter();

  const{randomID, setRandomID}=useContext(OrderFormContext)

  useEffect(() => {
    if (!randomID) {
      const number = generateID(6);
      setRandomID(number)
    }
  }, [randomID]);

  return (
    <>
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-4">
        <div className="flex flex-col md:flex-row ">
          <div class="hidden md:block w-full md:w-1/5 px-2 py-4 ">
            <div className="mt-[50%]">
              <OrderFormProgressBar
                title="Order Requirements"
                subtitle="Fill in your order requirements"
                backgroundcolor="#4BB543"
                bordercolor="#4BB543"
                color="#fff"
              >
                <GiCheckMark />
              </OrderFormProgressBar>
              <OrderFormProgressBar
                title="Order details"
                subtitle="Add your order details"
                backgroundcolor="#1560bd"
                bordercolor="#1560bd"
                color="#b5b1b1"
              >
                2
              </OrderFormProgressBar>
            </div>
          </div>

          <div className="w-full md:w-3/5 px-2 py-4">
            <div className="mx-auto w-full my-8   flex justify-between">
              <h1 className="text-2xl md:text-5xl font-bold">Order {randomID}</h1>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/writer/availableorders");
                  cookies.remove("orderPrice", { path: "/" });
                  cookies.remove("Line_spacing", { path: "/" });
                }}
                className="bg-white dark:bg-[#273142] w-10 h-10 flex items-center justify-center rounded border-spacing-10 shadow-lg text-lg "
              >
                <AiOutlineClose />
              </button>
            </div>
            <DraftForm />
          </div>
          <div class="hidden md:flex md:w-1/5 px-2 py-4 "></div>
        </div>
      </div>
    </>
  );
};

export default Draftorder;
