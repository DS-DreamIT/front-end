import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native'

export default function DreamTravel() {
  return (
    <View style={styles.view}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        style={styles.bgImage}>
        <Image
          source={require('./assets/images/goBack.png')}
          style={styles.gobackPNG}
        />
        <View>
          <Image
            source={require('./assets/images/flight.png')}
            style={styles.flightPNG}
          />
          <Text style={styles.titleText}>타인의 꿈 여행하기</Text>
        </View>
        <View style={styles.feelingsView}>
          <Text style={styles.feelingsText}>#슬픔 #씁쓸</Text>
          <Image
            source={require('./assets/images/line.png')}
            style={styles.line}
          />
        </View>
        <View style={styles.travelView}>
          <Text style={styles.travelText}>히히</Text>
        </View>
        <Image
          source={require('./assets/images/line.png')}
          style={styles.line}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gobackPNG: {
    marginTop: 20,
    marginLeft: 10,
  },
  titleText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'SCDream5',
  },
  flightPNG: {
    marginLeft: 310,
  },
  feelingsView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  feelingsText: {
    color: '#FFFFFF',
    marginTop: 25,
    fontSize: 22,
    marginRight: 110,
  },
  line: {
    marginTop: 40,
  },
  travelView: {
    alignSelf: 'center',
    width: '80%',
    height: '55%',
    marginTop: 30,
    backgroundColor: '#DDCEFF',
    borderRadius: 5,
  },
  travelText: {
    margin: 5,
  },
})
