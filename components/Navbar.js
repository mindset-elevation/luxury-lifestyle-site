import Link from 'next/link';
import settings from '../content/settings.json';

export default function Navbar() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <nav className="bg-primary shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/">
          <span className="text-2xl font-bold text-secondary cursor-pointer">
            {settings.siteTitle}
          </span>
        </Link>
        <div className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-100 hover:text-secondary">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
