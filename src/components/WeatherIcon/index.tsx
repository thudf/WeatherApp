import React, { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import { IconType } from 'react-icons';
import * as WiIcons from 'react-icons/wi';

interface WeatherIconProps {
  name: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ name }) => {
  const Icon = () => {
    switch (name) {
      case 'WiThunderstorm':
        return <WiIcons.WiThunderstorm />;
        
      case 'WiLightning':
        return <WiIcons.WiLightning />;
        
      case 'WiSprinkle':
        return <WiIcons.WiSprinkle />;
        
      case 'WiRain':
        return <WiIcons.WiRain />;
        
      case 'WiRainMix':
        return <WiIcons.WiRainMix />;
        
      case 'WiShowers':
        return <WiIcons.WiShowers />;
        
      case 'WiSprinkle':
        return <WiIcons.WiSprinkle />;
        
      case 'WiStormShowers':
        return <WiIcons.WiStormShowers />;
        
      case 'WiSnow':
        return <WiIcons.WiSnow />;
        
      case 'WiSleet':
        return <WiIcons.WiSleet />;
        
      case 'WiSmoke':
        return <WiIcons.WiSmoke />;
        
      case 'WiDayHaze':
        return <WiIcons.WiDayHaze />;
        
      case 'WiDust':
        return <WiIcons.WiDust />;
        
      case 'WiFog':
        return <WiIcons.WiFog />;
        
      case 'WiCloudyGusts':
        return <WiIcons.WiCloudyGusts />;
        
      case 'WiTornado':
        return <WiIcons.WiTornado />;
        
      case 'WiDaySunny':
        return <WiIcons.WiDaySunny />;
        
      case 'WiCloudy':
        return <WiIcons.WiCloudy />;
        
      case 'WiHurricane':
        return <WiIcons.WiHurricane />;
        
      case 'WiSnowflakeCold':
        return <WiIcons.WiSnowflakeCold />;
        
      case 'WiHot':
        return <WiIcons.WiHot />;
        
      case 'WiWindy':
        return <WiIcons.WiWindy />;
        
      case 'WiHail':
        return <WiIcons.WiHail />;
        
      case 'WiStrongWind':
        return <WiIcons.WiStrongWind />;
        
      default:
        return <WiIcons.WiDaySunny />;
    }
  };

  useEffect(() => {
    Icon();
  }, [name]);

  return <Icon />;
};

export default WeatherIcon;
