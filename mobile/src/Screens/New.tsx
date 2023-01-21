import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import BackButton from "../Components/BackButton";
import Checkbox from "../Components/Checkbox";
import colors from "tailwindcss/colors";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const New = () => {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const handleToggleWeekDay = (weekDayIndex: number) => {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) => prevState.filter((weekDay) => weekDay !== weekDayIndex));
    } else {
      setWeekDays((prevState) => {
        return [...prevState, weekDayIndex];
      });
    }
  };

  const generateCheckboxes = () => {
    return availableWeekDays.map((weekDay, idx) => {
      return (
        <Checkbox
          title={weekDay}
          key={`${weekDay}-${idx}`}
          onPress={() => handleToggleWeekDay(idx)}
          checked={weekDays.includes(idx)}
        />
      );
    });
  };

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        <BackButton></BackButton>
        <Text className="mt-6 text-white font-extrabold text-3xl">Criar Hábito</Text>
        <Text className="mt-6 text-white font-semibold text-base">Qual seu comprometimento?</Text>

        <TextInput
          placeholder="eg.: Exercícios, dormir bem, ec..."
          placeholderTextColor={colors.zinc[400]}
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
        ></TextInput>

        <Text className="font-semibold mt-4 mb-3 text-white text-base">Qual a recorrência?</Text>
        {generateCheckboxes()}

        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
        >
          <Feather name="check" size={20} color={colors.white}></Feather>
          <Text className="font-semibold text-base text-white ml-2">Confirmar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default New;
