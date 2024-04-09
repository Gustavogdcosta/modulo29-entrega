import {ThemeProvider} from 'styled-components';
import React from 'react';
import EstiloGlobal, { Container } from './styles';
import CoresPadroes from './themes/colors';
import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import ListaVagas from './containers/ListaVagas';

function App() {
  return (
  <ThemeProvider theme={CoresPadroes}>
    <EstiloGlobal/>
      <Container>
        <Cabecalho />
            <Hero />
            <div className="container">
              <ListaVagas />
            </div>
      </Container>
  </ThemeProvider>
  );
}

export default App;
