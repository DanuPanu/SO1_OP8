import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props{
    ennuste : Ennuste
    ennuste2 : Ennuste
    ennuste3 : Ennuste
    ennuste4 : Ennuste
    ennuste5 : Ennuste
    ennuste6 : Ennuste
}

const Ennuste : React.FC<Props> = ({ennuste, ennuste2, ennuste3, ennuste4, ennuste5, ennuste6}) : React.ReactElement => {

return(
    <>
        <Typography variant='h5' sx={{textAlign : "center"}}>Kolmen päivän sää kaupungissa {ennuste.paikkakunta}:</Typography>

        <Box sx={{display : "flex", justifyContent : "center", gap : "1em", padding : "1em"}}>
            <div>
                <Typography sx={{fontSize : "18px", fontWeight : "bold", textAlign : "center"}}>Huomenna</Typography>
                <Typography>Aika: {ennuste.aika}</Typography>
                <Typography>Lämpötila: {ennuste.lämpötila}°C</Typography>
                <Typography>Kuvaus: {ennuste.kuvaus}</Typography>
                <img src={`https://openweathermap.org/img/wn/${ennuste.iconi}@2x.png`} alt="#"/>

                <Typography>Aika: {ennuste2.aika}</Typography>
                <Typography>Lämpötila: {ennuste2.lämpötila}°C</Typography>
                <Typography>Kuvaus: {ennuste2.kuvaus}</Typography>
                <img src={`https://openweathermap.org/img/wn/${ennuste2.iconi}@2x.png`} alt="#"/>
            </div>

            <div>
                <Typography sx={{fontSize : "18px", fontWeight : "bold", textAlign : "center"}}>Ylihuomenna</Typography>
                <Typography>Aika: {ennuste3.aika}</Typography>
                <Typography>Lämpötila: {ennuste3.lämpötila}°C</Typography>
                <Typography>Kuvaus: {ennuste3.kuvaus}</Typography>
                <img src={`https://openweathermap.org/img/wn/${ennuste3.iconi}@2x.png`} alt="#"/>

                <Typography>Aika: {ennuste4.aika}</Typography>
                <Typography>Lämpötila: {ennuste4.lämpötila}°C</Typography>
                <Typography>Kuvaus: {ennuste4.kuvaus}</Typography>
                <img src={`https://openweathermap.org/img/wn/${ennuste4.iconi}@2x.png`} alt="#"/>
            </div>

            <div>
                <Typography sx={{fontSize : "18px", fontWeight : "bold", textAlign : "center"}}>Kahden päivän päästä</Typography>
                <Typography>Aika: {ennuste5.aika}</Typography>
                <Typography>Lämpötila: {ennuste5.lämpötila}°C</Typography>
                <Typography>Kuvaus: {ennuste5.kuvaus}</Typography>
                <img src={`https://openweathermap.org/img/wn/${ennuste5.iconi}@2x.png`} alt="#"/>

                <Typography>Aika: {ennuste6.aika}</Typography>
                <Typography>Lämpötila: {ennuste6.lämpötila}°C</Typography>
                <Typography>Kuvaus: {ennuste6.kuvaus}</Typography>
                <img src={`https://openweathermap.org/img/wn/${ennuste6.iconi}@2x.png`} alt="#"/>
            </div>
        </Box>
        <Button
        fullWidth={true}
        component={Link}
        to="/"
        >Takaisin</Button>
    </>
)

}

export default Ennuste;