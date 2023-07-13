import React from "react";
import "./style.css"
import ReactPlayer from 'react-player/youtube'

const Home = () => {
    return (
        <div className="home">
            <p className='text'>
                <span className='title'>Kinoroom Loft</span> - это лофт-пространство в особняке Елагина на Страстном бульваре, где вы можете посмотреть
                любимое кино не отвлекаясь на хруст попкорна и разговоры посторонних людей. Здесь, в зале с удобными
                диванами, вы насладитесь атмосферой уюта и уединенности!
            </p>
            <p className='text'>
                Приглашаем Вас весело провести время с друзьями и близкими, отметить день рождения или торжество в уютной
                обстановке!
            </p>
            <div className='containerVideo'>
                <ReactPlayer url='https://www.youtube.com/watch?v=H592bSWL2Ek'/>
            </div>
        </div>
    );
};

export default Home;