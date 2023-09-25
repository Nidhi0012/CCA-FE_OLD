import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import conferenceService from "../service/conference.service";
import axios from "axios";
import styles from "../styles/EditConference.module.css";

const EditConference = () => {
  const [conferenceList, setConferenceList] = useState([]);
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

  useEffect(() => {
    axios
      .get(`/api/${id}`)
      .then((response) => {
        const selectedConference = response.data;
        setConference(selectedConference);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setConference({ ...conference, [e.target.name]: value });
  };

  const conferenceUpdate = (e) => {
    e.preventDefault();

    conferenceService.editConference(conference).then((res) => {});

    setTimeout(() => {
      navigate("/");
    }, 2000);

    setMsg("Conference updated successfully").catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <div className={styles.container_edit_conf}>
        <div className={styles.editConferenceCard}>
          {msg && <p className="fs-4 text-center text-success">{msg}</p>}

          <div className={styles.card_body}>
            <div
              className={`card-header fs-3 text-center ${styles.cardHeader}`}
            >
              Edit Conference
            </div>
            <form>
              <div className="mb-3">
                <label>Enter Place</label>
                <input
                  type="text"
                  name="place"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={conference?.place}
                  required
                  pattern="[A-Za-z/s]+"
                  title="Please enter a valid name"
                ></input>
              </div>

              <div className="mb-3">
                <label>Select Date</label>

                <input
                  type="date"
                  name="date"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                  value={conference?.date}
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
                  value={conference?.name}
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
                  value={conference?.link}
                  required
                  pattern="(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?"
                  title="Please enter valid link"
                ></input>
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
                  <span className={styles.radio_label}>
                    Online and In-person
                  </span>
                </div>
              </div>
              <button className={styles.submit_btn} onClick={conferenceUpdate}>
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
