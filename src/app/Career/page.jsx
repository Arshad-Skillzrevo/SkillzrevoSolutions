"use client";

import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false); // new state for pagination loading

  // Client-side state
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");

  const jobsPerPage = 5;

  // Fetch jobs on client-side
  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://lms.skillzrevo.com/wp-json/wp/v2/jobpost?per_page=50&_fields=id,title,excerpt,date,link,class_list"
        );
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchJobs();
  }, []);

  // Scroll to top and show skeleton loader whenever page changes
  useEffect(() => {
    if (!loading) {
      setPageLoading(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      // short timeout to show skeleton effect
      const timer = setTimeout(() => {
        setPageLoading(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [page, loading]);

  // Filtered jobs
  const filteredJobs = jobs.filter((job) => {
    const title = job.title.rendered.toLowerCase();
    const excerpt = job.excerpt.rendered.toLowerCase();
    const searchMatch =
      title.includes(search.toLowerCase()) ||
      excerpt.includes(search.toLowerCase());

    const locationMatch = locationFilter
      ? job.class_list.some((c) =>
          c.includes(`jobpost_location-${locationFilter}`)
        )
      : true;

    const typeMatch = jobTypeFilter
      ? job.class_list.some((c) =>
          c.includes(`jobpost_job_type-${jobTypeFilter}`)
        )
      : true;

    return searchMatch && locationMatch && typeMatch;
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const currentJobs = filteredJobs.slice(
    (page - 1) * jobsPerPage,
    page * jobsPerPage
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-5xl heading-oswald text-[#1d8fff] font-bold mb-6 text-center">
        Career
      </h1>

      {/* Search / Filter bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 text-gray-600">
        <input
          type="text"
          placeholder="Search by title or keywords"
          className="border rounded p-2 w-full md:w-1/3"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
        <select
          className="border rounded p-2 w-full md:w-1/3"
          value={locationFilter}
          onChange={(e) => {
            setLocationFilter(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Locations</option>
          <option value="bangalore-karnataka">Bangalore</option>
          <option value="gurgaon-haryana">Gurgaon</option>
          <option value="noida-uttar-pradesh">Noida</option>
          <option value="remote-online">Remote</option>
        </select>
        <select
          className="border rounded p-2 w-full md:w-1/3"
          value={jobTypeFilter}
          onChange={(e) => {
            setJobTypeFilter(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Job Types</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-Time</option>
          <option value="internship">Internship</option>
        </select>

      </div>

      {/* Job list */}
      {(loading || pageLoading) ? (
        // Skeleton loader
        <div className="space-y-4">
          {Array.from({ length: jobsPerPage }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse border rounded p-4 flex flex-col gap-2"
            >
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {currentJobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            <ul className="space-y-4">
              {currentJobs.map((job) => (
                <li
                  key={job.id}
                  className="border rounded p-4 hover:shadow transition"
                >
                  <h2 className="text-xl font-semibold mb-1">
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(job.title.rendered),
                      }}
                    />
                  </h2>

                  <div
                    className="text-gray-700 text-sm mb-2 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(job.excerpt.rendered),
                    }}
                  />

                  <div className="text-sm text-gray-500 flex flex-col gap-1">
                    <span>
                      Published: {new Date(job.date).toLocaleDateString()}
                    </span>
                    <span>
                      Category:{" "}
                      {job.class_list.find((c) =>
                        c.startsWith("jobpost_category-")
                      )?.replace("jobpost_category-", "N/A")}
                    </span>
                    <span>
                      Type:{" "}
                      {job.class_list.find((c) =>
                        c.startsWith("jobpost_job_type-")
                      )?.replace("jobpost_job_type-", "N/A")}
                    </span>
                    <span>
                      Location(s):{" "}
                      {job.class_list
                        .filter((c) => c.startsWith("jobpost_location-"))
                        .map((c) =>
                          c.replace("jobpost_location-", "").replace(/-/g, " ")
                        )
                        .join(", ")}
                    </span>
                  </div>

                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                  >
                    Apply Now
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6 text-gray-600">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
