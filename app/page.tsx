import { useEffect, useState } from 'react'
// @ts-ignore
import { supabase } from './supabase'
import Navbar from './component/navbar'

type Project = {
  id: string
  title: string
  description: string
  image_url?: string
  demo?: string
  github?: string
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) console.error(error)
      else setProjects(data as Project[])
    }
    fetch()
  }, [])

  return (
    <div>
      <Navbar />
      <main className="p-6 max-w-5xl mx-auto space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold">My Portfolio</h1>
          <p className="mt-2 text-gray-700">A showcase of my projects</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className="border rounded-lg p-4 hover:shadow-lg">
                {proj.image_url && (
                  <img
                    src={proj.image_url}
                    alt={proj.title}
                    className="w-full h-48 object-cover rounded"
                  />
                )}
                <h3 className="text-xl font-bold mt-2">{proj.title}</h3>
                <p className="text-gray-600">{proj.description}</p>
                <div className="mt-2 space-x-2">
                  {proj.github && (
                    <a href={proj.github} target="_blank" className="text-blue-600">
                      GitHub
                    </a>
                  )}
                  {proj.demo && (
                    <a href={proj.demo} target="_blank" className="text-green-600">
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
            {projects.length === 0 && <p>No projects found.</p>}
          </div>
        </section>
      </main>
    </div>
  )
}
