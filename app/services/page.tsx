import Link from 'next/link';
import Image from 'next/image';

const coreServices = [
  {
    name: 'IT Consultancy',
    description: 'Providing expert advice and strategic planning for your technology needs.',
    imageSrc: '/images/software_dev.jpg',
    link: '/services/it-consultancy'
  },
  {
    name: 'Technical Support',
    description: 'Offering reliable assistance and maintenance to ensure your systems run smoothly.',
    imageSrc: '/images/consultancy.jpg',
    link: '/services/technical-support'
  },
  {
    name: 'Staff Augmentation',
    description: 'Providing skilled IT professionals to supplement your team and meet project demands.',
    imageSrc: '/images/staff.jpg',
    link: '/services/staff-augmentation'
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
            At UniLync Soft-Tech, we offer specialized expertise in IT Consultancy, reliable Technical Support, and flexible Staff Augmentation to drive your business success.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {coreServices.map((service) => (
              <div key={service.name} className="group relative flex flex-col rounded-2xl overflow-hidden shadow-xl h-64 sm:h-72 md:h-80 lg:h-[400px] bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                {/* Using next/image for optimized background image */}
                <Image
                  src={service.imageSrc}
                  alt={service.name}
                  fill={true}
                  className="object-cover transition-transform duration-500 group-hover:scale-110 object-center"
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
                    className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 shadow-lg mb-4"
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
        <div className="relative isolate overflow-hidden mt-24 sm:mt-32">
          {/* Background Image */}
          <div className="absolute inset-0 h-full w-full">
            {/* Mobile Background Image */}
            <Image
              src="/images/whyusmobile.jpg"
              alt="Why Choose UniLync"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32 lg:px-8 text-white min-h-[600px] flex items-center">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl drop-shadow-lg">Why Choose UniLync?</h2>
              <div className="mt-16">
                <ul role="list" className="space-y-6 text-base leading-7 text-gray-100">
                  {whyChooseUs.map((item) => (
                    <li key={item} className="flex gap-x-3 items-start">
                      <svg className="h-6 w-5 flex-none text-indigo-400 mt-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span className="drop-shadow-md">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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