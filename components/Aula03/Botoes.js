import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import { CustomButton } from './CustomButton';

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const icons = [
  'laugh',
  'laugh-wink',
  'laugh-beam',
  'laugh-squint',
  'grin-hearts',
  'kiss-beam',
  'kiss-wink-heart',
  'microphone-alt'
];

export default ({
  digito,
  funcLimpar,
  funcPonto,
  funcOperacao
}) => {
  const [index, setIndex] = useState(0);
  const [sound, setSound] = useState(new Audio.Sound());

  const handleClick = () => {
    setIndex(index => (index + 1) % icons.length);
  }

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(require('./rick-rolled.mp3'));
      setSound(sound);
    }

    loadSound();
  }, []);

  useEffect(() => {
    const playSound = async () => {
      await sound.playAsync();
    }

    const stopSound = async () => {
      await sound.stopAsync();
    }

    if (index === icons.length - 1) {
      playSound();
    } else {
      stopSound();
    }
  }, [index, sound]);

  return (
    <View style={styles.wrapper}>
      <Row>
        <CustomButton onPress={funcLimpar} isOrange>AC</CustomButton>
        {/*
          * TODO
          * Implementar função de apagar um dígito
          */}
        <CustomButton onPress={() => {}} isOrange icon="backspace" />
        {/*
          * TODO
          * Implementar função de porcentagem
          */}
        <CustomButton onPress={() => {}} isOrange>%</CustomButton>
        <CustomButton onPress={() => funcOperacao('/')} isOrange>&divide;</CustomButton>
      </Row>
      <Row>
        <CustomButton onPress={() => digito(7)}>7</CustomButton>
        <CustomButton onPress={() => digito(8)}>8</CustomButton>
        <CustomButton onPress={() => digito(9)}>9</CustomButton>
        <CustomButton onPress={() => funcOperacao('*')} isOrange>&times;</CustomButton>
      </Row>
      <Row>
        <CustomButton onPress={() => digito(4)}>4</CustomButton>
        <CustomButton onPress={() => digito(5)}>5</CustomButton>
        <CustomButton onPress={() => digito(6)}>6</CustomButton>
        <CustomButton onPress={() => funcOperacao('-')} isOrange>&minus;</CustomButton>
      </Row>
      <Row>
        <CustomButton onPress={() => digito(1)}>1</CustomButton>
        <CustomButton onPress={() => digito(2)}>2</CustomButton>
        <CustomButton onPress={() => digito(3)}>3</CustomButton>
        <CustomButton onPress={() => funcOperacao('+')} isOrange>+</CustomButton>
      </Row>
      <Row>
        <CustomButton onPress={handleClick} isOrange icon={icons[index]} />
        <CustomButton onPress={() => digito(0)}>0</CustomButton>
        <CustomButton onPress={funcPonto}>,</CustomButton>
        <CustomButton onPress={() => funcOperacao('=')} hasCircle>=</CustomButton>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    display: 'flex',
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex'
  }
});
