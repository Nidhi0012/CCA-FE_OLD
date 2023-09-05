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

        // validateString(conference);

        // validateDigits(conference);

      });

  };

 

  return (

    <div className={`container ${styles.addConference}`}>

      <div className={`card-header fs-3 text-center ${styles.cardHeader}`}>

        Add Conference

      </div>

      <div className={`card-body ${styles.cardBody}`}>

        {msg && (

          <p className={`fs-4 text-center text-success ${styles.successMsg}`}>

            {msg}

          </p>

        )}

 

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

            <label>Enter Date</label>

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

              label="Free"

              name="status"

              value="Free"

              checked={conference.status === "Free"}

              onChange={(e) => handleChange(e)}

            />

            Free

          </div>

          <button className="btn btn-success col-md-12">Submit</button>

        </form>

      </div>

    </div>

  );

};

 

export default AddConference;

 

