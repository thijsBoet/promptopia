export default function handler(req, res) {
	const users = [
		{ id: 1, name: 'John Doe', email: 'john@example.com' },
		{ id: 2, name: 'Jane Doe', email: 'jane@example.com' },
	];

	if (req.method === 'GET') {
		// Return all users
		res.status(200).json(users);
	} else if (req.method === 'POST') {
		// Add a new user
		const newUser = req.body;
		users.push(newUser);
		res.status(201).json(newUser);
	} else {
		// Method not allowed
		res.status(405).end();
	}
}
