import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';

import Loading from '../Loading';

import { 
  Container, 
  CardHeader, 
  CardMain, 
  CardFooter, 
  LoadingContainer 
} from './styles';

interface OverviewCardProps {
  type: string;
  temp: number;
  location: string;
  loading: boolean
}

const WeatherCard: React.FC<OverviewCardProps> = ({ type, temp, location, loading }) => {
  const temperature: string = temp ? temp.toFixed(1).replace('.', ',') : '';
  return (
    <Container loading={loading}>
      <CardHeader>
        <span>{type}:</span>
      </CardHeader>
      <CardMain>
        <span>{temperature}º</span>
      </CardMain>
      <CardFooter>
        <FiMapPin />
        <span>{location}</span>
      </CardFooter>

      {loading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </Container>
  );
}

export default WeatherCard;
