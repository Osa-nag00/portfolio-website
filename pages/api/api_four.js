import { sendMail } from "../../service/mailService";
const handler = async (req, res) => {
	try {
		const { method } = req;
		switch (method) {
			case "POST": {
				let formattedMsg =
					"Name: " +
					req.body.firstName +
					" " +
					req.body.lastName +
					"\n" +
					"Email: " +
					req.body.email +
					"\n\n" +
					req.body.message;

				await sendMail("Portfolio Contact Form", process.env.TO_EMAIL, formattedMsg);
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
