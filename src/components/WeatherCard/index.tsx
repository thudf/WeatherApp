import React, { useEffect, useState } from 'react';
import {
  FiWind, 
  FiDroplet, 
  FiMinusSquare, 
  FiPlusSquare,
} from 'react-icons/fi';

import { 
  Container, 
  CardHeader, 
  CardMain, 
  CardFooter, 
  AddicitionalInfo, 
  AddicitionalInfoDiv,
  LoadingContainer,
} from './styles';

import { WeatherData } from '../../models/Weather';

import Loading from '../Loading';
import WeatherIcon from '../WeatherIcon';
import { iconsList } from '../../lib/iconsList';

interface WeatherCardProps {
  data: WeatherData;
  loading: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, loading }) => {
  const [name, setName] = useState('');
  const [time, setTime] = useState('--:--');
  const [icon, setIcon] = useState('');
  const [iconDesc, setIconDesc] = useState('');
  const [wind, setWind] = useState('-- km/h');
  const [humidity, setHumidity] = useState('--%');
  const [tempMax, setTempMax] = useState('--º');
  const [tempMin, setTempMin] = useState('--º');
  const [temp, setTemp] = useState('--º')

  useEffect(() => {
    if (data.name) {
      setName(data.name);
      const date = `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`;
      setTime(date);
      setWind(`${data.wind.speed.toFixed(1).toString().replace('.', ',')} km/h`);
      setHumidity(`${data.main.humidity.toString().replace('.', ',')}%`);
      setTempMax(`${data.main.temp_max.toFixed(1).toString().replace('.', ',')}º`);
      setTempMin(`${data.main.temp_min.toFixed(1).toString().replace('.', ',')}º`);
      setTemp(`${data.main.temp.toFixed(1).toString().replace('.', ',')}º`);
      setIcon(`Wi${iconsList[data.weather[0].id]}`);
      setIconDesc(data.weather[0].description);
    } else {
      setName('-----------');
      setTime('--:--');
      setIcon('WiDaySunny');
      setIconDesc('');
      setWind('-- km/h');
      setHumidity('--%');
      setTempMax('--º');
      setTempMin('--º');
      setTemp('--º')
    }
  }, [data]);

  return loading ? (
    <Container loading={loading}>
      <CardHeader>
        <span>------</span>
        <span>--:--</span>
      </CardHeader>

      <CardMain>
        <WeatherIcon name='WiDaySunny' />
        <span>----</span>
      </CardMain>

      <CardFooter>
        <AddicitionalInfoDiv>
          <AddicitionalInfo>
            <FiWind />
            <span>-- km/h</span>
          </AddicitionalInfo>

          <AddicitionalInfo>
            <FiDroplet />
            <span>--%</span>
          </AddicitionalInfo>

          <AddicitionalInfo>
            <FiPlusSquare />
            <span>--º</span>
          </AddicitionalInfo>

          <AddicitionalInfo>
            <FiMinusSquare />
            <span>--º</span>
          </AddicitionalInfo>
        </AddicitionalInfoDiv>

        <span>--º</span>
      </CardFooter>

      <LoadingContainer>
        <Loading />
      </LoadingContainer>
    </Container>
  ) : (
    <Container loading={loading}>
      <CardHeader>
        <span>{name}</span>
        <span>{time}</span>
      </CardHeader>

      <CardMain>
        <WeatherIcon name={icon} />
        <span>{iconDesc}</span>
      </CardMain>

      <CardFooter>
        <AddicitionalInfoDiv>
          <AddicitionalInfo>
            <FiWind />
            <span>{wind}</span>
          </AddicitionalInfo>

          <AddicitionalInfo>
            <FiDroplet />
            <span>{humidity}</span>
          </AddicitionalInfo>

          <AddicitionalInfo>
            <FiPlusSquare />
            <span>{tempMax}</span>
          </AddicitionalInfo>

          <AddicitionalInfo>
            <FiMinusSquare />
            <span>{tempMin}</span>
          </AddicitionalInfo>
        </AddicitionalInfoDiv>

        <span>{temp}</span>
      </CardFooter>
    </Container>
  );
}

export default WeatherCard;
