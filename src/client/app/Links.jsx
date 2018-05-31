import React from 'react';

var style = {
  color: "#264586",
  margin: "5%",
  fontSize: "2.5em"
};

// <a href="https://www.codewars.com/users/yeti-detective"><i className="fa fa-lg fa-codewars" style={style}></i></a>
// <a href="https://heroku.com/insert-link-to-cool-app-here"><i className="fa fa-lg fa-heroku" style={style}></i></a>
// my kingdom for a codewars or heroku fontawesome icon

const Links = () => (
  <div>
    <a href="https://codepen.io/Yeti_Detective"
      target="_blank">
      <i className="fab fa-lg fa-codepen" style={style} ></i>
    </a>
    <a href="https://www.freecodecamp.com/yeti-detective/front-end-certification"
      target="_blank">
      <i className="fab fa-lg fa-free-code-camp" style={style}></i>
    </a>
    <a href="https://github.com/yeti-detective"
      target="_blank">
      <i className="fab fa-lg fa-github" style={style}></i>
    </a>
    <a href="https://www.linkedin.com/in/xchristopherxbrown"
      target="_blank">
      <i className="fab fa-lg fa-linkedin-in" style={style}></i>
    </a>
    <a href="mailto:christopher.brown@motomorphosis-ind.com"
      target="_blank">
      <i className="fa fa-lg fa-envelope" style={style}></i>
    </a>
  </div>
  );

export default Links
