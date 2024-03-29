import React, { useState, useEffect, useContext } from "react";
import AssignmentTopic from "./NewOrderInputs/AssignmentTopic";
import SubjectInput from "./NewOrderInputs/SubjectInput";
import StyleInput from "./NewOrderInputs/StyleInput";
import { useSelector, useDispatch } from "react-redux";
import { postingOrderHandler } from "../utilities/apiFunctions";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { editingOrderHandler } from "../utilities/apiFunctions";
import { getOrderPrice } from "../utilities/apiFunctions";
import { getOrderPayData } from "../redux/features/orderPayData";
import axios from "axios";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import OrderFormContext from "../context/OrderFormContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cookies = new Cookies();
const token = cookies.get("userrefreshToken");

const DraftForm = ({ editOrderData }) => {
  const dispatch = useDispatch();

  const notify = () =>
    toast.error("Some fields are mising", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  let id = 0;
  Array.isArray(editOrderData)
    ? editOrderData.map((order) => {
        id = order.ID;
      })
    : null;

  const router = useRouter();
  const firstFormdata = useSelector((state) => state.assignmentData);

  const [docURL, setDocURL] = useState("");
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("");
  // const [cprice, setPrice] = useState(0);
  const [wPrice, setWPrice] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const { setSecondFormData, secondFormData } = useContext(OrderFormContext);

  const assignmentDataCollecter = (dataKey, data) => {
    setSecondFormData({ ...secondFormData, [dataKey]: data });
  };

  const endpoint = `https://backend420.linnric.com/api/v1/update_client_orders/${id}`;

  const AllFormData = { ...firstFormdata, ...secondFormData, price: +wPrice };
  // useEffect(() => {
  //   // setPrice(window.sessionStorage.getItem('orderPrice'));
  //   setPrice(cookies.get('orderPrice'));
  // }, [cprice]);

  useEffect(() => {
    setWPrice(window.sessionStorage.getItem("writerP"));
  }, [wPrice]);

  const orderPrice = {
    service: AllFormData.assignment_details,
    education: AllFormData.education,
    topic: AllFormData.assignent_type,
    pages: AllFormData.pages,
  };

  const NavigateToConfirm = (e) => {
    e.preventDefault();
    if (
      secondFormData?.assigment_topic &&
      secondFormData?.style &&
      secondFormData?.subject &&
      secondFormData?.instruction
    ) {
      router.push("/neworder/confirmOrder");
    } else {
      notify();
    }
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   dispatch(getOrderPayData(AllFormData));

  //   // const myHeaders = new Headers();
  //   // myHeaders.append('Authorization', `Bearer ${token}`);
  //   // myHeaders.append('Cookie', 'Cookie_1=value');

  //   // const requestOptions = {
  //   //   method: 'POST',
  //   //   headers: myHeaders,
  //   //   redirect: 'follow',
  //   // };

  //   // fetch(
  //   //   `https://backend420.linnric.com/api/v1/estimate_order_price?service=${AllFormData.assignment_details}&education=${AllFormData.assignmentEducationLevel}&topic=${AllFormData.assigment_type} Plan&pages=${AllFormData.pages}`,
  //   //   requestOptions,
  //   // )
  //   //   .then((response) => response.json())
  //   //   .then((result) =>
  //   //     sessionStorage.setItem('orderPrice', result.Total_price),
  //   //   )
  //   //   .catch((error) => console.log('error', error));

  //   router.push('/customer/payment');
  // };

  const editHandler = (e) => {
    e.preventDefault();
    editingOrderHandler(secondFormData, token, endpoint);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", "Cookie_1=value");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://backend420.linnric.com/api/v1/estimate_order_price?service=${AllFormData.assignment_details}&education=${AllFormData.assignmentEducationLevel}&topic=${AllFormData.assigment_type} Plan&pages=${AllFormData.pages}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        cookies.set("orderPrice", result.Total_price);
        sessionStorage.setItem("orderPrice", result.Total_price),
          router.push("/customer/active");
      })
      .catch((error) => console.log("error", error));
  };

  let filesLink = [];
  const changeHandler = (event) => {
    let headersList = {
      Accept: "*/*",

      Authorization: `Bearer ${token}`,
    };

    let bodyContent = new FormData();
    bodyContent.append("name", event.target.files[0].name);
    bodyContent.append("file", event.target.files[0]);

    setFileName(event.target.files[0].name);
    try {
      const sendData = async () => {
        const response = await fetch(
          "https://backend420.linnric.com/api/v1/upload",
          {
            method: "POST",
            body: bodyContent,
            headers: headersList,
          }
        );

        const data = await response.json();
        // const url = await data.publicURL;
        setFiles((prev) => {
          return [...prev, { field_id: data.publicURL }];
        });
        filesLink = [...filesLink, { field_id: data.publicURL }];
        assignmentDataCollecter("File", filesLink);
        return response;
      };
      sendData();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (
  //     (
  //       secondFormData?.assigment_topic &&
  //       secondFormData?.style &&
  //       secondFormData?.subject &&
  //       secondFormData?.instruction
  //     )?.length > 0
  //   ) {
  //     setDisabled(false);
  //   }
  // }, [
  //   secondFormData?.assigment_topic,
  //   secondFormData?.style,
  //   secondFormData?.subject,
  //   secondFormData?.instruction,
  // ]);

  const currentURL = router.pathname;

  return (
    <div className="mx-auto my-11 max-w-full shadow-lg bg-white dark:bg-[#273142] ">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={(e) => NavigateToConfirm(e)}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6 dark:bg-[#242d3d] ">
                  <div className=" px-4 py-3 text-left sm:px-6">
                    <button
                      onClick={() => router.back()}
                      type="submit"
                      className=" items-center inline-flex justify-center rounded-md border border-transparent bg-[#367fd3]  py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#367fd3] focus:ring-offset-2"
                    >
                      <IoIosArrowBack className="pr-1" size={18} />
                      Back
                    </button>
                  </div>
                  <div className=" bg-[#fcfcfc] dark:bg-[#2c374b] px-3 py-5 shadow-md my-5">
                    <AssignmentTopic
                      assignmentDataCollecter={assignmentDataCollecter}
                      formData={secondFormData}
                    />
                  </div>
                  <div className="bg-[#fcfcfc] dark:bg-[#2c374b] px-3 py-5 shadow-md grid grid-cols-6 gap-6 mt-4 ">
                    <StyleInput
                      formData={secondFormData}
                      assignmentDataCollecter={assignmentDataCollecter}
                    />
                    <SubjectInput
                      formData={secondFormData}
                      assignmentDataCollecter={assignmentDataCollecter}
                    />
                    {/* <SourcesInput /> */}
                  </div>
                  <div className="mt-4 bg-[#fcfcfc] dark:bg-[#2c374b] px-3 py-5 shadow-md">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-md bg-[#F3F4F6] border-gray-300 py-3 px-4 shadow-sm dark:bg-[#33415a] focus:border-[#367fd3] focus:ring-[#367fd3]"
                        defaultValue={""}
                        value={secondFormData?.instruction}
                        onChange={(e) => {
                          assignmentDataCollecter(
                            "instruction",
                            e.target.value
                          );
                        }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6 mt-4 bg-[#fcfcfc] dark:bg-[#2c374b] px-3 py-5 shadow-md">
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400  dark:text-white"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600 dark:text-white ">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md  font-medium text-[#367fd3] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#367fd3] focus-within:ring-offset-2 hover:text-[#629ada]"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={changeHandler}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        {fileName === "" ? (
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        ) : (
                          <p className="text-xs text-gray-500">{fileName} </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-[#273142] px-4 py-3 text-right sm:px-6 w-full ">
                  {
                    currentURL === "/customer/active/[id]" ? "" : null
                    // <div>
                    //   <p>{`Total Price : $${Math.round(cprice)}`}</p>
                    // </div>
                  }

                  {currentURL === "/customer/active/[id]" ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        editHandler(e);
                      }}
                      className="inline-flex rounded-md border border-transparent bg-[#367fd3]  py-2 px-4 text-sm font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-[#367fd3] focus:ring-offset-2"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={(e) => NavigateToConfirm(e)}
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#367fd3]  py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#367fd3] focus:ring-offset-2"
                    >
                      Next
                      <IoIosArrowForward />
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      </div>
    </div>
  );
};

export default DraftForm;
