import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import BackButton from "../Components/BackButton";
import dayjs from "dayjs";
import ProgressBar from "../Components/ProgressBar";
import Checkbox from "../Components/Checkbox";

interface Params {
  date: string;
}

const Habit = () => {
  const route = useRoute();
  const { date } = route.params as Params;
  const parsedDate = dayjs(date);
  const dayOfWeek = parsedDate.format("dddd");
  const dayAndMonth = parsedDate.format("DD/MM");

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <BackButton></BackButton>
        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">{dayOfWeek}</Text>
        <Text className="text-white font-extrabold text-3xl">{dayAndMonth}</Text>
        <ProgressBar progress={50}></ProgressBar>

        <View mt-6>
          <Checkbox title="Beber 2L de água" checked={false}></Checkbox>
          <Checkbox title="Caminhar" checked></Checkbox>
        </View>
      </ScrollView>
    </View>
  );
};

export default Habit;
