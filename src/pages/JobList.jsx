import React, { useEffect, useState } from "react";
import jsondata from "../json/jobdatalist.json";
import { FaLessThan, FaGreaterThan, FaSearch } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import JobForm from "../Components/JobForm";

const JobList = () => {
  const jobDataList = jsondata.jobDataList || [];
  const [filterJob, setFilterJob] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [current, setCurrent] = useState(1);
  const [isshowform, setisshowform] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [jobData, setJobData] = useState(jobDataList);

  const handleform = (id) => {
    setisshowform(true);
    setSelectedJobId(id);
  };

  useEffect(() => {
    const searchFields = [
      "title",
      "company",
      "location",
      "description",
      "type",
      "postedDate",
      "salary",
    ];

    const filteredData = jobDataList.filter((item) => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      return searchFields.some(
        (field) =>
          typeof item[field] === "string" &&
          item[field].toLowerCase().includes(lowerSearchTerm)
      );
    });
    setFilterJob(filteredData);
    setCurrent(1);
  }, [searchTerm, jobDataList]);

  const totalItems = filterJob.length;
  const totalPages = Math.ceil(totalItems / perPage);
  const startIndex = (current - 1) * perPage;
  const endIndex = startIndex + perPage;
  const dataToRender = filterJob.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrent(newPage);
    }
  };

  const handleCloseForm = () => {
    setisshowform(false);
    setSelectedJobId(null);
  };

  return (
    <div className="container-fluid w-100">
      {!isshowform ? (
        <>
          <div className="row">
            <div className="col-xl-3 col-sm-3">
              <div className="input-group mb-3 input-primary">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrent(1);
                  }}
                />
                <span className="Searchbar">
                  <FaSearch />
                </span>
              </div>
            </div>
            <div className="col-xl-9 col-sm-9 justify-content-end d-flex">
              <div className="col-xl-1">
                <select
                  className="form-control"
                  value={perPage}
                  onChange={(e) => setPerPage(Number(e.target.value))}
                >
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid-form">
            <div className="table-responsive max-ht">
              <table className="table table-bordered table-hover">
                <thead className="thead-primary text-center">
                  <tr>
                    <th>SL.No</th>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Type</th>
                    <th>Posted Date</th>
                    <th>Salary</th>
                    <th>Apply for Job</th>
                  </tr>
                </thead>
                <tbody>
                  {dataToRender.length > 0 ? (
                    dataToRender.map((item, index) => (
                      <tr key={item.id}>
                        <td>{startIndex + index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.company}</td>
                        <td>{item.location}</td>
                        <td>{item.type}</td>
                        <td className="text-center">{item.postedDate}</td>
                        <td className="text-center">{item.salary}</td>
                        <td className="text-center">
                          <button
                            className={`btn  ${
                              item.appled === 1
                                ? "btn-dark"
                                : "btn-outline-warning"
                            }`}
                            title="form"
                            disabled={item.appled === 1}
                            onClick={() => handleform(item.id)}
                          >
                            <SiGoogleforms />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center">
                        No data found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="pagination d-flex justify-content-end">
              <span className="pe-1">Pages</span>
              <button
                onClick={() => handlePageChange(current - 1)}
                disabled={current === 1}
                className="page-btn"
              >
                <FaLessThan className="icons" />
              </button>
              <span className="ms-1 me-1">
                {current} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(current + 1)}
                disabled={current === totalPages}
                className="page-btn"
              >
                <FaGreaterThan className="icons" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <JobForm
          setisshowform={handleCloseForm}
          id={selectedJobId}
          jobDataList={jobData}
          setJobDataList={setJobData}
        />
      )}
    </div>
  );
};

export default JobList;
