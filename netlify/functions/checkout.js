const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const {
      name,
      email,
      amount = 4000,
      currency = "gbp",
      bookingType = "session",
    } = JSON.parse(event.body || "{}");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name:
                bookingType === "session"
                  ? "Counselling Session"
                  : "Consultation",
            },
            unit_amount: Number(amount),
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${process.env.URL || "http://localhost:8888"}/bookings.html?success=true`,
      cancel_url: `${process.env.URL || "http://localhost:8888"}/bookings.html?canceled=true`,
      metadata: { name, email, bookingType },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id, url: session.url }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
