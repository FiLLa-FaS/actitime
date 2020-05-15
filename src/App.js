import React from "react";
import { Container, Header, Footer, UiTitle } from "./components";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <UiTitle
            title="Features"
            excerpt="Some of the features and advantages that we provide for those of you who store data in this Data Warehouse."
          />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
