import { getMMYear } from "./getMMDate";

const astors = [
	"ဘီလူး",
	"နတ်",
	"လူ",
]

const checkAstro = ({day, month, year}) => {
	const mmYear = getMMYear({day, month, year});
	const result = mmYear % 3;

	return astors[result];
}

export default checkAstro;