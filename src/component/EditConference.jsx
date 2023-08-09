import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import conferenceService from "../service/conference.service";

const EditConference = () => {
  const [conference, setConference] = useState({
    id: "",
    place: "",
    date: "",
    name: "",
    status: "",
    link: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [msg, setMsg] = useState("");
  //const [msg] = useState("");

  useEffect(() => {
    conferenceService
      .getConferenceById(Number(id))
      .then((res) => {
        setConference(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;

    setConference({ ...conference, [e.target.name]: value });
  };

  const conferenceUpdate = (e) => {
    e.preventDefault();
    conferenceService.editConference(conference).then((res) => {
      
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
    setMsg("Conference updated successfully").catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <div className="container_editConference">
        <div className="editConferenceCard">
          <div className="card-header fs-3 text-center">Edit Conference</div>
          {msg && <p className="fs-4 text-center text-success">{msg}</p>}
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label>Enter Place</label>
                <input
                  type="text"
                  name="place"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={conference.place}
                  required
                  pattern="[A-Za-z/s]+"
                  title="Please enter a valid name"
                ></input>
              </div>

              <div className="mb-3">
                <label>Enter Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={conference.date}
                  required
                ></input>
              </div>

              <div className="mb-3">
                <label>Enter Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={conference.name}
                  required
                  pattern="[A-Za-z/s]+"
                  title="Please enter a valid name"
                ></input>
              </div>
              <div className="mb-3">
                <label>Enter Link</label>
                <input
                  type="text"
                  name="link"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={conference.link}
                  required
                  pattern="(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?"
                  title="Please enter valid link"
                ></input>
              </div>

              <div className="mb-3">
                <label>Enter Status</label>
                <br />
                <input
                  type="radio"
                  name="status"
                  value="Paid"
                  checked={conference.status === "Paid"}
                  onChange={(e) => handleChange(e)}
                />
                Paid
                <br />
                <input
                  type="radio"
                  name="status"
                  value="Free"
                  checked={conference.status === "Free"}
                  onChange={(e) => handleChange(e)}
                />
                Free
              </div>

              <button
                className="btn btn-success col-md-12"
                onClick={conferenceUpdate}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditConference;
