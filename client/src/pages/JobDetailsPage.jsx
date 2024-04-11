import React from "react";
import JobDetails from "../components/JobDetails";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const JobDetailsPage = () => {
  const [jobData, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  //get the Job Id
  let { JobId } = useParams();
  JobId = Number(JobId);

  useEffect(() => {
    //console.log("useEffect called");
    const fetchJob = async () => {
      try {
        //console.log("API===>", `/api/jobs/${JobId}`);

        const res = await fetch(`http://localhost:3000/jobs/${JobId}`);
        const data = await res.json();
        //console.log("data===>", data);

        setJob(data);
      } catch (error) {
        ///console.log("catch");
        console.log("Error fetching data...", error);
      }
    };
    fetchJob();
  }, [loading]);

  return <JobDetails job={jobData} />;
};

export default JobDetailsPage;
