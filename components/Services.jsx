import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const people = [
  {
    name: 'Descriptive Essay',
    imageUrl:
      'https://images.unsplash.com/photo-1462642109801-4ac2971a3a51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
    bio: 'This kind of essay calls for the description of a phenomenon, event, or process.',
  },
  {
    name: 'Compare and Contrast Essay',
    imageUrl:
      'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    bio: 'Our writers will define and explain the true meaning and importance of terms and concepts.',
  },
  {
    name: 'Cause and Effect Essay',
    imageUrl:
      'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    bio: 'As the name suggests, this type of essay requires juxtaposition of two or more objects, things, events, etc.',
  },
  {
    name: 'Narrative Essay',
    imageUrl:
      'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    bio: 'Our writers will tell a moving story about a thought-provoking experience.',
  },
  {
    name: 'Argumentative Essay',
    imageUrl:
      'https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1272&q=80',
    bio: 'If you want to get a solid argument across, order an argumentative essay.',
  },
  {
    name: 'Expository Essay',
    imageUrl:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    bio: 'Expository writing brings a new light to an issue and requires extensive research',
  },

  // More people...
];

export default function Services() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <ul
            role="list"
            className="space-y-64 md:space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8 flex flex-col ">
                  <div className="aspect-w-3 mb-10 md:mb-0 aspect-h-2  md:h-0 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="rounded-lg object-cover shadow-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="sm:col-span-2 ">
                    <div className="md:space-y-4 space-y-4 ">
                      <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
