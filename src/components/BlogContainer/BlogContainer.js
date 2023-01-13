import uniqid from 'uniqid'
// import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './BlogContainer.css'

const BlogContainer = ({ blog }) => (
  <div className='blog'>
    <h3>{blog.title}</h3>

    <p className='blog__description'>{blog.description}</p>
    {/* {blog.stack && (
      <ul className='blog__stack'>
        {blog.stack.map((item) => (
          <li key={uniqid()} className='blog__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )} */}

    {blog.url && (
      <a
        href={blog.url}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default BlogContainer
