import React, {useState, useEffect} from 'react';


export default function Nav() {
  const [scrolled,setScrolled]=useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 5 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
 
  const scrolledNav = scrolled? 'scrolledNav': '';

  return (
    <header className={scrolledNav}>
    <nav className= 'nav'>
      <div className='logo'> 
        <img src="/Not_Posts.png" alt="Not posts Logo" />
      </div>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
      </ul>
    </nav>
    </header>
  )
}
