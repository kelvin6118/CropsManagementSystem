import { View, Text , Button} from 'react-native'
import React, { ReactElement, useEffect, useState } from 'react'
import Day from './Day';
import Weekday from './Weekday';

type Props = {
  sown: string,
  watered: string,
  fed?: string[],
  harvest?: Date[],
  selected: Boolean
}

const Calendar: React.FC<Props> = ({sown, watered, fed, harvest, selected}) => {
    const [nav, setNav] = useState<number>(0);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", "Sep", "Oct", "Nov", "Dec"];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    
    const [daySqure,setDaySqure] = useState<JSX.Element[]>([]);

    const dt = new Date();
    //navigate to next month by nav++
    if (nav !== 0){
    dt.setMonth(new Date().getMonth() + nav);
    }
    //navigate to previous month by nav--
    if (nav === -1){
    dt.setMonth(new Date().getMonth() - 1);
    }
  
    const day = dt.getDate();
    const month = dt.getMonth() ;
    const year = dt.getFullYear();
  
    const firstDayOfMonth = new Date(year, month, 1).toDateString();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let  paddingDays = weekdays.indexOf(firstDayOfMonth.split(' ')[0]);
    

    const renderDay = () => {
      setDaySqure([]);
        for(let i = 0; i < daysInMonth + paddingDays; i++){
            if(i > paddingDays-1){
              setDaySqure((current)=>{
                const day = new Date(`${year}-${month+1}-${i-paddingDays+1}`).toDateString();
                let daySown:Boolean = false;
                let dayWatered:Boolean = false;
                let dayFed:Boolean = false;
                let dayHarvested:Boolean = false;
                if(day === sown){
                  daySown = true;
                }
                if(day === watered){
                  dayWatered = true;
                }
                if(fed?.includes(day) === true){
                  dayFed = true;
                }

                return [...current, <Day day={i-paddingDays+1} sown={daySown} watered={dayWatered} fed={dayFed}/>]
              })
            }else{
              setDaySqure((current)=>{
                return [...current, <Day/>]
              })
            }
        }
        
    }
    useEffect(()=>{
      renderDay()
    },[nav, selected])

  return (
    <View className='flex p-5 w-full'>
      <Text className='text-2xl text-center'>{months[month]} {year}</Text>
        <View className='w-full flex flex-row h-[50px]'>
            {weekdays.map(w=>(<Weekday weekday={w}/>))}
        </View>

        <View className='flex flex-wrap flex-row'>{
            daySqure
        }</View>

        <View className='flex flex-row justify-between'>
        <Button
          title="Previous Month"
          onPress={() => setNav((current)=>{
            return current - 1;
          })}
        />
        <Button
          title="Next Month"
          onPress={() => setNav((current)=>{
            return current + 1;
          })}
        />
        </View>
    </View>
  )
}

export default Calendar
