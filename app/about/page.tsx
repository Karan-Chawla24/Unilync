import Image from 'next/image';

const directors = [
  {
    name: 'John Smith',
    role: 'Chief Executive Officer',
    imageUrl: '/images/person.jpg',
    bio: 'John has over 20 years of experience in the technology industry, leading successful companies through digital transformation.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    imageUrl: '/images/person.jpg',
    bio: 'Sarah is a technology visionary with expertise in cloud computing and artificial intelligence.',
  },
  {
    name: 'Michael Chen',
    role: 'Chief Financial Officer',
    imageUrl: '/images/person.jpg',
    bio: 'Michael brings extensive experience in financial management and strategic planning.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                UniLync Soft-Tech Private Limited is a next-generation IT solutions provider, founded in 2025 on the principle of &apos;Bridging Talents with Technologies&apos;, dedicated to empowering businesses through innovative technologies, strategic consulting, and expert talent solutions. Headquartered in Gurugram Haryana, UniLync Soft-Tech specializes in IT consultancy, end-to-end software services, and staff augmentation where, we provide a wide pool of talents to connect with right clients tailored to meet the dynamic demands of today&apos;s digital ecosystem.
                At UniLync Soft-Tech, we bridge the gap between business needs and technologies by delivering customized solutions that drive efficiency, scalability, and innovation. Whether you&apos;re a startup looking for rapid development or an enterprise seeking strategic digital transformation, our team of seasoned professionals ensures optimal results through deep domain expertise and a client-first approach.
              </p>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-100/20">
              <Image
                src="/images/about.jpg"
                alt="About UniLync Soft-Tech"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/our_values.jpg)` }}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-white">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl drop-shadow-lg">Our Values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-200 drop-shadow-md">
              Our core values guide everything we do, from how we work with clients to how we build our team.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white drop-shadow">Innovation</dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300 drop-shadow-sm">
                  <p className="flex-auto">
                    We constantly explore new technologies and approaches to deliver the best solutions for our clients.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white drop-shadow">Excellence</dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300 drop-shadow-sm">
                  <p className="flex-auto">
                    We strive for excellence in everything we do, from client service to technical implementation.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white drop-shadow">Integrity</dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300 drop-shadow-sm">
                  <p className="flex-auto">
                    We maintain the highest standards of integrity in all our business relationships and operations.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Leadership Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the experienced professionals who lead our company.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {directors.map((director) => (
            <li key={director.name}>
              <Image
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={director.imageUrl}
                alt={director.name}
                width={500}
                height={300}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{director.name}</h3>
              <p className="text-base leading-7 text-indigo-600">{director.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{director.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 