import React, { useRef, useState } from 'react';
import { Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import Button from 'src/components/Button';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SafeAreaView } from '../../components';
import navigationPropTypes from '../../utils/commonPropTypes'
import bgMain from '../../assets/img/background/splash.jpg';
import cryptoLogo from '../../assets/img/icon/cryptoIcon.png';
import styles from './Onboarding.css';
import data from './OnboardingRotation';

const Onboarding = ({ navigation }) => {
  const SLIDER_WIDTH = Dimensions.get('window').width + 80
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)
  const carousel = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSnapToItem = index => {
    setActiveSlideIndex(index);
  };

  const carouselCardItem = ({ item, index }) => {
    return (
      <View style={[styles.slide]} key={index}>
        <Image
          style={[styles.contaimerImageSliderImage, item.imageStyle]}
          source={item.url}
        />
        <Text style={styles.words}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <ImageBackground style={[styles.bgContainer]} source={bgMain}>
      <SafeAreaView style={[styles.container]}>
        <View style={[styles.containerLogoAndTitle]}>
          <Text style={styles.bigwords}>
            {`Crypto Wallet App`}
          </Text>
        </View>
        <View style={[styles.containerImageSlider]}>
        <Carousel 
          ref={carousel}          
          data={data}
          layout="tinder"
          layoutCardOffset={9}
          renderItem={carouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={handleSnapToItem}
        />      
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlideIndex}
          carouselRef={carousel}
          dotStyle={[styles.paginationDotStyle]}
          animatedDuration={20}
          inactiveDotStyle={[styles.inactiveDotStyle]}
          inactiveDotOpacity={0.3}
          inactiveDotScale={0.5}
        />
        </View>          
        <View style={[styles.buttonsContainer]}>
          <Button
            label="Get Started"
            onPress={() => navigation.navigate('Landing')}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

Onboarding.propTypes = {
  ...navigationPropTypes,
};

export default Onboarding;
