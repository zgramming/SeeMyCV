export const dateToyMd = (date: Date) => {
  const [month, day, year] = date.toLocaleDateString().split("/");
  const monthName = date.toLocaleString("id-ID", {
    month: "long",
  });
  return `${day} ${monthName} ${year}`;
};

// Reference : [https://stackoverflow.com/a/15289883/7360353]
export const diffDateInDays = (startDate: Date, endDate: Date) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );
  const utc2 = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

export const convertTotalDaysTo = (d: number) => {
  let months = 0,
    years = 0,
    days = 0,
    weeks = 0;
  while (d) {
    if (d >= 365) {
      years++;
      d -= 365;
    } else if (d >= 30) {
      months++;
      d -= 30;
    } else if (d >= 7) {
      weeks++;
      d -= 7;
    } else {
      days++;
      d--;
    }
  }
  return {
    years,
    months,
    weeks,
    days,
  };
};

export const calculatingExperience = (startDate: Date, endDate: Date) => {
  const totalDays = diffDateInDays(startDate, endDate);
  const convertDays = convertTotalDaysTo(totalDays);
  let result = "";

  if (convertDays.years !== 0) {
    result = `(${convertDays.years} Tahun ${convertDays.months} Bulan)`;
  } else if (convertDays.months !== 0) {
    result = `(${convertDays.months} Bulan)`;
  } else {
    result = ``;
  }

  return result;
};
