import Image from 'next/image';
import { notFound } from 'next/navigation';

// Re-defining the directors data for this specific page
const directors = [
  {
    name: 'John Smith',
    role: 'Chief Executive Officer',
    imageUrl: '/images/person.jpg',
    bio: 'John has over 20 years of experience in the technology industry, leading successful companies through digital transformation.',
    // Add more detailed bio or sections here if needed
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    imageUrl: '/images/person.jpg',
    bio: 'Sarah is a technology visionary with expertise in cloud computing and artificial intelligence.',
    // Add more detailed bio or sections here if needed
  },
  {
    name: 'Michael Chen',
    role: 'Chief Financial Officer',
    imageUrl: '/images/person.jpg',
    bio: 'Michael brings extensive experience in financial management and strategic planning.',
    // Add more detailed bio or sections here if needed
  },
];

// Function to generate static params for SSG/ISR
export async function generateStaticParams() {
  return directors.map((director) => ({
    directorNameSlug: director.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

type Props = {
  params: {
    directorNameSlug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function DirectorDetail({ params }: Props) {
  const { directorNameSlug } = params;

  // Find the director based on the slug
  const director = directors.find(
    (dir) => dir.name.toLowerCase().replace(/\s+/g, '-') === directorNameSlug
  );

  // If director is not found, show 404
  if (!director) {
    notFound();
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              className="aspect-[3/2] w-full max-w-xs rounded-2xl object-cover shadow-lg"
              src={director.imageUrl}
              alt={director.name}
              width={500}
              height={300}
            />
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{director.name}</h2>
            <p className="text-xl leading-8 text-indigo-600 mt-2">{director.role}</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">{director.bio}</p>
            {/* Add more detailed sections based on added data in the directors array */}
          </div>
        </div>
      </div>
    </div>
  );
} 