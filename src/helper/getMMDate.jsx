import mcal from "myanmar-calendar";

export const getMMYear = ({day, month, year}) => {
	const mmDate = mcal.toMyanmar(new Date(year, month-1, day), "en");
	const mmYear = mmDate.split(" ")[2];

	return mmYear;
}

export const getMMDate = ({day, month, year}) => {
	return mcal.toMyanmar(new Date(year, month -1, day));
}