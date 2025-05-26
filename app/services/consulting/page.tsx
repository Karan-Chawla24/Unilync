const services = [
  {
    name: 'Business Strategy',
    description: 'Develop a winning business strategy with our expert consultants. We help you identify opportunities and create a roadmap for success.',
    features: [
      'Market Analysis',
      'Competitive Strategy',
      'Growth Planning',
      'Business Model Innovation',
      'Strategic Roadmapping',
    ],
  },
  {
    name: 'Process Optimization',
    description: 'Streamline your operations and improve efficiency with our process optimization services. We help you identify and eliminate bottlenecks.',
    features: [
      'Process Analysis',
      'Workflow Optimization',
      'Quality Management',
      'Performance Metrics',
      'Continuous Improvement',
    ],
  },
  {
    name: 'Change Management',
    description: 'Navigate organizational change successfully with our change management expertise. We help you implement changes smoothly and effectively.',
    features: [
      'Change Strategy',
      'Stakeholder Management',
      'Communication Planning',
      'Training & Development',
      'Change Impact Assessment',
    ],
  },
  {
    name: 'Market Analysis',
    description: 'Gain valuable insights into your market with our comprehensive analysis services. We help you understand your customers and competition.',
    features: [
      'Market Research',
      'Competitor Analysis',
      'Customer Insights',
      'Trend Analysis',
      'Market Entry Strategy',
    ],
  },
  {
    name: 'Performance Improvement',
    description: 'Enhance your business performance with our targeted improvement strategies. We help you achieve operational excellence.',
    features: [
      'Performance Assessment',
      'Efficiency Optimization',
      'Resource Allocation',
      'Cost Reduction',
      'Quality Enhancement',
    ],
  },
];

export default function ConsultingServices() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Consulting Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your business with our expert consulting services. We provide strategic guidance and
              practical solutions to help you achieve your goals.
            </p>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Consulting Solutions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from our range of consulting services designed to help your business grow and succeed.
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