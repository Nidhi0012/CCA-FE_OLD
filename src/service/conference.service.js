import axios from "axios";
const API_URL = "http://localhost:8080/api";

class ConferenceService {
  saveConference(conference) {
    console.log(`conference object: `, conference);
    return axios.post(API_URL + "/saveConference", conference);
  }
  getAllConference() {
    return axios.get(API_URL + "/");
  }
  getConferenceById(id) {
    return axios.get(API_URL + "/" + id);
  }
  deleteConference(id) {
    return axios.get(API_URL + "/conferences/delete/" + id);
  }
  editConference(conference) {
    return axios.put(
      API_URL + "/conferences/edit/" + conference.conferenceId,
      conference
    );
  }
}
export default new ConferenceService();
