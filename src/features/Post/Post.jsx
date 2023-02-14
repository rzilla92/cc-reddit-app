import React from 'react'
import Card from '../../components/card'

export const Post = (props) => {
    const {post} = props
  return (
    <article key={post.id}>
        <Card>
            <div className='post-wrap'>
                <div className='post-container'>
                    <h3 className='post-title'>{post.title}</h3>
                    <h4 className='post-author'>posted by {post.author}</h4>
                    <div className='post-img-container'>
                        <img src={post.url} alt='' className='post-image' />
                    </div>
                </div>
                
                
            </div>
        </Card>
    </article>
  )
}
