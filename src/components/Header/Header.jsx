import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.sidebarButton}>
        <Text style={styles.buttonTextSidebar}> = </Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>What would you like to find?</Text>
      <View style={styles.headerSearchbar}>
        <Text>O\</Text>
        <TextInput
          style={styles.headerInput}
          placeholder="Find your food here..."
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    height: 200,
    paddingHorizontal: 20,
  },
  headerTitle: {
    width: 200,
    margin: 20,
    fontSize: 24,
    color: "black",
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 28,
  },
  sidebarButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 35,
    padding: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonTextSidebar: {
    color: "#000",
  },
  headerSearchbar: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    margin: 20,
    marginTop: 0,
    paddingLeft: 10,
    borderRadius: 10,
    borderColor: "#EFEFEF",
    borderWidth: 1.5,
  },
  headerInput: {
    fontSize: 18,
    margin: 10,
    fontFamily: "Roboto",
    fontWeight: "400",
    textAlign: "left",
    lineHeight: 21,
  },
});
