const technologyCategories = [
  {
    title: 'Frontend',
    description: 'Expertise in modern frontend frameworks and libraries.',
    items: ['ReactJs', 'VueJs', 'NextJs', 'Angular'],
  },
  {
    title: 'Backend',
    description: 'Robust backend development using various programming languages and frameworks.',
    items: ['PHP', '.NET', 'NodeJs', 'Ruby on Rails', 'Python', 'Java', 'Golang', 'NestJs'],
  },
  {
    title: 'Mobile',
    description: 'Developing native and cross-platform mobile applications.',
    items: ['Android', 'iOS App', 'Flutter', 'React Native'],
  },
  {
    title: 'DevOps',
    description: 'Implementing practices for faster and more reliable software delivery.',
    items: ['AWS', 'Azure', 'GCP'],
  },
  {
    title: 'QA',
    description: 'Ensuring the quality and reliability of software through comprehensive testing.',
    items: ['Manual', 'Automated'],
  },
  {
    title: 'RPA',
    description: 'Automating repetitive tasks using leading RPA platforms.',
    items: ['UiPath', 'Power Automate'],
  },
  {
    title: 'Others',
    description: 'Specialized skills in emerging and niche technology areas.',
    items: ['AI', 'Chatbot', 'Data Engineers'],
  },
  {
    title: 'Full Stack',
    description: 'Comprehensive development across both frontend and backend technologies.',
    items: ['MERN', 'MEAN', 'Java Full Stack', '.NET Full Stack'],
  },
  {
    title: 'CRM',
    description: 'Implementing and customizing leading CRM platforms.',
    items: ['Salesforce', 'Microsoft Dynamics 360'],
  },
];

export default function ConsultingServices() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">IT Consultancy</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our IT Consultancy services cover a wide spectrum of technologies and domains, providing expert guidance to help your business navigate the complex digital landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Technologies and Expertise Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Expertise</h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            We have deep expertise across various technology stacks and areas, enabling us to provide comprehensive and tailored consulting solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {technologyCategories.map((category) => (
              <div key={category.title} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900 mb-2">{category.title}</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 mb-4">{category.description}</dd>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <ul role="list" className="space-y-3 text-sm leading-6 text-gray-700">
                    {category.items.map((item) => (
                      <li key={item} className="flex gap-x-3">
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
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 