const convertMinsToHoursMins = (totalMinutes: number): string => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedMinutes = `${minutes > 0 ? `${minutes}m` : ""}`;

  return `${hours}h ${formattedMinutes}`;
};

export default convertMinsToHoursMins;
