const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment integration, inventory management, and real-time analytics.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with drag-and-drop kanban boards and team collaboration features.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    link: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location-based forecasts and interactive maps.',
    tech: ['React', 'REST APIs', 'Chart.js', 'Tailwind'],
    link: '#'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
