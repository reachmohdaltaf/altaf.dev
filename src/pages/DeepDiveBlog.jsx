import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { deepDiveGroup1 } from './content'

const DeepDiveDetail = () => {
  const { slug } = useParams()
  const blog = deepDiveGroup1.find((item) => item.slug === slug)

  if (!blog) return <div className="p-4 text-red-500">Blog not found</div>
        useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, [slug]);
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-[28px] font-bold text-accent">{blog.title}</h1>
      <img src={blog.img} alt={blog.title} className="mt-4 w-full max-w-2xl rounded" />
      <p className="mt-6 text-[16px] text-gray-300 whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  )
}

export default DeepDiveDetail
