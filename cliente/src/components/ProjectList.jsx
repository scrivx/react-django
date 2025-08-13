import { useEffect, useState } from 'react'
import { getAllProjects } from '../api/project.api'
import { ProjectCard } from './Card'

export function ProjectList() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function loadProjects() {
      const res = await getAllProjects()
      setProjects(res.data)
    }
    loadProjects()
  }, [])

  return (
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
