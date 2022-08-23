export const getDate = (date = new Date()) => {
	let day = date.getDate();
	let month = date.getMonth() + 1;

	if (month < 10) month = `0${month}`;
	if (day < 10) day = `0${day}`;
	return `${month}-${day}-${date.getFullYear()}`;
};

export const getTime = (date) => {
	let minute = date.getMinutes();

	if (minute < 10) minute = `0${minute}`;

	return `${(date.getHours() + 24) % 12 || 12}:${minute}`;
};
