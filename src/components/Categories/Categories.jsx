import { StyleSheet, Text, View, ScrollView } from "react-native";
export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Burger",
    },
    {
      id: 2,
      name: "Pizza",
    },
    {
      id: 3,
      name: "Basket",
    },
    {
      id: 4,
      name: "Beverage",
    },
    {
      id: 5,
      name: "Salad",
    },
    {
      id: 6,
      name: "Wrap",
    },
    {
      id: 7,
      name: "Wing",
    },
    {
      id: 8,
      name: "Sandwich",
    },
    {
      id: 9,
      name: "Hot Dog",
    },
    {
      id: 10,
      name: "Snack",
    },
  ];

  return (
    <View>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <ScrollView
        horizontal={true}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category) => (
          <View key={category.id} style={styles.innerContainer}>
            <View style={styles.circlePic} />
            <Text>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    height: 130,
  },
  innerContainer: {
    margin: 5,
    marginLeft: 10,
    height: 110,
    width: 70,
    backgroundColor: "white",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  categoriesTitle: {
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  circlePic: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "yellow",
  },
});
