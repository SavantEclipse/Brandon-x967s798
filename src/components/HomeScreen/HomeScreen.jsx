import { StyleSheet, Text, View } from "react-native";
import Categories from "../Categories/Categories";
import Header from "../Header/Header";
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* test */}
      <Header />
      <Categories />
{/*Brandon hear in main  */}
      {/* SearchBar  */}

      {/* Sidebar */}

      {/* Weekly Specials */}

      {/* Bottom Tab navigator */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
  },
});
