import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: "Raining like a cry",
    subtitle: "For more info look outside",
    icon: 'weather-pouring'
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: "Sunny as Apolon",
    subtitle: "Go get your seat",
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    icon: 'weather-lightning'
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: "Clouds",
    subtitle: "I know, so boring",
    icon: 'weather-cloudy'
  },
  Snow: {
    colors: ['#897F7FE', '#66A6FF'],
    title: "Cold as balls",
    subtitle: "Do you want to bulid a snowman?",
    icon: 'weather-snowy'
  },
  Drizzle: {
    colors: ['#00C6FB', '#005BEA'],
    title: "Drizzle",
    subtitle: "Is like rain",
    icon: 'weather-hail'
  }

}

function Weather({weatherName, temp}) {
      console.log(weatherName);

      return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
          <View style={styles.upper}>
            <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
            <Text style={styles.temp}>{temp}º</Text>
          </View>
          <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
          </View>
        </LinearGradient>
      )
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
})
