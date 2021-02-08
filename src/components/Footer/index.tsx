import { useEffect, useState } from 'react';
import { Footer, FooterContent } from './styles';

const HeaderComponent: React.FC = () => {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const year = new Date().getFullYear();
    setYear(year);
  }, []);

  return (
    <>
      <Footer>
        <FooterContent>
          <div>
            <img src='/cloudy.svg' alt='Logo WeatherApp' />
            <div>
              <span>Weather</span>
              <span>App</span>
            </div>
            <span>WeatherApp&copy; {year}</span>
          </div>
        </FooterContent>
      </Footer>
    </>
  )
};

export default HeaderComponent;