export default function AuthPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex w-full flex-col items-center justify-center px-28">
      {children}
    </div>
  )
}
