import Image from 'next/image';
import { notFound } from 'next/navigation';

// Re-defining the directors data for this specific page
const directors = [
  {
    name: 'Anju Thakur',
    role: 'Chief Executive Officer',
    imageUrl: '/images/person.jpg',
    bio: 'Results-driven IT Services and Consulting professional with over 3 years of experience, currently engaged with UniLync Soft-Tech Pvt. Ltd., working independently in dual roles as a Technical Account Specialist (TAS) and Business Development Executive (BDE). I specialize in aligning business needs with tailored IT solutions, managing client relationships, and driving strategic growth in competitive markets.\n\nAt UniLync Soft-Tech, I manage end-to-end client engagement—from pre-sales consultation and technical advisory to solution delivery and post-sales support. I bring a balanced skill set of technical acumen and business development expertise, allowing me to effectively bridge client requirements with scalable tech solutions.\n\nIn my role as TAS, I act as a trusted technical advisor, ensuring clients receive maximum value from our solutions. In parallel, my BDE responsibilities involve identifying growth opportunities, generating leads, and closing new business across various sectors.\n\nI\'m passionate about enabling digital transformation for businesses through innovative IT services. Let\'s connect if you\'re exploring partnerships, tech solutions, or opportunities in the IT landscape.',
  },
  {
    name: 'Devanshi Jhamb',
    role: 'Chief Technology Officer',
    imageUrl: '/images/person.jpg',
    bio: 'Experienced IT Recruitment & Client Relationship Professional | US IT Staffing | BDM | Talent Acquisition | Resource Management\n\nWith over 5 years of progressive experience in the IT recruitment and staffing industry, I bring a comprehensive skill set spanning Client Relationship Management, Business Development, Resource Management, and End-to-End IT Recruitment—both in domestic and US markets.\n\nIn my journey, I\'ve successfully handled full-cycle recruitment, from understanding client requirements and sourcing top-tier talent to negotiating offers and ensuring smooth onboarding. My exposure to US IT recruitment has equipped me with deep knowledge of technical roles, hiring challenges, visa processes (H1B, GC, USC), and compliance requirements.\n\nAs a Client Relationship Manager, I\'ve built and nurtured long-term relationships with key clients, ensuring consistent delivery, retention, and client satisfaction. In the Business Development (BDM) function, I\'ve opened new business channels, developed strategic partnerships, and increased revenue streams. My role as a Resource Manager allowed me to mentor recruitment teams, align talent pipelines with business needs, and streamline hiring processes.\n\nCore Competencies:\n• End-to-End IT Recruitment (Domestic & US Staffing)\n• Client Relationship & Account Management\n• Business Development & Lead Generation\n• Talent Acquisition Strategy\n• Team Leadership & Resource Allocation\n• Recruitment Tools: ATS, Job Portals (Dice, Monster, CareerBuilder), LinkedIn, etc.\n• Excellent Communication, Negotiation & Interpersonal Skills\n\nI am passionate about matching the right talent with the right opportunities and delivering recruitment solutions that drive business growth.',
  },
  {
    name: 'Sheenam Taneja',
    role: 'Chief Financial Officer',
    imageUrl: '/images/person.jpg',
    bio: 'IT Project Manager | Team Lead | Technical Recruitment Specialist | Client Relationship & Resource Management | B.Tech in Computer Science | 10+ Years\n\nWith over a decade of experience in the IT industry, I bring a unique blend of Project Management, Technical Recruitment, and Client Relationship expertise. My professional journey has equipped me to lead projects end-to-end while also ensuring talent alignment through strategic hiring and candidate sourcing, especially for niche and hard-to-fill IT roles.\n\nHolding a Bachelor\'s degree in Computer Science, I bring a strong technical foundation that allows me to understand complex job requirements, communicate effectively with engineering teams, and identify top-tier candidates with precision. My hands-on experience in sourcing, screening, and onboarding talent across various domains has been instrumental in building high-performing teams.\n\nAs a Project Manager, I\'ve successfully delivered IT solutions by coordinating between stakeholders, managing resource allocation, and maintaining project timelines. My background in Recruitment and Resource Management enables me to align technical hiring strategies with broader project goals, especially in fast-paced and dynamic environments.\n\nCore Expertise:\n• IT Project Management & Delivery\n• End-to-End Technical Recruitment\n• Niche Skill Sourcing & Screening\n• Client Relationship & Account Management\n• Resource Planning & Allocation\n• Cross-Functional Team Leadership\n• Recruitment Platforms: LinkedIn, Dice, Monster, Job Diva, ATS tools\n\nDriven by a passion for both technology and talent, I thrive in roles that demand both strategic oversight and hands-on execution. My goal is to bridge the gap between business needs and the right talent, ensuring timely project delivery and long-term success.',
  },
];

// Function to generate static params for SSG/ISR
export async function generateStaticParams() {
  return directors.map((director) => ({
    directorNameSlug: director.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

type PageProps = {
  params: Promise<{
    directorNameSlug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function DirectorDetail({ params }: PageProps) {
  const { directorNameSlug } = await params;

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
            <div className="mt-6 text-lg leading-8 text-gray-600 whitespace-pre-line">{director.bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
} 