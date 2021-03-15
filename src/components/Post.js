import React from 'react'
// import { getData } from '../actions';
// import {connect } from 'react-redux';
import moment from 'moment';

export default function Post({post}) {

  const altText = post.text.slice(0, post.text.length/2)+"...";

  const beutifyPublicationDate = moment(post.publishDate, "YYYYMMDD").fromNow()
  console.log("date: ",beutifyPublicationDate)
  return (
    <div className="post-card">
      <section >
        <img className="post-image" src={post.image} alt={altText} />
      </section>
      <div className="owner-info">
      <img className="owner-image" src={post.owner.picture} alt={`${post.owner.firstName}'s avatar`} />
        <p>{`${post.owner.firstName} ${post.owner.lastName}`}</p> 
        <p>{post.owner.email}</p>
      </div>
      <section className='post-text'>
        <article>{post.text}</article>
      </section>
      <footer className="post-info">
        <span><img src='/heart.png' alt='likes heart' width={15} height={15}/> <p>{post.likes}</p></span>
        <p>{beutifyPublicationDate}</p>
        {post.tags.map(tag=><><span key={tag}>#{tag} </span></>)}
        
      </footer>
    </div>
  )
}
