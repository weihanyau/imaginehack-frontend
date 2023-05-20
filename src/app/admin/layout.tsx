import { NavBar } from "@/components/NavBar/NavBar";
import { SideNav } from "@/components/SideNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <SideNav />
      {children}
    </>
  );
}
