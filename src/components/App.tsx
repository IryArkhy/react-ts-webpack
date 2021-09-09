import { FC } from 'react';
import Title from './Title';
import ContentContainer from './ContentContainer';
import './styles.scss';

const App: FC = () => (
  <ContentContainer>
    <Title text="React Typescript Webpack boilerplate" />
  </ContentContainer>
);

export default App;
