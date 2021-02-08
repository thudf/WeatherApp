import React from 'react';
import { ToastProvider } from './toast';
import { ScrollSliderProvider } from './scrollSlider';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <ScrollSliderProvider>{children}</ScrollSliderProvider>
  </ToastProvider>
);

export default AppProvider;
