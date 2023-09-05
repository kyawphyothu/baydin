// const ResultTypes = [
// 	"Zodiac",0
// 	"ရာသီ",1
// 	"နက္ခတ်",2
// 	"မဟာဘုတ်",3
// 	"နေ့နံ",4
// "မြန်မာခုနှစ်",5
// ]
import checkAstro from "./checkAstro";
import checkDay from "./checkDay";
import checkMaharBoah from "./checkMaharBoah";
import checkZodiac from "./checkZodiac";
import { getMMDate } from "./getMMDate";

let result = [];

export const calculate = ({day, month, year}) => {
	const zodiac = checkZodiac({month, day})
	result[0] = zodiac.name;
	result[1] = zodiac.mm;

	const astro = checkAstro({day, month, year});
	result[2] = astro;

	const maharBoah = checkMaharBoah({day, month, year});
	result[3] = maharBoah;

	const dayText = checkDay({day, month, year});
	result[4] = dayText;

	const mmDate = getMMDate({day, month, year});
	result[5] = mmDate;

	return result;
}