export function RouteAnnouncer({ location }: { location: string }) {
  return (
    <div
      id="route-announcer"
      style={{
        position: `absolute`,
        top: 0,
        width: 1,
        height: 1,
        padding: 0,
        overflow: `hidden`,
        clip: `rect(0, 0, 0, 0)`,
        whiteSpace: `nowrap`,
        border: 0,
      }}
      aria-live="assertive"
      aria-atomic="true"
    >
      {location}
    </div>
  );
}
