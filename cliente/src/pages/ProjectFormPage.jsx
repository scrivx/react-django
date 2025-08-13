import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import {
  createProject,
  deleteProject,
  updateProject,
  getProject,
} from '../api/project.api'
import { useNavigate, useParams } from 'react-router-dom'

export function ProjectFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      // hay otras formas de visualizar el toast (https://react-hot-toast.com/)
      await updateProject(params.id, data)
      toast.success('Proyecto actualizado!')
    } else {
      // otra forma de usar el toast usando promise
      await toast.promise(createProject(data), {
        loading: 'Cargando...',
        success: <b>Proyecto creado!</b>,
        error: <b>No se ha podido crear</b>,
      })
    }
    navigate('/projects')
  })

  useEffect(() => {
    async function loadProject() {
      if (params.id) {
        const res = await getProject(params.id)
        setValue('titulo', res.data.titulo)
        setValue('descripcion', res.data.descripcion)
      }
    }
    loadProject()
  }, [])

  return (
    <div class="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register('titulo', { required: true })}
          class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.titulo && <span>Este campo es requerido</span>}
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register('descripcion', { required: true })}
          class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
        <div class="flex justify-between mt-4">
          <button class=" block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Crear
          </button>
          {params.id && (
            <button
              class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={async () => {
                const accepted = window.confirm(
                  '¿Estás seguro de eliminar este proyecto?'
                )
                if (accepted) {
                  await deleteProject(params.id)
                  toast('Eliminado!', {
                    icon: '🗑️',
                    style: {
                      borderRadius: '10px',
                      background: '#333',
                      color: '#fff',
                    },
                  })
                  navigate('/projects')
                }
              }}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
