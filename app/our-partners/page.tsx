import Image from 'next/image';
import Link from 'next/link';

const directors = [
  {
    name: 'Devanshi Jhamb',
    role: 'Co-Founder & CEO',
    imageUrl: '/images/Devanshi.png',
    bio: 'IT staffing expert with 5+ years in US recruitment, client handling, BDM, and strategic talent acquisition.',
  },
  {
    name: 'Dikshant Nagpal',
    role: 'Co-Founder & CFO',
    imageUrl: '/images/Dikshant.png',
    bio: 'CA with 6+ yrs experience, FAFD certified, expert in audit, risk, tax, and virtual CFO services for IT and tech firms.',
  },
  {
    name: 'Sheenam Taneja',
    role: 'Project Manager',
    imageUrl: '/images/Sheenam.png',
    bio: 'IT Project Manager with 10+ years experience in project delivery, technical recruitment, and client management.',
  },
  {
    name: 'Anju Thakur',
    role: 'Talent Acquisition Specialist',
    imageUrl: '/images/Anju.png',
    bio: 'IT professional with 3+ years at UniLync Soft-Tech, skilled in client management, tech advisory, and business growth.',
  },
];

export default function OurPartners() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Our Partners Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-10">Our Partners</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the experienced professionals and partners who drive our success.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {directors.map((director) => (
            <li key={director.name} className="relative rounded-2xl overflow-hidden shadow group text-center">
              {/* Image container with hover effect for bio */}
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-[#E2DBD0]">
                <Image
                  className="object-contain w-full h-full"
                  src={director.imageUrl}
                  alt={director.name}
                  fill
                />
                {/* Overlay for bio on hover - Adjusted for better visibility */}
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                  <p className="text-white text-sm leading-relaxed text-left max-h-full overflow-y-auto">
                    {director.bio.replace(/\n/g, ' ')}
                  </p>
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

export const metadata = {
  title: 'Unilync Soft-tech - Our Valued Partners',
  description: 'Discover the partners who collaborate with Unilync Soft-tech to deliver exceptional IT, Consulting, and Financial solutions.',
}; 