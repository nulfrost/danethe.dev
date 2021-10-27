type Props = {
  children: React.ReactNode;
};

export const MainLayout: React.FunctionComponent<Props> = ({ children }) => {
  return <main className="max-w-6xl mx-auto">{children}</main>;
};
