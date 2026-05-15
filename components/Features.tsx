import Image from 'next/image';

const Features = () => {
  return (
    <section className='bg-white py-12 md:py-20 lg:py-24'>
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900'>Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
          <div className='bg-gray-100 p-4 flex flex-col items-center'>
            <Image src='/feature1.jpg' alt='Feature 1' width={200} height={150} />
            <h3 className='text-lg font-bold text-gray-900 mt-2'>Feature 1</h3>
            <p className='text-sm text-gray-600 mt-1'>Description of feature 1</p>
          </div>
          <div className='bg-gray-100 p-4 flex flex-col items-center'>
            <Image src='/feature2.jpg' alt='Feature 2' width={200} height={150} />
            <h3 className='text-lg font-bold text-gray-900 mt-2'>Feature 2</h3>
            <p className='text-sm text-gray-600 mt-1'>Description of feature 2</p>
          </div>
          <div className='bg-gray-100 p-4 flex flex-col items-center'>
            <Image src='/feature3.jpg' alt='Feature 3' width={200} height={150} />
            <h3 className='text-lg font-bold text-gray-900 mt-2'>Feature 3</h3>
            <p className='text-sm text-gray-600 mt-1'>Description of feature 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;