import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="top-0 z-10 flex w-screen dark:bg-zinc-600 h-24 p-1 pl-6 items-center justify-center">
      <div className="prose prose-xl align-middle text-xl flex flex-col w-full h-full justify-evenly md:flex-row md:items-center">
        <div className="flex justify-center">
          <h1>
            <Link
              className="text-white/90 hover:text-white text-xl md:text-3xl text-bold"
              href={'/'}
            >
              Fernando Bouchet
            </Link>
          </h1>
        </div>
        <div className="flex justify-center gap-8">
          <Link
            className="text-white/90 hover:text-white text-2xl md:text-3xl"
            href={'https://www.linkedin.com/in/fernandobouchet'}
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-white/90 hover:text-white text-2xl md:text-3xl"
            href={'https://github.com/fernandobouchet'}
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-white text-2xl md:text-3xl"
            href={'https://twitter.com/ferbouchet'}
            target="_blank"
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
