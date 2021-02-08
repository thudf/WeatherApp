import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

import { useScrollSlider } from '../../hooks/scrollSlider';

import {
  ButtonCity,
  Container,
  Wrapper,
  Slider,
  DownButton,
  UpButton,
} from './styles';

interface ButtonProps {
  id: string;
  city: string;
}

interface CarrouselProps {
  buttonsArray: ButtonProps[];
  loading: boolean;
  selectedButton: string;
  handleSelectedButton(buttonId: string): void;
  handleFindWeatherData(city: string): void;
}

const Carrousel: React.FC<CarrouselProps> = ({ 
  buttonsArray, 
  loading,
  selectedButton,
  handleSelectedButton,
  handleFindWeatherData,
  ...rest 
}) => {
  const { scrollPos } = useScrollSlider();

  const [buttons, setButtons] = useState<ButtonProps[]>([]);
  const [position, setPosition] = useState(0);
  const [last, setLast] = useState(false);
  const [first, setFirst] = useState(true);

  const handleButtonClick = useCallback((button: ButtonProps) => {
    handleSelectedButton(button.id);
    handleFindWeatherData(button.city)
  }, [handleFindWeatherData]);

  const handleUpClick = useCallback(() => {
    if (position < 0) {
      setPosition(position + 1);
    }
  }, [position]);

  const handleDownClick = useCallback(() => {
    if (position > ((buttons.length - 1) * -1)) {
      setPosition(position - 1);
    }
  }, [position, buttons]);

  useEffect(() => {
    if (position === 0) {
      setFirst(true);
    } else {
      setFirst(false);
    }

    if (position === ((buttons.length - 1) * -1)) {
      setLast(true);
    } else {
      setLast(false);
    }
  }, [position]);

  useEffect(() => {
    setButtons(buttonsArray);
    setPosition(0);
  }, [buttonsArray, buttons]);

  useEffect(() => {
    setPosition(scrollPos);
  }, [scrollPos]);

  return (
    <Container>

      <Wrapper>
        <Slider position={position}>
          {buttons.map((button, index) => {
            return (
              <ButtonCity
                key={button.id}
                onClick={() => !loading && handleButtonClick(button)}
                active={button.id === selectedButton}
                loading={loading}
              >
                {button.city}
              </ButtonCity>
            )
          })}
        </Slider>
      </Wrapper>

      <UpButton onClick={() => handleUpClick()} isFirt={first}>
        <FiChevronUp />
      </UpButton>

      <DownButton onClick={() => handleDownClick()} isLast={last}>
        <FiChevronDown />
      </DownButton>

    </Container>
  )
};

export default Carrousel;
