import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className='bg-gray-100 py-12 md:py-20 lg:py-24'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900'>Testimonials</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
          <div className='bg-white p-4 flex flex-col items-center'>
            <Image src='/testimonial1.jpg' alt='Testimonial 1' width={200} height={150} className='rounded-full' />
            <h3 className='text-lg font-bold text-gray-900 mt-2'>Name 1</h3>
            <p className='text-sm text-gray-600 mt-1'>Description of testimonial 1</p>
          </div>
          <div className='bg-white p-4 flex flex-col items-center'>
            <Image src='/testimonial2.jpg' alt='Testimonial 2' width={200} height={150} className='rounded-full' />
            <h3 className='text-lg font-bold text-gray-900 mt-2'>Name 2</h3>
            <p className='text-sm text-gray-600 mt-1'>Description of testimonial 2</p>
          </div>
          <div className='bg-white p-4 flex flex-col items-center'>
            <Image src='/testimonial3.jpg' alt='Testimonial 3' width={200} height={150} className='rounded-full' />
            <h3 className='text-lg font-bold text-gray-900 mt-2'>Name 3</h3>
            <p className='text-sm text-gray-600 mt-1'>Description of testimonial 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;