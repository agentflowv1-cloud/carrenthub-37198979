import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-4 flex justify-between items-center'>
      <p>2024 CarRentHub</p>
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
    </footer>
  );
};

export default Footer;