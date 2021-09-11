import { FC } from 'react';
import Title from './Title';
import ContentContainer from './ContentContainer';
import Card from './Card';
import './styles.scss';

const App: FC = () => (
  <ContentContainer>
    <Title text="React Typescript Webpack boilerplate" />
    <Card />
  </ContentContainer>
);

export default App;
