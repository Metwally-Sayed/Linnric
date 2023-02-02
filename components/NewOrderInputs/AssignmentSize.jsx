import React, { useState } from "react";
import { useEffect } from "react";
import Cookies from "universal-cookie";

const AssignmentSize = ({ assignmentDataCollecter, formData }) => {
  const cookies = new Cookies();

  const allCockies = cookies.getAll();

  const [pages, setPages] = useState();
  const [words, setWords] = useState("");
  const [space, setSpace] = useState("");

  useEffect(() => {
    if (space == "Single") {
      setWords("550");
      assignmentDataCollecter("words", "550");
    }
    if (space == "Double") {
      setWords("275");
      assignmentDataCollecter("words", "275");
    }
  }, [space]);

  return (
    <div className="bg-[#fcfcfc] dark:bg-[#2c374b] px-3 py-5 shadow-md">
      <p className="block text-lg font-medium md:text-lg dark:text-white text-gray-700">
        Assignment size:
      </p>
      <div className=" flex flex-col justify-center md:flex-row md:items-center ">
        <div className="flex flex-col  md:pr-12 w-full  md:w-[30%] ">
          <label className="text-gray-500 text-base  md:text-lg text-[0.55rem]  dark:text-white ">
            Pages:
          </label>
          <div>
            <input
              type="number"
              placeholder="Pages*"
              value={pages?.length > 0 ? pages : formData?.pages}
              className="w-full bg-[#F3F4F6] rounded-md border border-gray-300 dark:bg-[#33415a]  shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm "
              onChange={(e) => {
                setPages(e?.target?.value);
                assignmentDataCollecter("pages", e?.target?.value);
              }}
            />{" "}
          </div>
        </div>
        <div className=" flex flex-col  md:pr-12 my-2 md:my-0 w-full md:w-[30%]">
          {" "}
          <label className="  dark:text-white text-gray-500 text-base md:text-lg text-[0.45rem]">
            Words:
          </label>
          <input
            type="number"
            className="w-[full%]  bg-[#F3F4F6] rounded-md border border-gray-300  dark:bg-[#33415a]  shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
            placeholder="Words*"
            value={words}
            onChange={(e) => {
              setWords(e.target.value);
              assignmentDataCollecter("words", e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col  md:pr-12 my-2 md:my-0 w-full md:w-[30%]">
          {" "}
          <label className="  dark:text-white text-gray-500 text-base break-all whitespace-pre-line md:text-lg text-[0.65rem] m-0 p-0">
            Line spacing:
          </label>
          <select
            defaultValue={"default"}
            value={formData?.line_spacing}
            onChange={(e) => {
              cookies.set("Line_spacing", e.target.value);
              setSpace(e.target.value);
              assignmentDataCollecter("line_spacing", e.target.value);
            }}
            className="w-full bg-[#F3F4F6] rounded-md border border-gray-300  dark:bg-[#33415a] shadow-sm focus:border-[#367fd3] focus:outline-none focus:ring-1 focus:ring-[#367fd3] sm:text-sm"
          >
            <option value={"default"} className="text-white" disabled>
              Choose an option
            </option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AssignmentSize;
