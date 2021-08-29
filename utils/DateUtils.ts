// essentially stolen from https://github.com/maggie-j-liu/website/blob/main/utils/formatDate.ts

export const formatDate = (date: string) => {
  // Month - day - year
  let parsed: number[];
  parsed = date.split("-").map((num) => parseInt(num));
  // enforce '-': I'm the only one using this anyway so who cares
  const options = { month: "long", day: "numeric", year: "numeric" } as const;
  const formattedDate = new Date(
    parsed[2] + 2000, // year
    // last two digit years; I doubt I'll be using this website in 2100 so whatever
    parsed[0] - 1, // month
    // apparently months are 0 indexed
    parsed[1] // day
  ).toLocaleDateString("en-US", options);
  return formattedDate;
};
