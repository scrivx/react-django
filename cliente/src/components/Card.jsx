import { useNavigate } from 'react-router-dom'

export function ProjectCard({ project }) {
  const navigate = useNavigate()

  return (
    <div
      class="group w-full rounded-lg bg-[rgb(41,49,79)] p-5 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_rgb(244,67,54)]"
      onClick={() => {
        navigate(`/projects/${project.id}`)
      }}
    >
      <h1 class="text-xl font-bold text-white mb-2">{project.titulo}</h1>
      <p class="text-lg text-gray-300 ">{project.descripcion}</p>
    </div>
  )
}
