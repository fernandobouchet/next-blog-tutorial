import MyProfilePic from './components/MyProfilePic';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title: "Fernando's Blog",
  description: 'Created by Fernando Bouchet',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-zinc-950 dark:text-white">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
