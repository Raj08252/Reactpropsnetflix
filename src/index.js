import React from "react";
import ReactDOM from "react-dom";
import Card from './App';
var pic1 = "https://wallpapercave.com/wp/wp4056410.jpg";
ReactDOM.render(
  <>
  <Card imgsrc={pic1} title="A netflix original series" sname="DARK" link = "https://www.netflix.com/in/title/80100172"/>
  <Card sname="extra curricular" title="Netflix original series" imgsrc="https://www.heavenofhorror.com/wp-content/uploads/2020/04/Extracurricular-netflix-review.jpg" link="https://www.netflix.com/in/title/80990668?source=35"/>
  <Card link="https://www.netflix.com/in/title/80057281" sname="stranger things" title="Netflix original series" imgsrc="https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg"/>
  </>,
  document.getElementById("root")
);
