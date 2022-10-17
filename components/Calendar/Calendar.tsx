import { View, Text , Button} from 'react-native'
import React, { ReactElement, useEffect, useState } from 'react'
import Day from './Day';
import Weekday from './Weekday';

const Calendar = () => {
    const [nav, setNav] = useState<number>(0);
    const weekdaysWeb = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekdaysMob = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
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
  
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleString('en-gb', {  
      weekday: 'long',
      year: "numeric",
      month: 'numeric',
      day: 'numeric'
    })

    let paddingDays = weekdaysWeb.indexOf(dateString.split(', ')[0]);
    if(paddingDays === -1){
      paddingDays = weekdaysMob.indexOf(dateString.split(' ')[0]);
    }

    const renderDay = () => {
      setDaySqure([]);
        for(let i = 0; i < daysInMonth + paddingDays; i++){
            if(i > paddingDays-1){
              setDaySqure((current)=>{
                return [...current, <Day day={i-paddingDays+1}/>]
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
    },[nav])

  return (
    <View className='w-full flex'>
        <Text>{month+1} {year}</Text>
        <View className='w-full flex flex-row h-[50px]'>
            {weekdaysMob.map(w=>(<Weekday weekday={w}/>))}
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
