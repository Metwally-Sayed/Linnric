import React, { useEffect, useState } from 'react';
import AssignmentTypeInput from './NewOrderInputs/AssignmentTypeInput';
import AssignmentDetails from './NewOrderInputs/AssignmentDetails';
import AssignmentEducationLevel from './NewOrderInputs/AssignmentEducationLevel';
import AssignmentDeadline from './NewOrderInputs/AssignmentDeadline';
import AssignmentSize from './NewOrderInputs/AssignmentSize';
import { useDispatch } from 'react-redux';
import { getAssignmentData } from '../redux/features/assignmentData';
import { useRouter } from 'next/router';
import AssignmntQuestion from './NewOrderInputs/AssignmentQuestions';
import Cookies from 'universal-cookie';
const NewOrderFrom = () => {
  const cookies = new Cookies();
  const token = cookies.get('userrefreshToken');
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [formData, setFormData] = useState({});

  const assignmentDataCollecter = (dataKey, data) => {
    setFormData({ ...formData, [dataKey]: data });
  };

  const dispatch = useDispatch();
  const router = useRouter();
  console.log(formData)
  const EstimatePrice = async () => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    myHeaders.append('Cookie', 'Cookie_1=value');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };
    fetch(
      `https://backend420.linnric.com/api/v1/estimate_order_price?service=${formData.assignment_details}&education=${formData.assignmentEducationLevel}&topic=${formData.assigment_type}&pages=${formData.pages}&space=${formData.line_spacing}`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => {
        setEstimatedPrice(result?.Total_price)
        cookies.set('orderPrice', result.Total_price);
        sessionStorage.setItem('orderPrice', result.Total_price);
        sessionStorage.setItem('writerP', result.writers_price); //check if  writerP is spelled correctly
      })
      .catch((error) => console.log('error', error));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getAssignmentData(formData));
    router.push('/neworder/next');
  }

  useEffect(() => {
    EstimatePrice()
  }, [formData?.assignment_details,formData?.assignment_type, formData?.assignmenteducation, formData?.pages,formData?.line_spacing])

  return (
    <div className="mx-auto my-11 max-w-full shadow-lg bg-white dark:bg-[#273142] ">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6 dark:bg-[#273142] ">
                  <div className="grid grid-cols-6 gap-6 my-5">
                    <AssignmentTypeInput
                      assignmentDataCollecter={assignmentDataCollecter}
                    />
                  </div>
                  <div className="grid grid-cols-6 gap-6 mt-20 ">
                    <AssignmentDetails
                      assignmentDataCollecter={assignmentDataCollecter}
                    />
                    <AssignmentDeadline
                      assignmentDataCollecter={assignmentDataCollecter}
                    />
                    <AssignmentEducationLevel
                      assignmentDataCollecter={assignmentDataCollecter}
                    />
                  </div>
                  <div className="mt-20">
                    {formData?.assigment_type?.includes('Assignment') ? (
                      <AssignmntQuestion
                        assignmentDataCollecter={assignmentDataCollecter}
                      />
                    ) : (
                      <AssignmentSize
                        assignmentDataCollecter={assignmentDataCollecter}
                      />
                    )}
                  </div>
                </div>
                <div className=" flex justify-between items-center bg-gray-50 dark:bg-[#273142] px-4 py-3 text-right sm:px-6">
                  <div>
                    <p>{`Total Price : $${Math.round(estimatedPrice)}`}</p>
                  </div>
                  <button
                    onClick={submitHandler}
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[#367fd3]  py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#367fd3] focus:ring-offset-2"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrderFrom;
