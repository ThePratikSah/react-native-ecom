import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import COLORS from './assets/colors';

function App() {
  const imageUrl = 'https://source.unsplash.com/random/500x300?food';

  const category = [
    'Our Pride',
    'Mashroom Special',
    'Dalo Ki Bahar',
    'Kofte Ke Nazare',
    'Basmati Ki Mehak',
    'Kuch Meetha',
    'Tnadoori Jaadu',
  ];

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.margin}>
        <Text style={styles.heading}>Satkar</Text>
        <Text style={styles.featured}>Featured</Text>
        <View style={styles.featuredContainer}>
          <Text style={styles.featuredSubtitle}>
            We have prepared {'\n'}the best food for you
          </Text>
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllBtnText}>View all</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.featuredImage}
          source={{
            uri: imageUrl,
          }}
        />
        <Text style={styles.subHeading}>Category</Text>
        <View style={styles.categoryView}>
          {category.map((ele, i) => (
            <TouchableOpacity key={i} style={styles.categoryItem}>
              <Text>{ele}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  categoryItem: {
    borderRadius: 5,
    borderWidth: 2,
    marginRight: 1,
    marginBottom: 1,
    padding: 10,
  },
  categoryView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryBtn: {
    backgroundColor: COLORS.ACCENT,
    borderColor: COLORS.BACKGROUND,
    borderRadius: 20,
    borderWidth: 5,
  },
  background: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  margin: {
    margin: 15,
  },
  heading: {
    fontFamily: 'AbrilFatface-Regular',
    fontSize: 35,
    color: COLORS.DARK,
  },
  featured: {
    fontFamily: 'AbrilFatface-Regular',
    color: COLORS.DARK,
    marginTop: 30,
    fontSize: 45,
  },
  featuredSubtitle: {
    marginTop: 5,
    opacity: 0.7,
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: COLORS.DARK,
  },
  viewAllBtn: {
    width: 120,
    alignItems: 'center',
    backgroundColor: COLORS.ACCENT,
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  viewAllBtnText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: COLORS.DARK,
  },
  featuredContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredImage: {
    marginTop: 20,
    borderRadius: 20,
    width: '100%',
    height: 260,
  },
  subHeading: {
    marginBottom: 10,
    color: COLORS.DARK,
    marginTop: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
  },
});

export default App;
