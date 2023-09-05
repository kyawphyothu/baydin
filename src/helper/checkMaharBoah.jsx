import { getMMYear } from "./getMMDate"
// အောင် လံ ထူ စစ် သူ ကြီး ပွဲ
// 1 4 7 3 6 2 5

// const LinGa = [
// 	1, 4, 7, 3, 6, 2, 5
// ]
const LinGa = "1473625"
const ZarTar = [
	"ဘင်္ဂ",
	"မရဏ",
	"အထွန်း",
	"သိုက်",
	"ရာဇ",
	"ပုတိ",
	"အဓိပတိ"
]

const checkMaharBoah = ({day, month, year}) => {
	const mmYear = getMMYear({day, month, year});

	const remainder = mmYear % 7;
	const fullDayInt = new Date(year, month -1 , day).getDay() + 1;

	const sliceIndex = LinGa.indexOf(remainder);
	const newLinga1 = LinGa.slice(sliceIndex)
	const newLinga2 = LinGa.slice(0, sliceIndex)
	const newLinga = newLinga1 + newLinga2;

	const fullDayIntIndex = newLinga.indexOf(fullDayInt);

	return ZarTar[fullDayIntIndex];
}

export default checkMaharBoah;