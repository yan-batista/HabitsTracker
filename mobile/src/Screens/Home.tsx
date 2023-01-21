import { View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

import Header from "../Components/Header";
import HabitDay, { DAY_SIZE } from "../Components/HabitDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const datesFromYearStart = generateDatesFromYearBeginning();
const minimunSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimunSummaryDatesSizes - datesFromYearStart.length;

const Home = () => {
  const { navigate } = useNavigation();

  const renderWeekDays = () => {
    return weekDays.map((weekDay, idx) => {
      return (
        <Text key={idx} className="text-zinc-400 text-xl font-bold text-center mx-1" style={{ width: DAY_SIZE }}>
          {weekDay}
        </Text>
      );
    });
  };

  const renderSquares = () => {
    return datesFromYearStart.map((date) => {
      return <HabitDay key={date.toISOString()} onPress={() => navigate("habit", { date: date.toISOString() })} />;
    });
  };

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">{renderWeekDays()}</View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-row flex-wrap">
          <>
            {renderSquares()}

            {amountOfDaysToFill > 0 &&
              Array.from({ length: amountOfDaysToFill }).map((_, idx) => {
                <View
                  key={idx}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />;
              })}

            {amountOfDaysToFill > 0 &&
              Array.from({ length: amountOfDaysToFill }).map((_, index) => (
                <View
                  key={index}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />
              ))}
          </>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
