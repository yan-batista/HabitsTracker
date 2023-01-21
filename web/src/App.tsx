import GlobalStyles from "./styles/GlobalStyles";

import { Center, MainContainer } from "./styles";
import Header from "./components/Header/index";
import SummaryTable from "./components/SummaryTable/index";

function App() {
  return (
    <>
      <Center className="App">
        <MainContainer>
          <Header />
          <SummaryTable />
        </MainContainer>
      </Center>
      <GlobalStyles />
    </>
  );
}

export default App;
