import Link from 'next/link';
import Image from 'next/image';

const coreServices = [
  {
    name: 'IT Consultancy',
    description: 'We provide strategic IT consulting to help businesses align their technology goals with organizational objectives. From digital transformation roadmaps to cloud migration strategies, our insights enable smarter, future-ready decisions.',
    imageSrc: '/images/consultancy.jpg',
    link: '/services/consulting'
  },
  {
    name: 'Software Development & Services',
    description: 'Our end-to-end software development services cover everything from application design and development to testing, deployment, and support. We specialize in scalable web, mobile, and enterprise solutions across multiple industries.',
    imageSrc: '/images/software_dev.jpg',
    link: '/services/it'
  },
  {
    name: 'Staff Augmentation',
    description: 'We provide skilled IT professionals on demand to help businesses scale quickly and cost-effectively. Our extensive talent network ensures you get the right expertise to meet your project requirements and timelines.',
    imageSrc: '/images/staff.jpg',
    link: '/services/finance'
  },
];

const whyChooseUs = [
  'Client-Centric Approach: We listen, understand, and deliver solutions that align with your business goals.',
  'Technical Excellence: Our teams bring deep expertise in emerging technologies and best practices.',
  'Scalable Solutions: Whether you&apos;re growing fast or optimizing operations, we offer flexible models to suit your needs.',
  'Commitment to Quality: We uphold high standards of quality, transparency, and accountability in everything we do.'
];

export default function Services() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Core Services Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Core Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At UniLync Soft-Tech, we specialize in connecting talent with technology to drive your business forward.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {coreServices.map((service) => (
              <div key={service.name} className="group relative flex flex-col rounded-2xl overflow-hidden shadow-xl h-[400px] bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {/* Using next/image for optimized background image */}
                <Image
                  src={service.imageSrc}
                  alt={service.name}
                  fill={true}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Darker gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" />
                <div className="relative z-10 p-8 flex flex-col justify-between flex-grow text-white">
                  <div>
                    <dt className="text-2xl font-bold leading-7 mb-4 text-white drop-shadow-lg">
                      {service.name}
                    </dt>
                    <dd className="text-base leading-7 text-gray-100 drop-shadow-md">
                      {service.description}
                    </dd>
                  </div>
                  <Link 
                    href={service.link}
                    className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
                  >
                    Learn More
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Why Choose Us Section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose UniLync?</h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
            <ul role="list" className="space-y-6 text-base leading-7 text-gray-700">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Concluding Paragraph */}
        <div className="mx-auto max-w-2xl text-center mt-24 sm:mt-32">
          <p className="mt-6 text-lg leading-8 text-gray-600">
            At UniLync Soft-Tech, we don&apos;t just build solutions—we build lasting partnerships. Let&apos;s connect your vision with the right technology.
          </p>
        </div>
      </div>
    </div>
  );
} 