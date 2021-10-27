type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <main className="h-full">{children}</main>
    </>
  );
};
