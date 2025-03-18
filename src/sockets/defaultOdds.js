import axios from "axios";

const API_BASE_URL = "https://api.1ten365.live/api/event";

// Fetch default odds for cricket, soccer, tennis
export const fetchDefaultOdds = async (eventId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/odds/${eventId}`);
    // console.log(response?.data)
    return response?.data;
  } catch (error) {
    console.error("Error fetching default odds:", error);
    throw error;
  }
};

// Fetch default odds for horse and greyhound racing
export const fetchRacingOdds = async (eventId, marketId, sport) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/racing-odds`, {
      params: { eventId, marketId, sport },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching racing odds:", error);
    throw error;
  }
};

// Fetch multi-market odds
export const fetchMultiMarketOdds = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/bookmakers`);
    return response.data;
  } catch (error) {
    console.error("Error fetching multi-market odds:", error);
    throw error;
  }
};
