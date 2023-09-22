import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import StackNavigator from "./StackNavigator.js";
import store from "./store.js";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
