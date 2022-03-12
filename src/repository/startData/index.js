import axios from "axios";

class startData {
  getStartData = async () => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await axios.get("/json/data.json");
      result.value = response.data;
    } catch (e) {
      result.error = e.response;
    }
    return result;
  };
}

export default new startData();
