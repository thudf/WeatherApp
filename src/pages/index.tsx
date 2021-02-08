import React, { useCallback, useEffect, useState } from 'react';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import { v4 as uuidv4 } from 'uuid';

import { database } from '../../config/firebase';

import { useDispatch } from 'react-redux';
import { getMaxMinRequest } from '../store/modules/overview/actions';

import { WeatherData } from '../models/Weather';

import { useToast } from '../hooks/toast';
import { useScrollSlider } from '../hooks/scrollSlider';

import apiweather from '../services/apiweather';

import Layout from '../components/Layout';
import Carrousel from '../components/Carrousel';
import WeatherCard from '../components/WeatherCard';
import Section from '../components/Section';
import Form from '../components/Form';

import {
  Container,
  DataContainer,
  CommandsContainer,
  CommandsContainerBottomDiv,
  CommandsButton,
} from '../styles/pages/Home';

interface ButtonProps {
  id: string;
  city: string;
}

interface IHomeProps {
  initialButtons: ButtonProps[];
}

export default function Home({ initialButtons }: IHomeProps) {
  const dispatch = useDispatch();

  const { addToast } = useToast();
  const { scrollTo } = useScrollSlider();

  const lang = 'pt_br';
  const key = '36afed8b38a7c41e828de4a55c6e45ce';

  const [openForm, setOpenForm] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData>({} as WeatherData);
  const [loading, setLoading] = useState(false);
  const [buttons, setButtons] = useState<ButtonProps[]>([] as ButtonProps[]);
  const [selectedButton, setSelectedButton] = useState('');

  const handleSaveNewLogData = async (data: WeatherData, cityId: string) => {
    try {
      const logId = uuidv4();
      const createdDate = (new Date()).toString();
  
      const newLogData = {
        id: logId,
        city: data.name,
        cityId,
        data: data,
        created_at: createdDate,
      }
  
      await database.ref(`logs/${logId}`).set(newLogData);
  
      setLoading(false);
    } catch (error) {
      console.log(error.response);

      setSelectedButton('');
      setWeatherData({} as WeatherData);
      setLoading(false);
      addToast({
        type: 'error',
        title: 'Ocorreu um erro!',
        description: 'Não foi possível salvar o log!',
      });
    }
  };

  const handleUpdateData = async (data: WeatherData, responseId: string) => {
    try {
      const id = responseId;
  
      const newCurrentData = {
        id,
        city: data.name,
        data: data,
      };
  
      await database.ref(`current/${data.name}`).set(newCurrentData);
  
      setWeatherData(data);
      setSelectedButton(id);
  
      handleSaveNewLogData(data, id);
    } catch (error) {
      console.log(error.response);

      setSelectedButton('');
      setWeatherData({} as WeatherData);
      setLoading(false);
      addToast({
        type: 'error',
        title: 'Ocorreu um erro!',
        description: 'Não foi possível salvar os dados!',
      });
    }
  };

  const handleSaveNewData = async (data: WeatherData) => {
    try {
      const id = uuidv4();
  
      const newCurrentData = {
        id,
        city: data.name,
        data: data,
      };
  
      await database.ref(`current/${data.name}`).set(newCurrentData);
  
      const newButton: ButtonProps = {
        id,
        city: data.name,
      };
  
      setButtons((prevButtons) => {
        return [...prevButtons, newButton];
      });
      setWeatherData(data);
      setSelectedButton(id);
  
      handleSaveNewLogData(data, id);
    } catch (error) {
      console.log(error.response);

      setSelectedButton('');
      setWeatherData({} as WeatherData);
      setLoading(false);
      addToast({
        type: 'error',
        title: 'Ocorreu um erro!',
        description: 'Não foi possível salvar os dados!',
      });
    }
  };

  const handleSaveRequestData = async (data: WeatherData) => {
    console.log(data.name);
    try {
      const res = (await database.ref(`current/${data.name}`).once('value'));
      const response = res ? res.val() : null;

      if (response) {
        handleUpdateData(data, response.id);
      }

      if (!response) {
        handleSaveNewData(data);
      }

    } catch (error) {
      console.log(error.response);

      setSelectedButton('');
      setWeatherData({} as WeatherData);
      setLoading(false);
      addToast({
        type: 'error',
        title: 'Ocorreu um erro!',
        description: 'Não foi possível realizar a busca!',
      });
    }
  };

  const handleFindWeatherData = useCallback(async (city: string) => {
    setLoading(true);
    const url = `weather?q=${city}&units=metric&appid=${key}&lang=${lang}`;

    try {
      const response = await apiweather.get<WeatherData>(url);

      handleSaveRequestData(response.data);
    } catch (err) {
      console.log(err);

      setSelectedButton('');
      setWeatherData({} as WeatherData);
      setLoading(false);
      addToast({
        type: 'error',
        title: 'Ocorreu um erro!',
        description: 'Não foi possível realizar a busca!',
      });
    }
  }, []);

  const handleSubmit = useCallback((data: { city: string }) => {
    setOpenForm(false);
    handleFindWeatherData(data.city);
  }, []);

  useEffect(() => {
    if (initialButtons.length > 0) {
      setButtons(initialButtons);
      handleFindWeatherData(initialButtons[0].city);
    } else {
      handleFindWeatherData('Araraquara');
    }
  }, [initialButtons]);

  useEffect(() => {
    console.log('buttons: ', buttons);
    const buttonIndex = buttons.findIndex(button => button.id === selectedButton);
    console.log('buttonIndex: ', buttonIndex);
    if (buttons.length > 3 && buttonIndex > 0) {
      scrollTo((buttonIndex - 1) * -1);
    }

    if (buttonIndex === 0) {
      scrollTo(0);
    }
  }, [buttons, selectedButton]);

  return (
    <Layout title="home" href='/' backdrop={openForm} onClick={() => setOpenForm(false)}>
      <Section>
        <Container>
          <CommandsContainer>
            <Carrousel
              loading={loading}
              buttonsArray={buttons}
              selectedButton={selectedButton}
              handleSelectedButton={(buttonId: string) => setSelectedButton(buttonId)}
              handleFindWeatherData={(city: string) => handleFindWeatherData(city)}
            />
            <CommandsContainerBottomDiv>
              <CommandsButton 
                loading={loading} 
                onClick={() => !loading && setOpenForm(true)}
              >
                Nova Pesquisa
              </CommandsButton>
              
              <CommandsButton 
                onClick={() => {
                  if(!loading) {
                    dispatch(getMaxMinRequest());
                    Router.push('/overview');
                  } 
                }} 
                loading={loading}
              >
                {'Max & Min'}
              </CommandsButton>
            </CommandsContainerBottomDiv>
          </CommandsContainer>
          <DataContainer>
            <WeatherCard data={weatherData} loading={loading} />
          </DataContainer>
        </Container>
      </Section>

      <Form
        openForm={openForm}
        setOpenForm={(open: boolean) => setOpenForm(open)}
        handleSubmit={(data) => handleSubmit(data)}
      />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await database.ref('current').once('value');
  const data = response ? response.val() : null;
  const initialButtons = [];

  if (data) {
    Object.keys(data).forEach((key, index) => (
      initialButtons.push(data[key])
    ));
  }
      
  return {
    props: {
      initialButtons,
    }
  }
}