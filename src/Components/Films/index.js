import * as React from 'react';
import parkImg from "./img/park.webp";
import fightImg from "./img/fight.webp";
import forestImg from "./img/forest.webp";
import interstellarImg from "./img/interstellar.webp";
import itImg from "./img/it.webp";
import laraKroftImg from "./img/laraKroft.webp";
import mibImg from "./img/mib.webp";
import poetsImg from "./img/poets.webp";
import wolfImg from "./img/wolf.webp";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function QuizRadios() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');
    const [error, setError] = React.useState(false);
    const [nameText, setNameText] = React.useState('');
    const [nameText1, setNameText1] = React.useState('');
    const [nameText2, setNameText2] = React.useState('');
    const [aboutText, setAboutText] = React.useState('');
    const [aboutText1, setAboutText1] = React.useState('');
    const [aboutText2, setAboutText2] = React.useState('');
    const [imgSrc, setImgSrc] = React.useState('');
    const [imgSrc1, setImgSrc1] = React.useState('');
    const [imgSrc2, setImgSrc2] = React.useState('');

    const handleRadioChange = (event) => {
        setValue1(event.target.value);
        setNameText(' ');
        setImgSrc(' ');
        setAboutText(' ');
        setError(false);
    };
    const handleRadioChange1 = (event) => {
        setValue2(event.target.value);
        setNameText1(' ');
        setImgSrc1(' ');
        setAboutText1(' ');
        setError(false);
    };
    const handleRadioChange2 = (event) => {
        setValue3(event.target.value);
        setNameText2(' ');
        setImgSrc2(' ');
        setAboutText2(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value1 === 'advantures') {
            setNameText('Парк Юрского Периода');
            setImgSrc(parkImg);
            setAboutText('Из-за аварии в реликтовом парке динозавры оказываются на воле. Фантастика Стивена Спилберга с тремя «Оскарами»');
            setError(false);
        } else if (value1 === 'sci-fi') {
            setNameText('Интерстеллар');
            setImgSrc(interstellarImg);
            setAboutText('Когда вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину в путешествие, чтобы найти планету с подходящими для человечества условиями');
            setError(false);
        } else if (value1 === 'horror') {
            setNameText('Оно');
            setImgSrc(itImg);
            setAboutText('В городке Дерри начинают пропадать дети, несколько ребят сталкиваются со своими величайшими страхами — не только с группой школьных хулиганов, но со злобным клоуном Пеннивайзом');
            setError(false);
        } else {
            setNameText('Please select an option.');
            setError(true);
        }

        if (value2 === 'leo') {
            setNameText1('Волк с Уолл Стрит');
            setImgSrc1(wolfImg);
            setAboutText1('Восхождение циника-гедониста на бизнес-олимп 1980-х. Блистательный тандем Леонардо ДиКаприо и Мартина Скорсезе');
            setError(false);
        } else if (value2 === 'joli') {
            setNameText1('Лара Крофт: Расхитительница гробниц');
            setImgSrc1(laraKroftImg);
            setAboutText1('Лара Крофт владеет всеми видами рукопашного боя, стреляет из любых видов оружия и способна выжить в самых экстремальных условиях. Однажды она обнаруживает вход в секретную комнату, где находятся старинные часы с удивительным устройством внутри');
            setError(false);
        } else if (value2 === 'smit') {
            setNameText1('Люди в черном');
            setImgSrc1(mibImg);
            setAboutText1('Земля кишит пришельцами, за которыми глаз да глаз. Уилл Смит и Томми Ли Джонс в ролях следящих за порядком');
            setError(false);
        } else {
            setNameText1('Please select an option.');
            setError(true);
        }

        if (value3 === 'good') {
            setNameText2('Форрест Гамп');
            setImgSrc2(forestImg);
            setAboutText2('Полувековая история США глазами чудака из Алабамы. Абсолютная классика Роберта Земекиса с Томом Хэнксом');
            setError(false);
        } else if (value3 === 'bad') {
            setNameText2('Общество мертвых поэтов');
            setImgSrc2(poetsImg);
            setAboutText2('Джон Китинг — новый преподаватель английской словесности в консервативном американском колледже. Однажды он посвящает своих подопечных в тайну Общества мёртвых поэтов. С этого момента каждый из учеников старается обрести свой собственный голос в безликом хоре');
            setError(false);
        } else if (value3 === 'other') {
            setNameText2('Бойцовский клуб');
            setImgSrc2(fightImg);
            setAboutText2('Страховой работник разрушает рутину своей благополучной жизни. Культовая драма по книге Чака Паланика');
            setError(false);
        } else {
            setNameText2('Please select an option.');
            setError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='helloText' style={{marginLeft: 20}}>
                <h3>Какой фильм подойдет тебе?</h3>
                <p>В этом тесте вы можете подобрать фильм под свое настроение, любимый жанр и актера!</p>
                <p>А посмотреть этот фильм и не только вы можете в Кинорум Лофт</p>
            </div>
            <FormControl sx={{m: 3}} error={error} variant="standard">
                <FormLabel id="demo-error-radios">Какой твой любимый жанр?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz"
                    value={value1}
                    onChange={handleRadioChange}
                >
                    <FormControlLabel value="advantures" control={<Radio/>} label="Приключения"/>
                    <FormControlLabel value="sci-fi" control={<Radio/>} label="Фантастика"/>
                    <FormControlLabel value="horror" control={<Radio/>} label="Хоррор"/>
                </RadioGroup>
                <FormHelperText><img src={imgSrc}></img><p></p>{nameText}<p></p>{aboutText}</FormHelperText>

                <p></p>

                <FormLabel id="demo-error-radios1">Какой твой любимый актер/актрисса?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz1"
                    value={value2}
                    onChange={handleRadioChange1}
                >
                    <FormControlLabel value="leo" control={<Radio/>} label="Леонардо Ди Каприо"/>
                    <FormControlLabel value="joli" control={<Radio/>} label="Анджелина Джоли"/>
                    <FormControlLabel value="smit" control={<Radio/>} label="Уилл Смит"/>
                </RadioGroup>
                <FormHelperText><img src={imgSrc1}></img><p></p>{nameText1}<p></p>{aboutText1}</FormHelperText>

                <p></p>

                <FormLabel id="demo-error-radios2">Какое у тебя настроение?</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-error-radios"
                    name="quiz2"
                    value={value3}
                    onChange={handleRadioChange2}
                >
                    <FormControlLabel value="good" control={<Radio/>} label="Хорошее"/>
                    <FormControlLabel value="bad" control={<Radio/>} label="Плохое"/>
                    <FormControlLabel value="other" control={<Radio/>} label="Нейтральное"/>
                </RadioGroup>
                <FormHelperText><img src={imgSrc2}></img><p></p>{nameText2}<p></p>{aboutText2}</FormHelperText>

                <p></p>

                <Button sx={{mt: 1, mr: 1}} type="submit" variant="outlined">
                    Результаты
                </Button>
            </FormControl>
        </form>
    );
}