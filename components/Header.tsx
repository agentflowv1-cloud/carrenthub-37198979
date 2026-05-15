import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-gray-900 text-white py-4 flex justify-between items-center'>
      <Link href='#' className='text-lg font-bold'>CarRentHub</Link>
      <nav>
        <ul className='flex items-center space-x-4'>
          <li>
            <Link href='#' className='hover:text-gray-300'>Home</Link>
          </li>
          <li>
            <Link href='#' className='hover:text-gray-300'>Features</Link>
          </li>
          <li>
            <Link href='#' className='hover:text-gray-300'>Testimonials</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;