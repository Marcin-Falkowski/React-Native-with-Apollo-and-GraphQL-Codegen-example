import {
  useColorScheme,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useExampleQuery } from "./graphql/graphql";

export const Screen: React.FC = () => {
  const { data, loading, error } = useExampleQuery();
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (loading) return <ActivityIndicator />;
  if (error) return <Text>ERROR on useExampleQuery</Text>;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{ gap: 10 }}>
        <Text>SpaceX:</Text>
        <Text>CEO {data?.company?.ceo}</Text>
        <Text>COO {data?.company?.coo}</Text>
        <Text>CTO {data?.company?.cto}</Text>
        <Text>Founder {data?.company?.founder}</Text>
      </View>
      <View style={{ gap: 10 }}>
        <Text>Roadster:</Text>
        <Text>NAME {data?.roadster?.name}</Text>
        <Text>LAUNCH DATE{data?.roadster?.launch_date_utc}</Text>
        <Text>EARTH DISTANCE{data?.roadster?.earth_distance_km}</Text>
      </View>
    </SafeAreaView>
  );
};
