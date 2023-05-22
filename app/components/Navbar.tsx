import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="top-0 z-10 flex w-screen dark:bg-zinc-600 h-14 p-1 pl-6 items-center justify-center md:justify-normal">
      <div className="prose prose-xl align-middle text-xl">
        <h1>
          <Link href={'/'}>Fernando Bouchet</Link>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
