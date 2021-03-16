import React from 'react'
import moment from 'moment';
import '../styles/post.css'
export default function Post({post}) {
  
  const addIdToTag = (arrOftags)=>{
    let result = [];
    for (let i=0; i < arrOftags.length; i++) {
      result[i] = {id: i, title:arrOftags[i]}
    }
    return result;
  }

  const tagsWithId = addIdToTag(post.tags);

  
  const altText = post.text.slice(0, post.text.length/2)+"...";

  const beutifyPublicationDate = moment(post.publishDate, "YYYYMMDD").fromNow()
  console.log("date: ",beutifyPublicationDate)
  return (
    <div className="post-card">
      <section className="post-image-container">
        <img className="post-image" src={post.image} alt={altText} />
      </section>
      <div className='post-content'>
        <div className="owner-info">
          <div className="owner-avatarNname">
            <img className="owner-image" src={post.owner.picture} alt={`${post.owner.firstName}'s avatar`} />
            <p>{`${post.owner.firstName} ${post.owner.lastName}`}</p> 
          </div>
            <div><a href={`mailto:${post.owner.email}`}><img className="owner-mail-icon" src='/mail.png' alt="contact e-mail"/></a></div>
        </div>
        <section className='post-text'>
          <article>
            <p>{post.text}</p>
          </article>
        </section>
      </div>
      <footer className="post-info">
        <span><img src='/heart.png' alt='likes heart' width={10} height={10}/><span>{post.likes}</span></span>
        <span>{beutifyPublicationDate}</span>
        <span>
        {tagsWithId.map(tag=><span key={tag.id}><span >#{tag.title} </span></span>)}

        </span>
        
      </footer>
    </div>
  )
}
