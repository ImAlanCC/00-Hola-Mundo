import { useState } from "react";

export function TwitterFollowCard({ formatUserName, userName, name }) {
    //console.log(isFollowing)

  const [isFollowing, setIsFollowing] = useState(false)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing   
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleClick = () =>{
    setIsFollowing (!isFollowing)
  }

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          //Importante. usar este tipo de comilla ````` para que funcione.
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de midudev"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>{text}</button>
      </aside>
    </article>
  );
}
