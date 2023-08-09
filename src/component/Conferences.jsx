import React, { useEffect, useState } from "react";
import conferenceService from "../service/conference.service";
import { Link } from "react-router-dom";
const Conferences = () => {
  const [conferenceList, setConferenceList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    conferenceService
      .getAllConference()
      .then((res) => {
        console.log(res.data);
        setConferenceList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteConference = (id) => {
    console.log("id : ", id);

    conferenceService
      .deleteConference(id)
      .then((res) => {
        setMsg("Conference Deleted Successfully");
        fetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Conferences</h1>
        {msg && <p className="fs-4 text-center text-success">{msg}</p>}
        <div className="cards">
          {conferenceList.map((card, index) => (
            <div key={index} className="card">
              <p>
                <b>Name: </b> {card.name}
              </p>
              <p>
                <b>Date: </b> {card.date}
              </p>
              <p>
                <b>Place: </b> {card.place}
              </p>
              <p>
                <b>Status: </b> {card.status}
              </p>
              <p>
                <b>Link: </b> {card.link}
              </p>

              <div style={{ display: "flex" }}>
                <Link
                  to={"editConference/" + card.conferenceId}
                  className="button"
                >
                  Edit
                </Link>
                <div style={{ marginLeft: "16px" }}>
                  <button
                    onClick={() => deleteConference(card.conferenceId)}
                    className="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Conferences;
