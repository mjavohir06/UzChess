const months = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktabr",
  "noyabr",
  "dekabr",
];

export function DateUz(date) {
  const date2 = new Date(date);

  const day = String(date2.getDate()).padStart(2, "0");
  const month = months[date2.getMonth()];
  const year = date2.getFullYear();

  return `${day}-${month}, ${year}`;
}