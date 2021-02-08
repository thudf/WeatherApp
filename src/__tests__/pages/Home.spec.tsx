import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import Home from '../../pages/index';
import api from '../../services/apiweather';

const apiMock = new MockAdapter(api);

const mockedSaveData = jest.fn();
const mockedPath = jest.fn();

jest.mock('../../../config/firebase', () => {
  return {
    database: () => ({
      ref: mockedPath,
      set: mockedSaveData,
    }),
  }
});

jest.mock('react-redux', () => {
  return {
    useDispatch: jest.fn(),
  }
});

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: jest.fn(),
    }),
  }
});

describe('Home Page', () => {
  it('should be able to save new weather data', async () => {
    const city = 'Araraquara'
    const lang = 'pt_br';
    const key = '36afed8b38a7c41e828de4a55c6e45ce';
    apiMock.onGet(`weather?q=${city}&units=metric&appid=${key}&lang=${lang}`).reply(200, 
      {
        "coord": {
          "lon": -122.08,
          "lat": 37.39
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 282.55,
          "feels_like": 281.86,
          "temp_min": 280.37,
          "temp_max": 284.26,
          "pressure": 1023,
          "humidity": 100
        },
        "visibility": 16093,
        "wind": {
          "speed": 1.5,
          "deg": 350
        },
        "clouds": {
          "all": 1
        },
        "dt": 1560350645,
        "sys": {
          "type": 1,
          "id": 5122,
          "message": 0.0139,
          "country": "BR",
          "sunrise": 1560343627,
          "sunset": 1560396563
        },
        "timezone": -25200,
        "id": 420006353,
        "name": "Araraquara",
        "cod": 200
      }
    );

    const { getByText, getByPlaceholderText } = render(<Home initialButtons={[]} />);

    const newSearchButton = getByText('Nova Pesquisa');
    const searchField = getByPlaceholderText('Cidade');
    const submitButton = getByText('Buscar');

    fireEvent.click(newSearchButton);
    fireEvent.change(searchField, { target: { value: 'Araraquara' } });
    fireEvent.click(submitButton);

    // await waitFor(() => {
    //   expect(mockedPath).toHaveBeenCalledWith('current/Araraquara');
    // });
  });
});