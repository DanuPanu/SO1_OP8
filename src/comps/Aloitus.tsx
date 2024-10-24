import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useRef} from 'react';
import { Link } from 'react-router-dom';

interface Props{
    data : Saa
    paivitaKaupunki : (Kaupunki : string) => void
    haeData : () => void
}


const Aloitus : React.FC<Props> = ({data, paivitaKaupunki, haeData}) : React.ReactElement => {

const lomakeTiedot : Saa = useRef<Saa>({});

const syoteKasittelija = (e : React.ChangeEvent<HTMLInputElement>) : void =>{
    lomakeTiedot.current[e.target.name] = e.target.value;
    paivitaKaupunki(`${lomakeTiedot.current.paikkakunta}`)
  }

const nappulaKasittelija = (e : React.FormEvent) : void =>{
    haeData()
}

return(
    <>
        <Box sx={{textAlign : "center"}}>
            <Typography variant="h5">Sää tällä hetkellä</Typography>
            <Typography>Paikkakunta : {data.paikkakunta}</Typography>
            <Typography>Lämpötila : {data.lämpötila}</Typography>
            <Typography>Kuvaus : {data.kuvaus}</Typography>
            <img src={`https://openweathermap.org/img/wn/${data.iconi}@2x.png`} alt="#"/>
        </Box>

        <Box sx={{display : "flex", flexDirection : "column"}}>
            <TextField 
                error={Boolean(data.virhe)}
                helperText={data.virhe}
                name="paikkakunta"
                label="Paikkakunta..."
                variant="outlined"
                fullWidth={true}
                sx={{margin : "1em auto", width : "50%"}}
                onChange={syoteKasittelija}
            />

            <Button 
            sx={{width : "50%", margin : "auto"}}
            variant="contained"
            onClick={nappulaKasittelija}
            >Vaihda paikkakuntaa</Button>

            <Button
            sx={{width : "50%", margin : "1em auto"}}
            component={Link}
            to="/ennuste"
            >Tulevien päivien ennuste</Button>
        </Box>
    </>
)

}

export default Aloitus;