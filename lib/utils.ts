export const formatDate = (date) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    new Date(date)
  );
