import Header from "@/components/sections/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="max-w-[1280px] mx-auto font-sans px-4 md:px-0 pb-20">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
