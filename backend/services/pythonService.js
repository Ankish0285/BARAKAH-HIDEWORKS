const config = require("../config");

const callPythonService = async (path, options = {}) => {
  const url = `${config.pythonServiceUrl}${path}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Python service request failed");
  }

  return response.json();
};

module.exports = { callPythonService };
