import { View, Text } from "react-native";
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)

import React from "react";
interface IProps {
  cardTitle: string;  
  dateText?: string | null;
  icon?: React.ReactElement;
}
const DashboardCard: React.FC<IProps> = ({cardTitle,dateText,icon,
}) => {
  return (
    <StyledView className="bg-[#201520] border-[#70434170] border-[1.5px] rounded-md min-h-[150px] mx-[20px] my-[10px] py-[10px] px-[20px]">
      <StyledText className="text-[#EFE3C8] text-lg">{cardTitle}</StyledText>
      <StyledView className="flex-row justify-between">
        <StyledView className="justify-center items-start flex-1 pt-[20px]">
          <StyledText className="text-white text-sm">{dateText}</StyledText>
        </StyledView>
        <StyledView className="flex-1 justify-center items-center">{icon}</StyledView>
      </StyledView>
    </StyledView>
  );
};
export default DashboardCard;