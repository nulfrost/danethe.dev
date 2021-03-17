export const formatDate = (date) =>
  new Intl.DateTimeFormat("en-US").format(new Date(date));
