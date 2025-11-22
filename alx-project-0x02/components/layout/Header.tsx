import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ALX Project</h1>
        <ul className="flex gap-6">
          <li><Link href="/home" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/posts" className="hover:underline">Posts</Link></li>
          <li><Link href="/users" className="hover:underline">Users</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;