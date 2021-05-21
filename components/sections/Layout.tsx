import Header from "@/components/sections/Header";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  useEffect(() => {
    document.title = `Dane - Frontend Developer | ${title}`;
  }, []);

  return (
    <>
      <div className="max-w-[1280px] mx-auto font-sans px-7 xl:px-0 pb-20">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
}
