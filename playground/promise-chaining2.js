require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("603745365d59e4c800f7596b")
// 	.then((task) => {
// 		console.log(task);
// 		return Task.countDocuments({ completed: false });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const deleteTaskAndCount = async (id) => {
	const task = await Task.findByIdAndDelete(id);
	const count = await Task.countDocuments({ completed: false });
	return count;
};

deleteTaskAndCount("603742089b9800c75970d99b")
	.then((count) => {
		console.log(count);
	})
	.catch((e) => {
		console.log(e);
	});
