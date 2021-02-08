import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ITemp  } from '../store/modules/overview/type';

import { useToast } from '../hooks/toast';

import Layout from '../components/Layout';
import Section from '../components/Section';
import OverviewCard from '../components/OverviewCard';

import { Container } from '../styles/pages/Overview';

export default function Overview() {
  const { addToast } = useToast();

  const temp_max = useSelector<IState, ITemp>(state => state.overview.temp_max);
  const temp_min = useSelector<IState, ITemp>(state => state.overview.temp_min);
  const loading = useSelector<IState, boolean>(state => state.overview.loading);
  const failureMessage = useSelector<IState, string>(state => state.overview.failureMessage);

  useEffect(() => {
    if (failureMessage !== '') {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro!',
        description: 'Não foi possível verificar máxima e mínima!',
      });
    }
  }, [loading]);

  return (
    <Layout title='MAX & MIN' href='/'>
      <Section>
        <Container>
          <OverviewCard
            type='Mínima' 
            temp={temp_min.temp} 
            location={temp_min.local}
            loading={loading}
          />

          <OverviewCard
            type='Máxima' 
            temp={temp_max.temp} 
            location={temp_max.local}
            loading={loading}
          />
        </Container>
      </Section>
    </Layout>
  )
}
