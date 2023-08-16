import { sendMail } from "../../service/mailService";
const handler = async (req, res) => {
	try {
		const { method } = req;
		switch (method) {
			case "POST": {
				//Do some thing
				// TODO:
				// come back and fix the validity of sending emails
				// and how to do this properly
				await sendMail("Portfolio Contact Form", process.env.NODEMAILER_EMAIL, req.body.message);
				res.status(200).send("Success");
				break;
			}
			case "GET": {
				//Do some thing
				res.status(200).send(req.auth_data);
				break;
			}
			default:
				res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
				res.status(405).end(`Method ${method} Not Allowed`);
				break;
		}
	} catch (err) {
		res.status(400).json({
			error_code: "api_one",
			message: err.message,
		});
	}
};

export default handler;
