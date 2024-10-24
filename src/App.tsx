import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Aloitus from './comps/Aloitus';
import Ennuste from './comps/Ennuste';

const App : React.FC = () : React.ReactElement => {

  const pyyntoLahetetty : React.MutableRefObject<boolean> = useRef(false);

  const [data, setData] = useState<Saa>({
                                    virhe : "",
                                    paikkakunta : "",
                                    lämpötila : "",
                                    kuvaus : "",
                                    iconi : ""
                                  });

  const [ennuste, setEnnuste] = useState<Ennuste>({
                                    paikkakunta : "", 
                                    aika : "",
                                    lämpötila : "",
                                    kuvaus : "",
                                    iconi : ""
                                  });  
  const [ennuste2, setEnnuste2] = useState<Ennuste>({})                     
  const [ennuste3, setEnnuste3] = useState<Ennuste>({})                     
  const [ennuste4, setEnnuste4] = useState<Ennuste>({})                     
  const [ennuste5, setEnnuste5] = useState<Ennuste>({})                     
  const [ennuste6, setEnnuste6] = useState<Ennuste>({})                     
  const [kaupunki, setKaupunki] = useState<string>("mikkeli")

  const paivitaKaupunki = (Kaupunki : string) => {
    setKaupunki(Kaupunki.replaceAll('ä', 'a').replaceAll('ö', 'o').replaceAll('å', 'a'))
  }

  const haeData = async () : Promise<void> => {

    try {
      const yhteys2 : Response = await fetch(`https://xamkbit.azurewebsites.net/saaennuste/${kaupunki}`);
      const yhteys : Response = await fetch(`https://xamkbit.azurewebsites.net/saatilanne/${kaupunki}`);
      const data2 : any = await yhteys2.json();
      const data : any = await yhteys.json();

      let x = 0
      while(data2.list[x].dt_txt.slice(data2.list[x].dt_txt.indexOf(' ') + 1) !== '03:00:00'){
        x++
      }
  
      setData({...data, paikkakunta : data.name, lämpötila : data.main.temp, kuvaus : data.weather[0].description, iconi : data.weather[0].icon});
      setEnnuste({...ennuste, paikkakunta : data.name, 
        aika : data2.list[x].dt_txt, 
        lämpötila : data2.list[x].main.temp, 
        kuvaus : data2.list[x].weather[0].description, 
        iconi : data2.list[x].weather[0].icon})
      setEnnuste2({...ennuste2, paikkakunta : data.name, 
        aika : data2.list[x + 4].dt_txt, 
        lämpötila : data2.list[x + 4].main.temp, 
        kuvaus : data2.list[x + 4].weather[0].description, 
        iconi : data2.list[x + 4].weather[0].icon})
      setEnnuste3({...ennuste3, paikkakunta : data.name, 
        aika : data2.list[x + 8].dt_txt, 
        lämpötila : data2.list[x + 8].main.temp, 
        kuvaus : data2.list[x + 8].weather[0].description, 
        iconi : data2.list[x + 8].weather[0].icon})
      setEnnuste4({...ennuste4, paikkakunta : data.name, 
        aika : data2.list[x + 12].dt_txt, 
        lämpötila : data2.list[x + 12].main.temp, 
        kuvaus : data2.list[x + 12].weather[0].description, 
        iconi : data2.list[x + 12].weather[0].icon})
      setEnnuste5({...ennuste5, paikkakunta : data.name, 
        aika : data2.list[x + 16].dt_txt, 
        lämpötila : data2.list[x + 16].main.temp, 
        kuvaus : data2.list[x + 16].weather[0].description, 
        iconi : data2.list[x + 16].weather[0].icon})
      setEnnuste6({...ennuste6, paikkakunta : data.name, 
        aika : data2.list[x + 20].dt_txt, 
        lämpötila : data2.list[x + 20].main.temp, 
        kuvaus : data2.list[x + 20].weather[0].description, 
        iconi : data2.list[x + 20].weather[0].icon})
    } catch (e: any) {
      setData({...data, virhe : 'Kaupunkia ei löytynyt'})
    }
  }

  useEffect(() => {
    
    if (!pyyntoLahetetty.current) {
      haeData();
    }
    return () => {
      pyyntoLahetetty.current = true;
    }
  });

  return (
    <>
      <Typography variant="h3" sx={{textAlign : "center"}}>Sääsovellus</Typography>
      <Routes>
        <Route path="/" element={<Aloitus data={data} paivitaKaupunki={paivitaKaupunki} haeData={haeData}/>}/>
        <Route path="ennuste" element={<Ennuste ennuste={ennuste} ennuste2={ennuste2} ennuste3={ennuste3} ennuste4={ennuste4} ennuste5={ennuste5} ennuste6={ennuste6}/>}/>
      </Routes>
    </>
    );
}

export default App;