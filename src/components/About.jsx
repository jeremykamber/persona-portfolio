const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 
    'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Tailwind CSS'
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building 
              web applications. I love creating elegant solutions to complex problems and 
              am constantly learning new technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new hiking trails, reading 
              about the latest tech trends, or contributing to open-source projects.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
