import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <div class="flex justify-between items-center py-3">
      <Link to="/projects">
        <h1 class="font-bold text-3xl mb-4 text-gray-200">Proyectos</h1>
      </Link>

      <button class="overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-px font-medium text-white shadow-[0_1000px_0_0_hsl(0_0%_100%_/_0%)_inset] transition-colors hover:shadow-[0_1000px_0_0_hsl(0_0%_100%_/_2%)_inset]">
        <div class="relative rounded-xl bg-slate-950/50 px-4 py-3 transition-colors group-hover/btn:bg-transparent">
          <span class="relative flex items-center justify-center gap-2">
            <Link to="/projects-create">Crear Proyecto</Link>
          </span>
        </div>
      </button>
    </div>
  )
}
