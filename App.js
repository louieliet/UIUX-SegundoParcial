import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Card from './components/Card';
import SpecialCard from './components/SpecialCard';

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.locationSection}>
          <Image source={require("./public/place.png")} style={styles.locationImage}/>
          <Text style={styles.locationText}>
            9185 Mayflower Drive, Atlanta
          </Text>
        </View>
        
        <View style={styles.headerSection}>
          <Image source={require("./public/sushiBG.png")} style={styles.headerImage}/>
          <Image source={require("./public/scroll.png")} style={styles.scrollImage}/>
        </View>
        
        <View style={styles.section}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>
              All Restaurants
            </Text>
            <Text style={styles.subtitle}>
              See all
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={15} decelerationRate="fast">
            <Card title="Groceries" description="burger, dessert" time="15-20 min" rating="4.7" imageSource={require('./public/groceryImage.png')} />
            <Card title="Groceries" description="burger, dessert" time="15-20 min" rating="4.7" imageSource={require('./public/groceryImage.png')} />
            <Card title="Groceries" description="burger, dessert" time="15-20 min" rating="4.7" imageSource={require('./public/groceryImage.png')} />
            <Card title="Groceries" description="burger, dessert" time="15-20 min" rating="4.7" imageSource={require('./public/groceryImage.png')} />
          </ScrollView>
        </View>
        
        <View style={styles.section}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>
              All Groceries
            </Text>
            <Text style={styles.subtitle}>
              See all
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={15} decelerationRate="fast">
            <Card title="Groceries" description="burger, dessert" time="15-20 min" rating="4.7" imageSource={require('./public/groceryImage2.png')} />
            <Card title="Groceries" description="burger, dessert" time="15-20 min" rating="4.7" imageSource={require('./public/groceryImage2.png')} />
            <Card title="Groceries" description="burger, dessert" time="15-20 min" rating="4.7" imageSource={require('./public/groceryImage2.png')} />
            <Card title="Groceries" description="burger, dessert" time="15-20 min" rating="4.7" imageSource={require('./public/groceryImage2.png')} />
          </ScrollView>
        </View>
        
        <View style={styles.section}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>
              Specials
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={15} decelerationRate="fast">
            <SpecialCard title="winestory" subtitle="GROCERY" description="Special Offer" time="15-20 min" rating="4.7" imageSource={require('./public/specialsImage.png')} />
            <SpecialCard title="winestory" subtitle="GROCERY" description="Special Offer" time="15-20 min" rating="4.7" imageSource={require('./public/specialsImage.png')} />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 70,
    marginLeft: 18,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  }, 
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  }, 
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingRight: 20,
  },
  section: {
    width: '100%',
    paddingVertical: 10,
  },
  locationSection: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  locationText: {
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
    fontSize: 16,
  },
  headerSection: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerImage: {
    width: 343,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  scrollImage: {
    width: 92,
  },
  locationImage: {
    width: 20,
    height: 20,
  },
});