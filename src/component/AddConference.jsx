import React, { useState } from "react";
import conferenceService from "../service/conference.service";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AddConference.module.css";

const AddConference = () => {
  const [conference, setConference] = useState({
    place: "",
    date: "",
    name: "",
    status: "",
    link: "",
  });

  const navigate = useNavigate();
  const [msg] = useState("");
  const [setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setConference({ ...conference, [e.target.name]: value });
  };

  const conferenceRegister = (e) => {
    conferenceService
      .saveConference(conference)
      .then((res) => {
        setTimeout(() => {
          navigate("/");
        }, 2000);
        setMsg("Conference added successfully");
        setConference({
          place: "",
          date: "",
          name: "",
          status: "",
          link: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`container ${styles.addConference}`}>
      <div className={styles.addConferenceCard}>
        <div className={`card-body ${styles.cardBody}`}>
          {msg && (
            <p className={`fs-4 text-center text-success ${styles.successMsg}`}>
              {msg}
            </p>
          )}
          <div className={`card-header fs-3 text-center ${styles.cardHeader}`}>
            Add Conference
          </div>

          <form onSubmit={(e) => conferenceRegister(e)}>
            <div className="mb-3">
              <label>Enter Place</label>

              <input
                type="text"
                name="place"
                className="form-control"
                onChange={(e) => handleChange(e)}
                value={conference.place}
                required
                maxLength={40}
                minLength={2}
                pattern="^[a-zA-Z0-9_. -]+$"
                title="Please enter a valid name"
              />
            </div>

            <div className="mb-3">
              <label>Select Date</label>

              <input
                type="date"
                name="date"
                id="my-date-picker"
                min="2023-07-26"
                className="form-control"
                onChange={(e) => handleChange(e)}
                value={conference.date}
                required
              />
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
                maxLength={80}
                minLength={2}
                pattern="([A-Za-z/s]+)"
                title="Please enter a valid name"
              />
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
                maxLength={40}
                minLength={2}
                pattern="(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?"
                title="Please enter valid link"
              />
            </div>
            <div className="mb-3">
              <label>Select Mode</label>
              <div className={styles.radio_option}>
                <input
                  type="radio"
                  name="status"
                  value="In-person"
                  checked={conference.status === "In-person"}
                  onChange={(e) => handleChange(e)}
                />
                <span className={styles.radio_label}>In-person</span>
              </div>
              <div className={styles.radio_option}>
                <input
                  type="radio"
                  name="status"
                  value="Online"
                  checked={conference.status === "Online"}
                  onChange={(e) => handleChange(e)}
                />
                <span className={styles.radio_label}>Online</span>
              </div>
              <div className={styles.radio_option}>
                <input
                  type="radio"
                  name="status"
                  value="Online and In-person"
                  checked={conference.status === "Online and In-person"}
                  onChange={(e) => handleChange(e)}
                />
                <span className={styles.radio_label}>Online and In-person</span>
              </div>
            </div>
            <button className={styles.submit_btn}>Add Conference</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddConference;
