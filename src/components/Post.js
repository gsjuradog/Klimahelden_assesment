import React from 'react'
// import { getData } from '../actions';
// import {connect } from 'react-redux';

export default function Post({post}) {
  console.log(post)
  const altText = post.text.slice(0, post.text.length/2)+"..."
  return (
    <div className="post-card">
      <section >
        <img className="post-image" src={post.image} alt={altText} />
      </section>
      <section className="owner-info">
      <img className="owner-image" src={post.owner.picture} alt={`${post.owner.firstName}'s avatar`} />
        <span>{`${post.owner.firstName} ${post.owner.lastName}`}</span> 
        <span>{post.owner.email}</span>
      </section>
      <section className="post-info">
        <p>{post.likes}</p>
        <span>{post.publishDate}</span>
        {post.tags.map(tag=><span key={tag}>{tag}</span>)}
        <article>{post.text}</article>
      </section>
    </div>
  )
}
