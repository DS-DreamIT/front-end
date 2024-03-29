import React from 'react'
import {View, Image, StyleSheet, Text} from 'react-native'

// @ts-ignore
const Keyword = ({name, keywords}) => {
  //@ts-ignore
  let keyword = keywords.reduce((acc, current, idx) => {
    acc = acc + current
    if (idx < keywords.length - 1) {
      acc += ', '
    }
    return acc
  }, '')
  return (
    <View>
      <Image
        style={[styles.cloud]}
        source={require('../../assets/images/cloud.png')}
      />
      <Image
        style={[styles.moon]}
        source={require('../../assets/images/halfmoon.png')}
      />
      <Text style={[styles.title]}>#꿈분석</Text>
      <View style={[styles.line]} />
      {keywords.length > 0 ? (
        <Text style={[styles.info]}>
          이번 달 {name}님의 꿈 키워드는 {'\n'}
          <Text style={[styles.keyword]}>{keywords.length > 0 && keyword}</Text>
          이에요.
        </Text>
      ) : (
        <Text style={[styles.info]}>
          {name}님의 꿈 키워드가 {'\n'}아직 없어요.
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  cloud: {
    marginTop: 50,
  },
  moon: {
    position: 'absolute',
    marginTop: 39.47,
    marginLeft: 274.47,
  },
  line: {
    position: 'absolute',
    borderBottomWidth: 2,
    borderColor: '#DDCEFF',
    width: 187,
    marginLeft: 43,
    marginTop: 85,
  },
  title: {
    position: 'absolute',
    marginLeft: 43,
    marginTop: 43,
    fontSize: 30,
    color: '#BFA9D7',
    fontFamily: 'SCDream5-Regular',
  },
  info: {
    position: 'absolute',
    marginLeft: 84,
    marginTop: 135,
    fontSize: 19,
    color: '#000000',
    fontFamily: 'SCDream3',
  },
  keyword: {
    fontWeight: 'bold',
    fontFamily: 'SCDream5-Regular',
  },
})

export default Keyword
