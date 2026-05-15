import Image from 'next/image';

const Hero = () => {
  return (
    <section className='bg-gray-100 py-12 md:py-20 lg:py-24'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900'>Rent a Car with Us</h1>
        <p className='text-lg md:text-2xl lg:text-3xl text-gray-600 mt-4'>Get the best car rental experience with our wide range of vehicles</p>
        <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4'>Rent Now</button>
        <Image src='/hero.jpg' alt='Hero Image' width={1600} height={600} className='mt-8' />
      </div>
    </section>
  );
};

export default Hero;