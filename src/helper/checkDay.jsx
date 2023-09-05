const Days = [
	"တနင်္ဂနွေ",
	"တနင်္လာ",
	"အင်္ဂါ",
	"ဗုဒ္ဓဟူး",
	"ကြာသပတေး",
	"သောကြာ",
	"စနေ",
]

const checkDay = ({day, month, year}) => {
	month = month > 9 ? month : "0" + month;
	day = day > 9 ? day : "0" + day;
	const d = new Date(`${year}-${month}-${day}`);

	return Days[d.getDay()];
}

export default checkDay;