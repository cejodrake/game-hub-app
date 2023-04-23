import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3657de869c5f473991c490f2983a3b41",
  },
});
