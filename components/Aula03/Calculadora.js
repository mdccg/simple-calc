import React from 'react';
import Display from './Display';
import Botoes from './Botoes';
import { View, StyleSheet } from 'react-native';
import { palette } from './palette';

export default () => {
  const [numero, setNumero] = React.useState('0');
  const [expMat, setExpMat] = React.useState('0');
  const [op, setOp] = React.useState(null);

  const atualizarCalc = (n) => {
    if (numero == '0' && n == '0') return;
    if (numero == '0') setNumero(n.toString());
    else setNumero(numero.toString() + n.toString());
  };

  const limpar = () => {
    setNumero('0');
    setExpMat('0');
    setOp(null);
  };

  const operacao = (operador) => {
    switch (operador) {
      case '+':
        setExpMat(expMat + '+' + numero);
        setNumero('0');
        setOp('+');
        break;
      case '-':
        setExpMat(expMat + '-' + numero);
        setNumero('0');
        setOp('-');
        break;
      case '*':
        if (expMat.length == 1 && expMat.indexOf('0') == 0) {
          setExpMat(expMat + '1' + '*' + numero);
        } else {
          setExpMat(expMat + '*' + numero);
        }
        setNumero('0');
        setOp('*');
        break;
      case '=':
        if (op == '=') {
          break;
        }
        setNumero(eval(expMat + op + numero));
        setExpMat('0');
        setOp('=');
        break;
    }
  };

  const ponto = () => {
    if (numero.indexOf('.') != -1) {
      return;
    }
    setNumero(numero.toString() + '.');
  };

  return (
    <View style={styles.wrapper}>
      <Display numero={numero} />
      <Botoes
        digito={atualizarCalc}
        funcLimpar={limpar}
        funcPonto={ponto}
        funcOperacao={operacao}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: palette.black,
    flexDirection: 'column',
    display: 'flex',
    width: '100%',
    flex: 1,
  }
});