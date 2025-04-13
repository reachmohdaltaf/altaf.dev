import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './content.js';

function ProjectArticle() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // 👇 Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) return <p>Project not found</p>;

  const { title, year, description, article } = project;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-accent mb-2">{title}</h1>
      <p className="text-gray-600 mb-2">{year}</p>
      <p className="mb-6 text-lg">{description}</p>

      {article ? (
        <>
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p className="mb-4">{article.overview}</p>

          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc pl-6 mb-4">
            {article.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <p className="mb-4">{article.techStack.join(', ')}</p>

          <h2 className="text-xl font-semibold mb-2">Challenges</h2>
          <p className="mb-4">{article.challenges}</p>

          <h2 className="text-xl font-semibold mb-2">Learnings</h2>
          <p>{article.learnings}</p>
        </>
      ) : (
        <p>Full article coming soon...</p>
      )}
    </div>
  );
}

export default ProjectArticle;
