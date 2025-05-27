import Image from 'next/image';
import Link from 'next/link';

const directors = [
  {
    name: 'Anju Thakur',
    role: 'Chief Executive Officer',
    imageUrl: '/images/person.jpg',
    bio: 'Results-driven IT Services and Consulting professional with over 3 years of experience, currently engaged with UniLync Soft-Tech Pvt. Ltd., working independently in dual roles as a Technical Account Specialist (TAS) and Business Development Executive (BDE). I specialize in aligning business needs with tailored IT solutions, managing client relationships, and driving strategic growth in competitive markets.',
  },
  {
    name: 'Devanshi Jhamb',
    role: 'Chief Technology Officer',
    imageUrl: '/images/person.jpg',
    bio: 'Experienced IT Recruitment & Client Relationship Professional | US IT Staffing | BDM | Talent Acquisition | Resource Management. With over 5 years of progressive experience in the IT recruitment and staffing industry, I bring a comprehensive skill set spanning Client Relationship Management, Business Development, Resource Management, and End-to-End IT Recruitment—both in domestic and US markets.',
  },
  {
    name: 'Sheenam Taneja',
    role: 'Chief Financial Officer',
    imageUrl: '/images/person.jpg',
    bio: 'IT Project Manager | Team Lead | Technical Recruitment Specialist | Client Relationship & Resource Management | B.Tech in Computer Science | 10+ Years. With over a decade of experience in the IT industry, I bring a unique blend of Project Management, Technical Recruitment, and Client Relationship expertise.',
  },
];

export default function OurPartners() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Our Partners Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Partners</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the experienced professionals and partners who drive our success.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {directors.map((director) => (
            <li key={director.name} className="relative rounded-2xl overflow-hidden shadow-lg group text-center">
              {/* Image container with hover effect for bio */}
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
                <Image
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  src={director.imageUrl}
                  alt={director.name}
                  fill
                />
                {/* Overlay for bio on hover - Adjusted for transparency */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-white text-center text-sm leading-6">
                  {director.bio}
                </div>
              </div>
              {/* Clickable Name */}
              <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer">
                <Link href={`/our-partners/${director.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  {director.name}
                </Link>
              </h3>
              <p className="text-base leading-7 text-indigo-600">{director.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 