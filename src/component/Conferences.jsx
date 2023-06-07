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
                <h3>Name: {card.name}</h3>
                <p>
                  <b>Date: {card.date}</b>
                </p>
                <p>
                  <b>Place: {card.place}</b>
                </p>
                <p>
                  <b>Status: {card.status}</b>
                </p>
                <p>
                  <b>Link: {card.link}</b>
                </p>

                <Link
                  to={"editConference/" + card.conferenceid}
                  className="button"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteConference(card.conferenceid)}
                  className="button"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Conferences;
