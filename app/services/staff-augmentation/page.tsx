const services = [
  {
    name: 'Flexible Staffing Models',
    description: 'Offering various engagement models including temporary, contract-to-hire, and direct placement to fit your needs.',
    features: [
      'Temporary Staffing',
      'Contract-to-Hire',
      'Direct Placement',
      'Project-Based Staffing',
      'Talent Outsourcing'
    ],
  },
  {
    name: 'Access to Skilled Professionals',
    description: 'Providing access to a wide pool of pre-vetted IT professionals with diverse skill sets and experience.',
    features: [
      'Expert IT Talent',
      'Specialized Skills',
      'Industry Experience',
      'Rapid Placement',
    ],
  },
  {
    name: 'Scalable Workforce Solutions',
    description: 'Quickly scale your team up or down based on project requirements and business fluctuations.',
    features: [
      'Rapid Scaling',
      'Resource Flexibility',
      'Cost Efficiency',
      'Reduced Hiring Overhead',
    ],
  },
];

export default function StaffAugmentation() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Staff Augmentation</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Bridge your talent gaps and scale your team efficiently with our expert staff augmentation services.
            </p>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Staff Augmentation Solutions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find the right IT professionals to integrate seamlessly with your existing team and achieve your project goals.
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