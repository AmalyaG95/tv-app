const millisecondsSince1974 = (dateString: string): number => {
  const now = Date.now();
  const popularDate = new Date(dateString).getTime();

  return now - popularDate;
};

const sortByDate = (movies: TMovie[]) =>
  movies.sort(
    (a, b) => millisecondsSince1974(a.Date) - millisecondsSince1974(b.Date)
  );

export default sortByDate;
