import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import {View, Text, Button} from 'react-native';
import {AssetList} from './AssetList';
import {RatingElement} from '../model/RatingElements';

export const values = [0, 1, 2, 3, 5, 8, 20, 50, 100];

export default ({
  applyRating,
  elementsToRate,
  ratingFinished,
}: {
  applyRating: (index: number, asset: RatingElement) => void;
  elementsToRate: RatingElement[];
  ratingFinished: () => void;
}) => {
  const [currentIndex, setIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const element = elementsToRate[currentIndex];

  const handleRating = () => {
    element.rating = sliderValue;
    // update current rating element
    applyRating(currentIndex, element);
    if (currentIndex < elementsToRate.length - 1) {
      // check if everybody else has rated
      setIndex(currentIndex + 1);
      setSliderValue(0);
    } else {
      // send result to parent component with apply rating
      ratingFinished();
    }
  };

  return (
    <View>
      <Text>Please provide your value rating for the asset {element.name}</Text>
      <Text>Asset Value: {sliderValue}</Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={8}
        value={sliderValue}
        onValueChange={(value) => {
          setSliderValue(values[value]);
        }}
        step={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <Button title="Rate Asset" onPress={handleRating} />
      <AssetList elements={elementsToRate} />
    </View>
  );
};
