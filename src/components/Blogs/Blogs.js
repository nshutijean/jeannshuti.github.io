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

      <div className='blogs__cta'>
        <a
            href='https://dev.to/alexandercastillo'
            target='_blank'
            rel='noreferrer'
            aria-label='live preview'
            className='link link--icon'
        >
            More Blogs
        </a>
        </div>
    </section>
    
  )
}

export default Blogs
