import uniqid from 'uniqid'
import { blogs } from '../../portfolio'
import BlogContainer from '../BlogContainer/BlogContainer'
import './Blogs.css'

const Blogs = () => {
  if (!blogs.length) return null

  return (
    <section id='blogs' className='section blogs'>
      <h2 className='section__title'>Blogs</h2>

      <div className='blogs__grid'>
        {blogs.map((blog) => (
          <BlogContainer key={uniqid()} blog={blog} />
        ))}
      </div>
    </section>
  )
}

export default Blogs
