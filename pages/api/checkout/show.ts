// import { NextApiRequest, NextApiResponse } from "next";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2020-08-27",
// });

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { id } = req.query;
//   const session = stripe.checkout.sessions.retrieve(
//     "cs_test_sYZMKJGM7n123yMHso0WTFLYrjfpq639KymwNulvJ1Hj6Qknbyw5n95F"
//   );
//   res.status(200).json({ session });
// };
