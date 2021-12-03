import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import styles from './AppStyleSheet';
import search from './assets/images/search.png';
import arrowUp from './assets/images/arrowUp.png';
import arrowDown from './assets/images/arrowDown.png';
import SearchTab from './components/SearchTab';
const { width } = Dimensions.get('window');
const DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
import BackgroundImage from './components/BackGroundImage';
import fontColorContrast from './hooks/fontColorContrast';

export default function App() {
  const left = new Animated.Value(width);
  const [data, setData] = useState(null);

  const formatAMPM = date => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  };

  const formatDate = newDate => {
    return `As of ${formatAMPM(new Date())}, ${DAY[newDate?.getDay()]} ${MONTH[newDate?.getMonth()]
      } ${newDate?.getDate()}`;
  };

  useEffect(() => {
    if (data)
      Animated.spring(left, {
        toValue: width,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start();
  }, [data]);
  return (
    <>
      {data && <BackgroundImage value={data?.weather_state_abbr} />}
      <View style={styles.container_}>
        <SearchTab
          animatedValue={left}
          closeAnimate={() => {
            Animated.spring(left, {
              toValue: width,
              useNativeDriver: false,
              easing: Easing.linear,

            }).start();
          }}
          setData={setData}
        />
        <SafeAreaView style={styles.container}>
          <View style={styles.layer1}>
            <View style={styles.layer1TextContainer}>
              <Text
                style={[
                  styles.layer1Text1,
                  { color: fontColorContrast(data?.weather_state_abbr) },
                ]}>
                {data ? formatDate(new Date(data?.created)) : `-- --`}
              </Text>
              <Text style={[styles.layer1Text2,
              { color: fontColorContrast(data?.weather_state_abbr) },
              ]}>
                {data ? data?.title : `---- ----`}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.menu}
              onPress={() => {
                Animated.spring(left, {
                  toValue: 0,
                  useNativeDriver: false,
                  easing: Easing.bounce,
                  bounciness: 0,
                }).start();
              }}>
              <Image
                source={{ uri: Image.resolveAssetSource(search).uri }}
                resizeMode={'contain'}
                style={{
                  height: 27,
                  width: 27,
                  tintColor: fontColorContrast(data?.weather_state_abbr),
                }}
                tintColor={fontColorContrast(data?.weather_state_abbr)}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={[styles.layer2,
            { borderColor: fontColorContrast(data?.weather_state_abbr) },]}>
              <View style={styles.layer2_}>
                <View style={styles.mainCont}>
                  <Text style={[styles.mainTemp,
                  { color: fontColorContrast(data?.weather_state_abbr) },
                  ]}>
                    {data ? data?.the_temp?.toFixed(0) : `--`}
                  </Text>
                  <Text style={[styles.degree,
                  { color: fontColorContrast(data?.weather_state_abbr) },
                  ]}>°C</Text>
                </View>
                <View style={styles.lowHighContainer}>
                  <View style={styles.arrowWithDegrees}>
                    {data && (
                      <Image
                        source={{ uri: Image.resolveAssetSource(arrowUp).uri }}
                        resizeMode={'contain'}
                        style={{
                          height: 15,
                          width: 15,
                          tintColor: fontColorContrast(data?.weather_state_abbr),
                        }}
                        tintColor={fontColorContrast(data?.weather_state_abbr)}
                      />
                    )}
                    <Text style={[styles.lowHighText,
                    { color: fontColorContrast(data?.weather_state_abbr) },
                    ]}>
                      {data
                        ? `${data?.max_temp?.toFixed(0) == '-0'
                          ? '0'
                          : data?.max_temp?.toFixed(0)
                        }°C`
                        : `--°C`}
                    </Text>
                  </View>
                  <View style={styles.arrowWithDegrees}>
                    {data && (
                      <Image
                        source={{ uri: Image.resolveAssetSource(arrowDown).uri }}
                        resizeMode={'contain'}
                        style={{
                          height: 15,
                          width: 15,
                          tintColor: fontColorContrast(data?.weather_state_abbr),
                        }}
                        tintColor={fontColorContrast(data?.weather_state_abbr)}
                      />
                    )}
                    <Text style={[styles.lowHighText,
                    { color: fontColorContrast(data?.weather_state_abbr) },
                    ]}>
                      {data ? `${data?.min_temp?.toFixed(0)}°C` : `--°C`}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={[styles.description,
            { fontSize: data ? 26 : 21 },
            { color: fontColorContrast(data?.weather_state_abbr) },
            ]}>
              {data
                ? data?.weather_state_name
                : `Click the search icon to get started`}
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
