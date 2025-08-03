'use client'
import { useEffect, useState } from 'react'
// @ts-ignore
import { supabase } from '../supabase'

type Project = {
  id: string
  title: string
  description: string
}

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)

  // Fetch all projects from Supabase
  const fetchProjects = async () => {
    const { data, error } = await supabase.from('projects').select('*')
    if (error) {
      console.error(error)
    } else {
      setProjects(data as Project[])
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  // Add a new project
  const addProject = async () => {
    if (!title || !description) return alert('Fill both fields!')
    const { error } = await supabase.from('projects').insert([{ title, description }])
    if (error) console.error(error)
    else {
      setTitle('')
      setDescription('')
      fetchProjects()
    }
  }

  // Update existing project
  const updateProject = async () => {
    if (!editingId) return
    const { error } = await supabase.from('projects')
      .update({ title, description })
      .eq('id', editingId)
    if (error) console.error(error)
    else {
      setEditingId(null)
      setTitle('')
      setDescription('')
      fetchProjects()
    }
  }

  // Delete a project
  const deleteProject = async (id: string) => {
    const { error } = await supabase.from('projects').delete().eq('id', id)
    if (error) console.error(error)
    else fetchProjects()
  }

  // Fill fields for editing
  const editProject = (project: Project) => {
    setEditingId(project.id)
    setTitle(project.title)
    setDescription(project.description)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      <div className="mb-6">
        <input
          className="border p-2 mr-2 w-60"
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 mr-2 w-60"
          type="text"
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {editingId ? (
          <button onClick={updateProject} className="bg-yellow-500 text-white p-2 rounded">Update</button>
        ) : (
          <button onClick={addProject} className="bg-blue-500 text-white p-2 rounded">Add</button>
        )}
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Description</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td className="border p-2">{project.title}</td>
              <td className="border p-2">{project.description}</td>
              <td className="border p-2 space-x-2">
                <button onClick={() => editProject(project)} className="text-yellow-600">Edit</button>
                <button onClick={() => deleteProject(project.id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
