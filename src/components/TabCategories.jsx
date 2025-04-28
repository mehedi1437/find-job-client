import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";

const TabCategories = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`,{withCredentials: true});
      setJobs(data);
    };
    getData();
  }, []);
  const [activeTab, setActiveTab] = useState("Web Development");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <div className="">
        <div className="text-2xl  text-indi font-bold text-center my-10 ">
          Brows Jobs By Category
        </div>

        <div className="    text-white flex justify-center items-center lg:gap-2 gap-2  mb-10 mx-4">
          <button
            onClick={() => handleTabClick("Web Development")}
            className={
              activeTab == "Web Development"
                ? "bg-indi lg:p-3 p-1"
                : "bg-white lg:p-3 p-1 text-black"
            }
          >
            Web Development
          </button>
          <button
            onClick={() => handleTabClick("Graphics Design")}
            className={
              activeTab == "Graphics Design"
                ? "bg-indi lg:p-3 p-1"
                : "bg-white lg:p-3 p-1 text-black"
            }
          >
            Graphics Design
          </button>
          <button
            onClick={() => handleTabClick("Digital Marketing")}
            className={
              activeTab == "Digital Marketing"
                ? "bg-indi lg:p-3 p-1 "
                : "bg-white lg:p-3 p-1 text-black"
            }
          >
            Digital Marketing
          </button>
        </div>
        {/* Job Card */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-5 mx-3 xl:mx-2 lg:mx-10 my-10">
          {jobs
            ?.filter((job) => job.category === activeTab)
            ?.map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
        </div>
      </div>
    </>
  );
};

export default TabCategories;
