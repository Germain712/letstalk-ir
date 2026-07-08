exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ success: false, error: "Method Not Allowed" }),
    };
  }

  const contentType =
    event.headers["content-type"] || event.headers["Content-Type"] || "";
  let payload = {};

  if (contentType.includes("application/json")) {
    try {
      payload = JSON.parse(event.body || "{}");
    } catch {
      payload = {};
    }
  } else if (contentType.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams(event.body || "");
    payload = Object.fromEntries(params.entries());
  } else {
    try {
      payload = JSON.parse(event.body || "{}");
    } catch {
      payload = {};
    }
  }

  const { name, email, message } = payload;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        error: "Please fill out all required fields.",
      }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ success: true, message: "Message received." }),
  };
};
