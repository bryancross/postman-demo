function version_test(targetVal, options) {
	if (targetVal !== "3.0.0") {
		return [{ message: `${targetVal} must be equal to '3.0.0'` }];
	}
}
module.exports = version_test;