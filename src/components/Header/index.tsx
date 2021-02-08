import Link from 'next/link';
import { Header, HeaderContent, HeaderNav, HeaderMenu } from './styles';

interface HeaderProps {
  href: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({ href }) => {
  return (
    <>
      <Header>
        <HeaderContent>
          <HeaderNav>
            <Link href={href}>
              <div>
                <img src='/cloudy.svg' alt='Logo WeatherApp' />
                <span>Weather</span>
              </div>
            </Link>
          </HeaderNav>
          <HeaderMenu>
          </HeaderMenu>
        </HeaderContent>
      </Header>
    </>
  )
};

export default HeaderComponent;
