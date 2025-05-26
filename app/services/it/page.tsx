const services = [
  {
    name: 'Cloud Computing Solutions',
    description: 'Migrate to the cloud with our comprehensive cloud computing services. We help you choose the right cloud platform and ensure a smooth transition.',
    features: [
      'Cloud Migration Strategy',
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
      'Cloud Security',
    ],
  },
  {
    name: 'Cybersecurity Services',
    description: 'Protect your business with our advanced cybersecurity solutions. We implement robust security measures to safeguard your data and systems.',
    features: [
      'Security Assessment',
      'Threat Detection',
      'Vulnerability Management',
      'Security Monitoring',
      'Incident Response',
    ],
  },
  {
    name: 'Software Development',
    description: 'Custom software solutions tailored to your business needs. Our expert developers create scalable and maintainable applications.',
    features: [
      'Custom Application Development',
      'Web Development',
      'Mobile App Development',
      'API Development',
      'Legacy System Modernization',
    ],
  },
  {
    name: 'IT Infrastructure Management',
    description: 'Optimize your IT infrastructure with our comprehensive management services. We ensure your systems run efficiently and reliably.',
    features: [
      'Network Management',
      'Server Management',
      'Storage Solutions',
      'Disaster Recovery',
      'Performance Optimization',
    ],
  },
  {
    name: 'Digital Transformation',
    description: 'Transform your business with our digital solutions. We help you leverage technology to improve operations and customer experience.',
    features: [
      'Digital Strategy',
      'Process Automation',
      'Customer Experience',
      'Data Analytics',
      'Business Intelligence',
    ],
  },
];

export default function ITServices() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">IT Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your business with our comprehensive IT solutions. We combine cutting-edge technology
              with expert knowledge to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our IT Solutions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from our range of IT services designed to help your business thrive in the digital age.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">{service.name}</dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 