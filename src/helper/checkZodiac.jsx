const zodiac = [
	{ name: "Aries", mm: "မိဿ", from: 321, to: 419 },
	{ name: "Taurus", mm: "ပြိဿ", from: 420, to: 520 },
	{ name: "Gemini", mm: "မေထုန်", from: 521, to: 620 },
	{ name: "Cancer", mm: "ကရကဋ်", from: 621, to: 722 },
	{ name: "Leo", mm: "သိဟ်", from: 723, to: 822 },
	{ name: "Virgo", mm: "ကန်", from: 823, to: 922 },
	{ name: "Libra", mm: "တူ", from: 923, to: 1022 },
	{ name: "Scorpio", mm: "ဗြိစ္ဆာ", from: 1023, to: 1121 },
	{ name: "Sagittarius", mm: "ဓနု", from: 1122, to: 1221 },
	{ name: "Capricorn", mm: "မကာရ", from: 1222, to: 1231 },
	{ name: "Capricorn", mm: "မကာရ", from: 101, to: 119 },
	{ name: "Aquarius", mm: "ကုံ", from: 120, to: 218 },
	{ name: "Pisces", mm: "မိန်", from: 219, to: 320 }
  ];

const checkZodiac = ({ month, day }) => {
	day = day < 10 ? "0" + day : day;
	const monthDay = "" + month + day;

	const res = zodiac.filter((z) => {
		return z.from <= +monthDay && +monthDay <= z.to;
	})

	return res[0];
}

export default checkZodiac;