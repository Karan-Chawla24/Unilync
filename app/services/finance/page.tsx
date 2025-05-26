const services = [
  {
    name: 'Financial Planning',
    description: 'Develop a comprehensive financial plan for your business with our expert guidance. We help you make informed financial decisions.',
    features: [
      'Budget Planning',
      'Cash Flow Management',
      'Financial Forecasting',
      'Capital Planning',
      'Financial Strategy',
    ],
  },
  {
    name: 'Investment Advisory',
    description: 'Make smart investment decisions with our expert advisory services. We help you maximize returns while managing risk.',
    features: [
      'Portfolio Management',
      'Risk Assessment',
      'Investment Strategy',
      'Asset Allocation',
      'Performance Analysis',
    ],
  },
  {
    name: 'Risk Management',
    description: 'Protect your business with our comprehensive risk management solutions. We help you identify and mitigate financial risks.',
    features: [
      'Risk Assessment',
      'Risk Mitigation',
      'Insurance Planning',
      'Compliance Management',
      'Crisis Management',
    ],
  },
  {
    name: 'Tax Planning',
    description: 'Optimize your tax strategy with our expert tax planning services. We help you minimize tax liability while ensuring compliance.',
    features: [
      'Tax Strategy',
      'Tax Compliance',
      'Tax Optimization',
      'International Tax',
      'Tax Reporting',
    ],
  },
  {
    name: 'Business Valuation',
    description: 'Understand your business value with our comprehensive valuation services. We provide accurate and detailed business assessments.',
    features: [
      'Business Assessment',
      'Market Valuation',
      'Asset Valuation',
      'Merger & Acquisition',
      'Due Diligence',
    ],
  },
];

export default function FinanceServices() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Financial Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Achieve financial success with our comprehensive financial services. We provide expert guidance
              and solutions to help you manage and grow your business finances.
            </p>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Financial Solutions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from our range of financial services designed to help your business thrive.
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