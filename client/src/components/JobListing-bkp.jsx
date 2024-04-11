import React from "react";
import { useEffect, useState } from "react";
import jobsData from "../jobs.json";
import JobSigleListing from "./JobSigleListing";
import Spinner from "./Spinner";

const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      //const apiUrl = isHome ? "http://localhost:8000/app/v1/jobs" : "http://localhost:8000/app/v1/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
        console.log("Jobs===>", jobs);
      } catch (error) {
        console.log("Error fetching data...", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  // const jobs = jobsData.jobs;
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Browse Jobs" : "All Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobSigleListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListing;
