export const RouteAnnouncer = ({ message }) => {
  const routeName = message.replace("/", "");

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      You are now on the {routeName} page
    </div>
  );
};
