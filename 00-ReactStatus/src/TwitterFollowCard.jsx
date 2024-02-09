/* eslint-disable react/prop-types */
//import { useState } from 'react'
import { useState } from 'react';
import './TwitterFollowCard.css'

export function TwitterFollowCard({userName, name,initialFollowing}) {
    
    const [isFollowing,setIsFollowing]=useState(initialFollowing);
    const handleClick=()=>{
        setIsFollowing(!isFollowing);
    
    }
    const text= isFollowing ? 'Siguiendo' : 'Seguir';
  return (
    <>
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img 
            src={`https://unavatar.io/${userName}`} 
            alt=""
            className='tw-followCard-avatar' 
          />
          <div className="tw-followCard-info">
            <strong>{name}</strong>
            <span className="tw followCard-infoUserName">@{userName}</span>
          </div>
        </header>

        <aside>
            <button onClick={handleClick} className="tw-followCard-button">
                {text}
            </button>
        </aside>
      </article>
    </>
  )
}
