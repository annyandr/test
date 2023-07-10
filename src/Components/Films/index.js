// import React, { useState } from "react";
// import "./style.js"
// import { RadioButton } from 'react-radio-buttons';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
//   import FormControl from '@mui/material/FormControl';
//   import FormLabel from '@mui/material/FormLabel';

// import fight from "./fight.webp"
// import forest from "./forest.webp"
// import interstellar from "./interstellar.webp"
// import it from "./it.webp"
// import laraKroft from "./laraKroft.webp"
// import mib from "./mib.webp"
// import park from "./park.webp"
// import poets from "./poets.webp"
// import wolf from "./wolf.webp"

// //разобраться, как сделать переход и составить подборки

// const Films = ({hFilms}) => {

//     const [state1, setState1] = useState(false)
//     const [state2, setState2] = useState(false)
//     const [state3, setState3] = useState(false)
//     const [state4, setState4] = useState(false)
//     const [state5, setState5] = useState(false)
//     const [state6, setState6] = useState(false)
//     const [state7, setState7] = useState(false)
//     const [state8, setState8] = useState(false)
//     const [state9, setState9] = useState(false)
//     const [stateButton, setStateButton] = useState(false)

//     const buttonClick = () => {
//         console.log(stateButton);
//         setStateButton(!stateButton);
//     }

//     const renderSwitch1 = (event, id) => {
//        console.log(event, id, 'event')
//     }
//       const renderSwitch2 = (state2) => {
//         switch(state2) {
//             case 'leo':
//                 return(
//                     <>
//                         <div>Волк с Уолл-Стрит</div>
//                         <img src={wolf} alt="Wolf" />
//                     </>
//                 ) ;
//             case 'djoly':
//                 return(
//                     <>
//                         <div>Лара Крофт: Расхитительница грабниц</div>
//                         <img src={laraKroft} alt="Lara Kroft" />
//                     </>
//                 ) ;
//             case 'smit':
//                 return(
//                     <>
//                         <div>Люди в черном</div>
//                         <img src={mib} alt="MIB" />
//                     </>
//                 ) ;
//         }
//     }
//     const renderSwitch3 = (state3) => {
//         switch(state3) {
//             case 'good':
//                 return(
//                     <>
//                         <div>Форрест Гамп</div>
//                         <img src={forest} alt="Forest" />
//                     </>
//                 ) ;
//             case 'bad':
//                 return(
//                     <>
//                         <div>Общество мертвых поэтов</div>
//                         <img src={poets} alt="Poets" />
//                     </>
//                 ) ;
//             case 'netral':
//                 return(
//                     <>
//                         <div>Бойцовский клуб</div>
//                         <img src={fight} alt="Fight" />
//                     </>
//                 ) ;
//         }
//     }

//     return (  
//     <div>
//         <p>Давай подберем тебе топ самых интересных для тебя фильмов?</p>

//         {/* <div style={{display: "flex"}}> 
//             <Radio value={state1} onChange={(event) => {setState1(!state1)}}/>
//             <p> {state1 ? 1 : 2}</p>
//             <p style={{marginLeft: 5}}>Приключения</p>
//         </div>
//         <div style={{display: "flex"}}> 
//             <Radio value={state2} onChange={(event) => {setState2(!state2)}}/>
//             <p style={{marginLeft: 5}}>Фантастика</p>
//         </div>
//         <div style={{display: "flex"}}> 
//             <Radio value={state3} onChange={(event) => {setState3(!state3)}}/>
//             <p style={{marginLeft: 5}}>Хоррор</p>
//         </div> */}
//         {/* <FormControl>
//             <FormLabel id="demo-radio-buttons-group-label">Какой твой любимый жанр?</FormLabel>
//             <RadioGroup
//                 aria-labelledby="demo-radio-buttons-group-label"
//                 defaultValue=""
//                 name="radio-buttons-group"
//             >
//             <FormControlLabel value={state1} control={<Radio />} onChange={(event) => {renderSwitch1(event, 1)}} label="Приключения" />
//             <FormControlLabel value={state2} control={<Radio />} onChange={(event) => {renderSwitch1(event, 2)}}label="Фантастика" />
//             <FormControlLabel value={state3} control={<Radio />} onChange={(event) => {renderSwitch1(event, 3)}} label="Хоррор" />
//             </RadioGroup>
//         </FormControl>

//         <p></p>

//         <FormControl>
//             <FormLabel id="demo-radio-buttons-group-label">Какой твой любимый актер?</FormLabel>
//             <RadioGroup
//                 aria-labelledby="demo-radio-buttons-group-label"
//                 defaultValue=""
//                 name="radio-buttons-group"
//             >
//             <FormControlLabel value={state2[0]} control={<Radio />} label="Леонардо Ди Каприо" />
//             <FormControlLabel value={state2[1]} control={<Radio />} label="Анджелина Джоли" />
//             <FormControlLabel value={state2[2]} control={<Radio />} label="Уилл Смит" />
//             </RadioGroup>
//         </FormControl>

//         <p></p>

//         <FormControl>
//             <FormLabel id="demo-radio-buttons-group-label">Какое у тебя сейчас настроение?</FormLabel>
//             <RadioGroup
//                 aria-labelledby="demo-radio-buttons-group-label"
//                 defaultValue=""
//                 name="radio-buttons-group"
//             >
//             <FormControlLabel value={state3[0]} control={<Radio />} label="Хорошее" />
//             <FormControlLabel value={state3[1]} control={<Radio />} label="Плохое" />
//             <FormControlLabel value={state3[2]} control={<Radio />} label="Нейтральное" />
//             </RadioGroup>
//         </FormControl> */}
        
//         <p></p>

//         {stateButton && <p> {hFilms} </p>}
//         <button className="button" onClick={buttonClick}> 
//             Результаты 
//         </button>

//         <div>
//             {renderSwitch1(state1)}
//         </div>
//         <div>
//             {renderSwitch2(state2)}
//         </div>
//         <div>
//             {renderSwitch3(state3)}
//         </div>
        
//     </div>
//     );
// };

// export default Films;





import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function QuizRadios() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [nameText, setNameText] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setNameText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === 'advantures') {
        setNameText('Парк Юрского Периода');
        setError(false);
    } else if (value === 'sci-fi') {
        setNameText('Интерстеллар');
        setError(false);
    } else if (value === 'horror') {
        setNameText('Оно');
        setError(false);
    } else {
        setNameText('Please select an option.');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">Какой твой любимый жанр?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="advantures" control={<Radio />} label="Приключения" />
          <FormControlLabel value="sci-fi" control={<Radio />} label="Фантастика" />
          <FormControlLabel value="horror" control={<Radio />} label="Хоррор" />
        </RadioGroup>
        <FormHelperText>{nameText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Результаты
        </Button>
      </FormControl>
    </form>
  );
}