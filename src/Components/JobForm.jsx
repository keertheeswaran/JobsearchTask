import Multiselect from "multiselect-react-dropdown";
import { useState, useEffect } from "react";
import {
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar,
  createButton,
} from "react-simple-wysiwyg";
import { isString, isValidEmail } from "../Common/ValidationUtils";

const JobForm = ({ setisshowform, id, jobDataList, setJobDataList }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [html, setHtml] = useState("<p></p>");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const BtnAlignCenter = createButton("Align center", "≡", "justifyCenter");
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (id) {
      const job = jobDataList.find((job) => job.id === id);
      if (job) {
      }
    }
  }, [id, jobDataList]);

  const handleSelect = (selectedList) => {
    setSelectedSkills(selectedList);
  };

  const handleRemove = (selectedList) => {
    setSelectedSkills(selectedList);
  };

  const handleTextEdit = (event) => {
    if (event && event.target && typeof event.target.value === "string") {
      setHtml(event.target.value);
    } else {
      setHtml("<p></p>");
    }
  };

  const handleApply = () => {
    setSubmitClicked(true);

    if (!firstName || !lastName || !email) {
      return;
    }

    const updatedJobDataList = jobDataList.map((job) =>
      job.id === id ? { ...job, appled: 1 } : job
    );

    setJobDataList(updatedJobDataList);
    setisshowform(false);
  };

  const optionsData = [
    { name: "React", id: "1" },
    { name: "Node Js", id: "2" },
    { name: "Api", id: "3" },
  ];

  return (
    <div className="container-fluid">
      <div className="card p-3">
        <div className="row">
          <div className="col-sm-3">
            <label>First Name</label>
            <input
              className={`form-control ${
                submitClicked && !firstName ? "is-invalid" : ""
              }`}
              value={firstName}
              onChange={(e) => {
                if (isString(e.target.value)) {
                  setFirstName(e.target.value);
                }
              }}
            />
          </div>

          <div className="col-sm-3">
            <label>Last Name</label>
            <input
              className={`form-control ${
                submitClicked && !lastName ? "is-invalid" : ""
              }`}
              value={lastName}
              onChange={(e) => {
                if (isString(e.target.value)) {
                  setLastName(e.target.value);
                }
              }}
            />
          </div>
          <div className="col-sm-3">
            <label>Email</label>
            <input
              className={`form-control ${
                submitClicked && !email ? "is-invalid" : ""
              }`}
              value={email}
              onChange={(e) => {
                if (isValidEmail(e.target.value)) {
                  setEmail(e.target.value);
                }
              }}
            />
          </div>
          <div className="col-sm-3">
            <label>Skills</label>
            <Multiselect
              options={optionsData}
              selectedValues={selectedSkills}
              onSelect={handleSelect}
              onRemove={handleRemove}
              displayValue="name"
            />
          </div>
          <div className="col-sm-6">
            <label>About Me</label>
            <EditorProvider>
              <Editor value={html} onChange={handleTextEdit}>
                <Toolbar>
                  <BtnBold />
                  <BtnItalic />
                  <BtnAlignCenter />
                </Toolbar>
              </Editor>
            </EditorProvider>
          </div>
        </div>
        <div className="col-sm-12 text-center">
          <button className="btn btn-danger mt-3" onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
