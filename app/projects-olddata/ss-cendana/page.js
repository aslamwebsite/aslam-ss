import React from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation
import projectData from '@/json/project.json';

const Page = () => {
  const router = useRouter();
  const { projectName } = router.query;
  const project = projectData.find((p) => p.ProjectName.replace(/\s/g, '-').toLowerCase() === projectName);

  if (!project) {
    // Handle project not found
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h1>{project.ProjectName}</h1>
      <p>{project.location}</p>
    </div>
  );
};

export default Page;
