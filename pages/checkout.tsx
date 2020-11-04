import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE);

export default function Checkout() {
  const handleClick = async (event) => {
    // Get Stripe.js instance

    // Call your backend to create the Checkout Session
    const { sessionId } = await fetch("/api/checkout/session", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ quantity: "1" }),
    }).then((res) => res.json());

    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };
  return (
    <div>
      <button role="link" onClick={handleClick}>
        Checkout
      </button>
    </div>
  );
}
