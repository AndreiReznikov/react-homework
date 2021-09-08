import * as React from 'react';
import './main.global.css';
import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import { CardsList } from './CardsList/CardsList';

export function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}
