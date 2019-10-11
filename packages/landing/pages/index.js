import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from 'common/src/theme/interior';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Interior/Navbar';
import Banner from '../containers/Interior/Banner';
import Feature from '../containers/Interior/Feature';
import AboutUs from '../containers/Interior/AboutUs';
import Project from '../containers/Interior/Project';
import Team from '../containers/Interior/Team';
import News from '../containers/Interior/News';
import Testimonial from '../containers/Interior/Testimonial';
import Gallery from '../containers/Interior/Gallery';
import Newsletter from '../containers/Interior/Newsletter';
import Footer from '../containers/Interior/Footer';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from '../containers/Interior/interior.style';

export default () => {
  return (
    <ThemeProvider theme={interiorTheme}>
      <Fragment>
        <Head>
          <title>Jadeite Taipei | 台北翡翠</title>
          <meta charset="utf-8"></meta>
          <meta name="theme-color" content="#171717" />
          <meta name="description" content="This is a website about a taipei jewelry store that sells jade,jadeite
          ,ruby,saphire,diamonds,jewelry. 這是一個有關出售翡翠，翡翠的台北珠寶店的網站
          ，紅寶石，藍寶石，鑽石,珠寶." />
          <meta
            name="keywords"
            content="diamond,diamonds,ruby,saphire,jade, jadeite, jewelry, 
            鑽石，鑽石，紅寶石，藍寶石，翡翠，翡翠，珠寶"
          />
          <meta name="author" content="Cheryl Liao" />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <InteriorWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Feature />
            <AboutUs />
            <Project />
            <Team />
            <News />
            <Testimonial />
            <Gallery />
            <Newsletter />
          </ContentWrapper>
          <Footer />
        </InteriorWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
