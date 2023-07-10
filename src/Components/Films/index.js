import React, { useState } from "react";
import "./style.js"
import {  RadioButton } from 'react-radio-buttons';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import fight from "./fight.webp"
// import forest from "./forest.webp"
// import interstellar from "./interstellar.webp"
// import it from "./it.webp"
// import laraKroft from "./laraKroft.webp"
// import mib from "./mib.webp"
// import park from "./park.webp"
// import poets from "./poets.webp"
// import wolf from "./wolf.webp"

//разобраться, как сделать переход и составить подборки

const Films = ({hFilms}) => {

    const [state1, setState1] = useState([false, false, false])
    const [state2, setState2] = useState([false, false, false])
    const [state3, setState3] = useState([false, false, false])
    const [stateButton, setStateButton] = useState(false)

    const buttonClick = () => {
        console.log(stateButton);
        setStateButton(!stateButton);
    }
    const renderSwitch1 = (state1) => {
        switch(state1) {
            case 'advan':
                return 'one';
            case 'fantas':
                return 'two';
            case 'horror':
                return 'three';
        }
    }
      const renderSwitch2 = (state2) => {
        switch(state2) {
            case 'leo':
                return(
                    <>
                        <div>Волк с Уолл-Стрит</div>
                        {/* <img src={wolf} alt="Wolf" /> */}
                    </>
                ) ;
            case 'djoly':
                return <div>Лара Крофт: Расхитительница грабниц</div>;
            case 'smit':
                return <div>Люди в Черном</div>;
        }
    }
    const renderSwitch3 = (state3) => {
        switch(state3) {
            case 'good':
                return <div>Форрест Гамп</div>;
            case 'bad':
                return <div>Общество Мертвых Поэтов</div>;
            case 'netral':
                return <div>Бойцовский клуб</div>;
        }
    }

    return (  
    <div>
        <p>Давай подберем тебе топ самых интересных для тебя фильмов?</p>
        <p>Какой твой любимый жанр?</p>
        <RadioGroup onChange={(value) => console.log(value)}>
            <RadioButton value={state1[0]}>Приключения</RadioButton>
            <RadioButton value={state1[1]}>Фантастика</RadioButton>
            <RadioButton value={state1[2]}>Хоррор</RadioButton>
        </RadioGroup>
        <p>Какой твой любимый актер?</p>
        <RadioGroup onChange={(value) => console.log(value)}>
            <RadioButton value={state2[0]}>Леонардо Ди Каприо</RadioButton>
            <RadioButton value={state2[1]}>Анджелина Джоли</RadioButton>
            <RadioButton value={state2[2]}>Уилл Смит</RadioButton>
        </RadioGroup>
        <p>Какое у тебя сейчас настроение?</p>
        <RadioGroup onChange={(value) => console.log(value)}>
            <RadioButton value={state3[0]}>Хорошее</RadioButton>
            <RadioButton value={state3[1]}>Плохое</RadioButton>
            <RadioButton value={state3[2]}>Нейтральное</RadioButton>
        </RadioGroup>
        {stateButton && <p> {hFilms} </p>}
        <button className="button" onClick={buttonClick}> 
            Результаты 
        </button>
        <div>
            {renderSwitch1(state1)}
        </div>
        <div>
            {renderSwitch2(state2)}
        </div>
        <div>
            {renderSwitch3(state3)}
        </div>
    </div>
    );
};

export default Films;