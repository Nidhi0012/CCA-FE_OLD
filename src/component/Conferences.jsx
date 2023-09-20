import React, { useEffect, useState } from "react";
import conferenceService from "../service/conference.service";
import { Link } from "react-router-dom";
import styles from "../styles/Conferences.module.css";

const Conferences = () => {
  const [conferenceList, setConferenceList] = useState([]);
  const [msg, setMsg] = useState("");
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    fetch();
  }, []);

  // const fetch = () => {
  //   conferenceService
  //     .getAllConference()
  //     .then((res) => {
  //       console.log(res.data);
  //       setConferenceList(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setFilterValue(selectedValue);
  };
  const fetch = () => {
    if (filterValue === "all") {
      conferenceService
        .getAllConference()
        .then((res) => {
          console.log(res.data);
          setConferenceList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      conferenceService
        .getConferenceByStatus(filterValue)
        .then((res) => {
          console.log(res.data);
          setConferenceList(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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

  const variant = [
    "linear-gradient(90deg, #F8F5F0, #F4CB8C)",

    "linear-gradient(90deg, #F6FCF2, #D1F2B8)",

    "linear-gradient(90deg, #F5F7FB, #B4C4DA)",

    "linear-gradient(90deg, rgb(246, 252, 242), rgb(195 204 188))",

    "linear-gradient(90deg, rgb(248, 245, 240), rgb(244 140 206))",

    "linear-gradient(90deg, rgb(238 241 245), rgb(97 147 216))",
  ];

  const badgeBg = {
    online: "green",

    "online and in-person": "#d4a15c",

    "in-person": "#43adca",
  };

  return (
    <>
      <div className="container">
        {msg && <p className="fs-4 text-center text-success">{msg}</p>}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginLeft: "8px" }}>Conferences</h1>

          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "24px" }}>
              <label
                htmlFor="filterBy"
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                Filter by:{" "}
              </label>
              <select
                id="filterBy"
                className="dropdown"
                name="filterBy"
                value={filterValue}
                style={{
                  marginLeft: "8px",
                  padding: "8px",
                  width: "110px",
                  borderRadius: "8px",
                }}
                onChange={handleFilterChange}
                onClick={fetch}
              >
                <option value="all" style={{ padding: "8px" }}>
                  All
                </option>
                <option value="online">Online</option>
                <option value="online and in-person">
                  Online and In-person
                </option>
                <option value="in-person">In-person</option>
              </select>
            </div>
            <Link to="/addConference" className={styles.addConfBtn}>
              Add Conference
            </Link>
          </div>
        </div>

        <div className="cards">
          {conferenceList.map((card, index) => {
            const randomVariant = variant[index % variant.length];

            return (
              <div
                key={index}
                className={`card ${styles.cardCss}`}
                style={{ background: randomVariant }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "140px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <span
                      className={styles.badge}
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        background: badgeBg[card.status],
                      }}
                    >
                      {card.status}
                    </span>
                  </div>

                  <span
                    style={{
                      fontWeight: "500",
                      lineHeight: 1.2,
                      fontSize: "14px," /*, paddingBottom: "3px" */,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {card.date}
                  </span>

                  <span className={styles.confName}>{card.name}</span>

                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      lineHeight: "21px",
                    }}
                  >
                    {card.place}
                  </span>

                  {/* <span className={styles.badge}>{card.status}</span> */}

                  <span>
                    <a
                      href={card.link}
                      style={{ color: randomVariant, textDecoration: "none" }}
                    >
                      {card.link}
                    </a>
                  </span>
                </div>

                <div style={{ display: "flex" }}>
                  <Link
                    to={"/editConference/" + card.conferenceId}
                    className={styles.button}
                  >
                    Edit
                  </Link>

                  <div style={{ marginLeft: "16px" }}>
                    <button
                      onClick={() => deleteConference(card.conferenceId)}
                      className={styles.button}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Conferences;
