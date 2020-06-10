import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="text-xs text-gray-600">
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
