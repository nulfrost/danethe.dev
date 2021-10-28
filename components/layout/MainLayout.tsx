type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <main className="flex flex-1">
        <section className="flex flex-1">{children}</section>
      </main>
    </>
  );
};
