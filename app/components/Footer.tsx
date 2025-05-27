import Link from 'next/link';

// Updated list to reflect new core services - now used for titles
// const servicesList = [
//   'IT Consultancy',
//   'Technical Support',
//   'Staff Augmentation',
// ];

// New lists for sub-services under each core service
const itConsultancySubservices = [
  'Digital Transformation',
  'Cloud Strategy',
  'Technology Roadmap',
  'Architecture Review',
];

const technicalSupportSubservices = [
  'Help Desk Support',
  'System Monitoring',
  'Troubleshooting',
  'Maintenance Services',
];

const staffAugmentationSubservices = [
  'Temporary Staffing',
  'Contract-to-Hire',
  'Direct Placement',
  'Talent Sourcing',
];

// Removed consultingList and financeList
// const consultingList = [
//   'Business Strategy',
//   'Process Optimization',
//   'Change Management',
//   'Market Analysis',
//   'Performance Improvement',
// ];
// const financeList = [
//   'Financial Planning',
//   'Investment Advisory',
//   'Risk Management',
//   'Tax Planning',
//   'Business Valuation',
// ];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Services', href: '/services' },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/unilync-soft-tech-32a877367/',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.79c0-2.508 1.493-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.44c.901 0 1.63.729 1.63 1.63v10.08c0 .901-.729 1.63-1.63 1.63H4.188c-.901 0-1.63-.729-1.63-1.63V7.07c0-.901.729-1.63 1.63-1.63h15.624zM10 15.464v-6.928L15.953 12 10 15.464z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-50 via-white to-indigo-100 border-t border-gray-200 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Service and Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-200">
          <div>
            <h3 className="text-lg font-bold text-indigo-700 mb-4">IT Consultancy</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              {itConsultancySubservices.map((item) => (
                <li key={item} className="flex items-center gap-2">
                   <svg className="h-4 w-4 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.137-.089l4.003-5.5z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-indigo-700 mb-4">Technical Support</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              {technicalSupportSubservices.map((item) => (
                <li key={item} className="flex items-center gap-2">
                   <svg className="h-4 w-4 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.137-.089l4.003-5.5z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-indigo-700 mb-4">Staff Augmentation</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              {staffAugmentationSubservices.map((item) => (
                <li key={item} className="flex items-center gap-2">
                   <svg className="h-4 w-4 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.857a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.06l3 3a.75.75 0 001.137-.089l4.003-5.5z" clipRule="evenodd" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-indigo-700 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-indigo-600 transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-6 py-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116.657 7.343z" /></svg>
            <span>A-354, First floor, Sushant Lok 2, Sector 55, Gurgaon 122011</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" /></svg>
            <a href="tel:+917719190000" className="hover:text-indigo-600">+91 7719190000</a>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-8 0v-1" /></svg>
            <a href="mailto:talent_unilync@outlook.com" className="hover:text-indigo-600">talent_unilync@outlook.com</a>
          </div>
        </div>
         {/* Social Links */}
        <div className="flex justify-center space-x-6 py-6">
          {socialLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-gray-400 border-t border-gray-200">
          &copy; {new Date().getFullYear()} UniLync Soft-Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 