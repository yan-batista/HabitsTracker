import { View } from "react-native";

interface Props {
  progress?: number;
}

const ProgressBar = ({ progress = 0 }: Props) => {
  return (
    <View className="w-full h-3 rounded-xl bg-zinc-400 mt-4">
      <View className="h-3 rounded-xl bg-violet-600" style={{ width: `${progress}%` }}></View>
    </View>
  );
};

export default ProgressBar;
