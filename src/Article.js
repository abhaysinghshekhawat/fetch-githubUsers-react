import React from "react";
import "./Article.css";
const Article = ({ user }) => {
  const { login, avatar_url, url } = user;
  console.log(login, avatar_url, url);
  return (
    <article>
      <img id="avatar" src={avatar_url} alt="no" />
      <div id="content">
        <div>{login}</div>
        <a href={url}>profile</a>
      </div>
    </article>
  );
};

export default Article;
