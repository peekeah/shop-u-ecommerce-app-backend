const Razorpay = require("razorpay");
const shortid = require("shortid");

exports.createPayment = async (req, res) => {
  const key_id = await process.env.RAZORPAY_KEY;
  const key_secret = await process.env.RAZORPAY_KEY_SECRET;

  const userData = req.body.tokenData._doc;

  const payment_capture = 1;
  const amount = req.body.order_total;
  const currency = "INR";
  const receipt = shortid();

  const options = {
    amount: parseInt(amount * 100),
    currency,
    receipt,
    payment_capture,
    handler: function (response) {
      console.log("response", response);
    },
  };

  try {
    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const response = await razorpay.orders.create(options);


    res.send({
      order_id: receipt,
      currency: response.currency,
      name: userData.name,
      email: userData.email,
      total: parseInt(req.body.order_total * 100),
      mobile_no: userData.mobile_no,
    });
  } catch (err) {
    console.error(err);
  }
};


// NOTE: Webhooks for further update
exports.verify = async (req, res) => {
  const crypto = require("crypto");
  const secret = await process.env.RAZORPAY_WEBHOOK_SECRET; 

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	// console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}

  res.send({
    msg: "OK",
  });
};
