import React, { useState } from "react";
import "./style.js"
import {  RadioButton } from 'react-radio-buttons';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
  import FormControl from '@mui/material/FormControl';
  import FormLabel from '@mui/material/FormLabel';

import fight from "./fight.webp"
import forest from "./forest.webp"
import interstellar from "./interstellar.webp"
import it from "./it.webp"
import laraKroft from "./laraKroft.webp"
import mib from "./mib.webp"
import park from "./park.webp"
import poets from "./poets.webp"
import wolf from "./wolf.webp"

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
                return(
                    <>
                        <div>Парк Юрского Периода</div>
                        <img src={park} alt="Park" />
                    </>
                ) ;
            case 'fantas':
                return(
                    <>
                        <div>Интерстеллар</div>
                        <img src={interstellar} alt="Interstellar" />
                    </>
                ) ;
            case 'horror':
                return(
                    <>
                        <div>Оно</div>
                        <img src={it} alt="It" />
                    </>
                ) ;
        }
    }
      const renderSwitch2 = (state2) => {
        switch(state2) {
            case 'leo':
                return(
                    <>
                        <div>Волк с Уолл-Стрит</div>
                        <img src={wolf} alt="Wolf" />
                    </>
                ) ;
            case 'djoly':
                return(
                    <>
                        <div>Лара Крофт: Расхитительница грабниц</div>
                        <img src={laraKroft} alt="Lara Kroft" />
                    </>
                ) ;
            case 'smit':
                return(
                    <>
                        <div>Люди в черном</div>
                        <img src={mib} alt="MIB" />
                    </>
                ) ;
        }
    }
    const renderSwitch3 = (state3) => {
        switch(state3) {
            case 'good':
                return(
                    <>
                        <div>Форрест Гамп</div>
                        <img src={forest} alt="Forest" />
                    </>
                ) ;
            case 'bad':
                return(
                    <>
                        <div>Общество мертвых поэтов</div>
                        <img src={poets} alt="Poets" />
                    </>
                ) ;
            case 'netral':
                return(
                    <>
                        <div>Бойцовский клуб</div>
                        <img src={fight} alt="Fight" />
                    </>
                ) ;
        }
    }

    return (  
    <div>
        <p>Давай подберем тебе топ самых интересных для тебя фильмов?</p>

        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Какой твой любимый жанр?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
            >
            <FormControlLabel value="advantures" control={<Radio />} label="Приключения" />
            <FormControlLabel value="si-fi" control={<Radio />} label="Фантастика" />
            <FormControlLabel value="horror" control={<Radio />} label="Хоррор" />
            </RadioGroup>
        </FormControl>

        <p></p>
        
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Какой твой любимый актер?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
            >
            <FormControlLabel value="leo" control={<Radio />} label="Леонардо Ди Каприо" />
            <FormControlLabel value="joli" control={<Radio />} label="Анджелина Джоли" />
            <FormControlLabel value="smit" control={<Radio />} label="Уилл Смит" />
            </RadioGroup>
        </FormControl>

        <p></p>

        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Какое у тебя сейчас настроение?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name="radio-buttons-group"
            >
            <FormControlLabel value="good" control={<Radio />} label="Хорошее" />
            <FormControlLabel value="bad" control={<Radio />} label="Плохое" />
            <FormControlLabel value="other" control={<Radio />} label="Нейтральное" />
            </RadioGroup>
        </FormControl>
        
        <p></p>

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