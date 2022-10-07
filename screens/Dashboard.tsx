import { View, Text, Dimensions } from "react-native";
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
import React from "react";
import MainContainer from "../components/Container/MainContainer";
import DashboardCard from "../components/Cards/DashboardCard";
import { ArrowLeftIcon,UserIcon,ChartBarIcon,ChartPieIcon,} from "react-native-heroicons/solid";

const Dashboard = () => {
  const [user, setUser] = React.useState<string | null>("Mark");
  return (
    <MainContainer>
      <StyledView className="h-[55px] z-20 mt-8 flex flex-row justify-between items-center px-2">
        <StyledView className="flex flex-row gap-4 justify-center items-center">
          <ArrowLeftIcon color="white" />
          <StyledText className="text-white text-xl">Dashboard</StyledText>
        </StyledView>
        <StyledView className="w-[40px] h-[40px] bg-[#704341] justify-center items-center rounded-full">
          <UserIcon color="white" />
        </StyledView>
      </StyledView>
      <StyledView className="w-full bg-[#0C080C] h-[30%] rounded-[20px] absolute" />
      <StyledText className="text-white mt-[20px] mb-[20px] text-2xl text-bold ml-[20px]">
        Hello, {user}
      </StyledText>
      <DashboardCard
        cardTitle="Balance"
        totalAmount={"$57,000.00"}
        dateText="07-08-2022"
        icon={<ChartBarIcon color="#008D96" size={60} />}
      />

      <DashboardCard
        cardTitle="Total Savings"
        totalAmount={"$20,050.02"}
        dateText="07-08-2022"
        icon={<ChartPieIcon color="#008D96" size={60} />}
      />
    </MainContainer>
  );
};

export default Dashboard;