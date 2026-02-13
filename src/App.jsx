import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { SkipNavigation } from './components/SkipNavigation/SkipNavigation';
import { BarraTopo } from './components/BarraTopo/BarraTopo';
import { Cabecalho } from './components/Cabecalho/Cabecalho';
import { PDFCardSystem } from './components/PDFCardSystem/PDFCardSystem';
import { Rodape } from './components/Rodape/Rodape';
import { Acessibilidade } from './components/Acessibilidade/Acessibilidade';
import { DadosAbertos } from './components/DadosAbertos/DadosAbertos';
import './App.css';
import { Pesquisa } from './components/Pesquisa/Pesquisa';
import {Teste} from './components/Teste/Teste';

function App() {
  
  return (
    <AccessibilityProvider>
      <SkipNavigation />
      <BarraTopo />
      <Cabecalho />
      <DadosAbertos />
      <Teste />
      <PDFCardSystem />
      <Rodape />
      <Acessibilidade />
    </AccessibilityProvider>
  );
}

export default App;