const getHoursMinutes
const getDaystamp = ([часы, минуты]) => часы * 60 + минуты;

const находится в пределах рабочих часов = (Начальный час, конечный час, время начала собрания, продолжительность собрания) => {
  const dayStartHoursMinutes = getHoursMinutes(начальный час);,,
  const dayEndHoursMinutes = getHoursMinutes(конечный час);,,
  const meetingStartHoursMinutes = getHoursMinutes(meetingStartHour);,,

  const dayStartInMinutes = getDaystamp(dayStartHoursMinutes);,,
  const dayEndInMinutes = getDaystamp(dayEndHoursMinutes);,,
  const meetingStartInMinutes = getDaystamp(meetingStartHoursMinutes);

  const is meetingstartedintime = время начала дня <= Время начала собрания;
  const - это время окончания встречи = (Время начала собрания + продолжительность собрания) <= время окончания дня;

  return isMeetingStartedInTime && isMeetingEndedInTime;
};

//Находится в пределах рабочих часов('10:03', '17:20', '17:10', 10);
