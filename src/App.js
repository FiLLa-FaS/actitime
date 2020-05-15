import React from "react";
import { Container, Header, Footer, UiTitle, Slider } from "./components";

function App() {
  const nav_header = [
    { id: 1, name: "About", url: "/about" },
    {
      id: 2,
      name: "Help",
      url: "/help",
      subnav: [
        { id: 4, name: "User Guide", url: "/help/guide" },
        { id: 5, name: "Contact Support", url: "/help/support" },
      ],
    },
    { id: 3, name: "Features", url: "/features" },
  ];
  const nav_footer = [
    { id: 1, name: "About Us", url: "/about" },
    { id: 2, name: "Privacy Policy", url: "/privacy" },
  ];

  return (
    <div>
      <Header nav={nav_header} />
      <main>
        <Container>
          <UiTitle
            title="Features"
            excerpt="Some of the features and advantages that we provide for those of you who store data in this Data Warehouse."
          />
          <Slider />
        </Container>
      </main>
      <Footer nav={nav_footer} />
    </div>
  );
}

export default App;
