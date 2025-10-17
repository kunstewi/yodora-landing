// App layout
import Page from "./components/Sections/Page";

// Header
import Header from "./components/Sections/Header";
import Navigation from "./components/Sections/Navigation/Navigation";
import Hero from "./components/Sections/Hero";

// Main
import Main from "./components/Sections/Main";
import Dashboard from "./components/Sections/Dashboard";
import AppStatistics from "./components/Sections/AppStatistics";
import Features from "./components/Sections/Features";
import Pricing from "./components/Sections/Pricing/Pricing";
import Testimonials from "./components/Sections/Testimonials/Testimonials";
import CTA from "./components/Sections/CTA";

// Footer
import Footer from "./components/Sections/Footer";

// UI
import Modal from "./components/UI/Modal";
import MoreInformation from "./components/UI/MoreInformation";

import { ModalContextProvider } from "./contexts/ModalContext";

// Rest of your component remains the same

function App() {
  return (
    <ModalContextProvider>
      <Page>
        <Header>
          <Navigation />
          <Hero />
        </Header>

        <Main>
          <Dashboard />
          <AppStatistics />
          <Features />
          <Pricing />
          <Testimonials />
          <CTA />
        </Main>

        <Footer />

        <Modal modalName="more-information">
          <MoreInformation />
        </Modal>
      </Page>
    </ModalContextProvider>
  );
}

export default App;
