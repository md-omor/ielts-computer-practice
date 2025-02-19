import Topbar from "@/components/organisms/topbar";

export default function Listening({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
