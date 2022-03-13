const { format_date, format_plural } = require("../utils/helpers");

test("format_plural() returns a pluralized word", () => {
	const wordOne = format_plural("tiger", 1);
	const wordTwo = format_plural("lion", 2);

	expect(wordOne).toBe("tiger", 1);
	expect(wordTwo).toBe("lions", 2);
});

test("format_date() returns a date string", () => {
	const date = new Date("2022-03-11 16:12:03");

	expect(format_date(date)).toBe("3/11/2022");
});
