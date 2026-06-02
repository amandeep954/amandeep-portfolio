import axios from "axios";

const baseURL = import.meta.env.VITE_GOOGLE_SHEET_URL || "";

if (!baseURL) {
  console.warn(
    "VITE_GOOGLE_SHEET_URL is not set. Contact form submissions will fail.",
  );
}

const api = axios.create({
  baseURL,
});

// Convert data to form-encoded to avoid CORS preflight
api.interceptors.request.use((config) => {
  if (config.method === "post" && config.data) {
    const params = new URLSearchParams();
    Object.keys(config.data).forEach((key) => {
      params.append(key, config.data[key]);
    });
    config.data = params;
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
  }
  return config;
});

export default api;
