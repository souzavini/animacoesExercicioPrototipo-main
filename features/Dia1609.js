import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View,Animated } from 'react-native';

const Dia1609 = () => {


    const [opacity1] = React.useState(new Animated.Value(0));
    const [opacity2] = React.useState(new Animated.Value(0));
    const [opacity3] = React.useState(new Animated.Value(0));
    const [opacity4] = React.useState(new Animated.Value(0));
    const [opacity5] = React.useState(new Animated.Value(0));

    const [height1] = React.useState(new Animated.Value(0));
    const [height2] = React.useState(new Animated.Value(0));
    const [height3] = React.useState(new Animated.Value(0));
    const [height4] = React.useState(new Animated.Value(0));
    const [height5] = React.useState(new Animated.Value(0));

    const valores = [56.76, 28.57, 76.52, 37.76, 62.63];

    const gerarGrafico = () => {
        Animated.sequence([
            Animated.timing(height1, {toValue:valores[0], duration:400}),
            Animated.timing(height2, {toValue:valores[1], duration:400}),
            Animated.timing(height3, {toValue:valores[2], duration:400}),
            Animated.timing(height4, {toValue:valores[3], duration:400}),
            Animated.timing(height5, {toValue:valores[4], duration:400})
        ]).start();
        Animated.parallel([
            Animated.timing(opacity1, {toValue:valores[0], duration:3000, delay:2500}),
            Animated.timing(opacity2, {toValue:valores[1], duration:3000, delay:2500}),
            Animated.timing(opacity3, {toValue:valores[2], duration:3000, delay:2500}),
            Animated.timing(opacity4, {toValue:valores[3], duration:3000, delay:2500}),
            Animated.timing(opacity5, {toValue:valores[4], duration:3000, delay:2500})
        ]).start();
    }

    return (
        <View style={styles.container}>
            <Text 
                style={styles.text}> Boletim Epidemiológico {'\n'} 16 de setembro de 2021</Text>
            <View 
                style={styles.viewGraficos}>
                <Animated.View
                    style={[styles.viewAnimadas, {height:height1, backgroundColor:'#DF8021'}]}
                >
                    <Animated.Text style={{opacity:opacity1}}>{valores[0]}%</Animated.Text>
                </Animated.View>
                <Animated.View
                    style={[styles.viewAnimadas, {height:height2, backgroundColor:'#44AA8F'}]}
                >
                    <Animated.Text style={{opacity:opacity2}}>{valores[1]}%</Animated.Text>
                </Animated.View>
                <Animated.View
                    style={[styles.viewAnimadas, {height:height3, backgroundColor:'#AA5344'}]}
                >
                    <Animated.Text style={{opacity:opacity3}}>{valores[2]}%</Animated.Text>
                </Animated.View>  
                <Animated.View
                    style={[styles.viewAnimadas, {height:height4, backgroundColor:'#7c5d9a'}]}
                >
                    <Animated.Text style={{opacity:opacity4}}>{valores[3]}%</Animated.Text>
                </Animated.View>   
                <Animated.View
                    style={[styles.viewAnimadas, {height:height5, backgroundColor:'#345fd0'}]}
                >
                    <Animated.Text style={{opacity:opacity5}}>{valores[4]}%</Animated.Text>
                </Animated.View>      
            </View>
            <View style={styles.viewBotoes}>
                <TouchableOpacity
                    style={styles.botoes}
                    onPress={gerarGrafico}
                >
                <Text 
                    style={{fontWeight:'bold', fontSize:12, margin: 2}}>Gerar gráfico</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Dia1609;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#F6F2EE',
        alignItems: 'center',
        marginTop: -40,
        marginBottom: -30,
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      alignItems: 'center',
      marginBottom: -20,
    },
    viewGraficos: {
      flex: 0.5,
      flexDirection: 'row',
      alignItems: 'flex-end'
    },
    viewAnimadas: {
      width: 40,
      margin: 2, 
      alignItems: 'center',
    },
    viewTextos: {
      fontWeight: 'bold', 
      fontSize: 10,
    },
    viewBotoes: {
        margin: 4,
    }, 
    botoes: {
      backgroundColor: '#DDDDDD',
      padding: 4,
      alignItems: 'center',
    }
  });
