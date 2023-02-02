import react, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import OrderFormContext from "../context/OrderFormContext";
import { useRouter } from "next/router";
import { getOrderPayData } from '../redux/features/orderPayData';
import Cookies from 'universal-cookie';
const ConfirmOrderForm = () => {
  const router = useRouter();
  const [words, setWords] = useState();
  const [time, setTime] = useState();
  const [newDateString, setNewDateString] = useState();
  const { formData, secondFormData, estimatedPrice} = useContext(OrderFormContext);
  console.log(formData);
  console.log(secondFormData);

  const dispatch=useDispatch()

  useEffect(() => {
    if (formData?.line_spacing === "Double") {
      setWords(500);
    } else if (formData?.line_spacing === "Single") {
      setWords(275);
    }
  }, [formData?.line_spacing]);

  useEffect(() => {
     setTime(JSON.parse(formData?.time_js).toString());
  }, [formData?.time_js]);


  const cookies = new Cookies();
  const token = cookies.get('userrefreshToken');
  const line = cookies.get('Line_spacing');


    const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(getOrderPayData({...formData,...secondFormData}));

    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append('Content-Type', 'application/json');



    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        ...formData,...secondFormData,
        dispute: false,
        late: false,
        line_spacing: line,
      }),
    };

    fetch('https://backend420.linnric.com/api/v1/create_order', requestOptions)
      .then((response) => response.json())
      .then((result) =>
          result.statusCode === 200 ? router.push('/customer/active') : '',
      )
      .catch((error) => console.log('error', error));
    
    router.push('/customer/payment');
  };


  return (
    <div className="mx-auto my-11 max-w-full shadow-lg bg-white dark:bg-[#273142] ">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6 dark:bg-[#273142] ">
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
                <div className="my-5">
                  <h1 className="text-md text-gray-400  ">Assignment Topic</h1>
                  <p className="text-xl mb-4 text-white font-semibold">
                    {secondFormData?.assigment_topic}
                  </p>
                  <hr style={{ borderColor: "grey" }} />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex items-center my-2">
                    <span className="text-center text-md pr-4 text-gray-400 ">
                      Pages/Words
                    </span>
                    <span className="text-center text-white font-semibold">
                      {`${formData?.pages} Pages/ ${words} words (${formData?.line_spacing} Spacing) `}
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <span className="text-center text-md pr-4 text-gray-400 ">
                      Service
                    </span>
                    <span className="text-center text-white font-semibold">
                      {formData?.assignment_details}
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <span className="text-center text-md pr-4 text-gray-400 ">
                      Education Level
                    </span>
                    <span className="text-center text-white font-semibold">
                      {formData?.education}
                    </span>
                  </div>
                  <div className="flex items-center my-2">
                    <span className="text-center text-md pr-4 text-gray-400 ">
                      Your Deadline
                    </span>
                    <span className="text-center text-white font-semibold">
                      {`${formData?.deadline?.toDateString() + " " + time}`}
                    </span>
                  </div>
                  <hr style={{ borderColor: "grey", marginTop: 10 }} />
                  <div className="flex items-center w-full justify-between">
                    <div></div>
                    <div>
                    <span className="text-center text-md pr-4 text-gray-400 ">
                      Estimated Price
                    </span>
                    <span className="text-center text-white font-semibold">
                      {estimatedPrice}
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-[#273142] px-4 py-3 text-right sm:px-6 w-full ">
              <button
                onClick={(e) => submitHandler(e)}
                type="submit"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#198754]  py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#198754] focus:ring-offset-2"
              >
                Confirm amd Place order
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderForm;
