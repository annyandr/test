import React from "react";
import {Link} from "react-router-dom";
import "./style.js"
import video from './kinoroom.mp4'

//разобраться почему нельзя добавить еще строчку и добавить картинок

const Home = ({hHome}) => {
  return (
    <div className="home">
      <p>Kinoroom Loft - это лофт-пространство в особняке Елагина на Страстном бульваре, где вы можете посмотреть любимое кино не отвлекаясь на хруст попкорна и разговоры посторонних людей. Здесь, в зале с удобными диванами, вы насладитесь атмосферой уюта и уединенности!</p>
      <p>Приглашаем Вас весело провести время с друзьями и близкими, отметить день рождения или торжество в уютной обстановке!</p>
      <video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
      </video>
    </div>
  );  
};

export default Home;