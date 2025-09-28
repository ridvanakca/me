export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='ml-0 pt-24'>{children}</div>;
}
