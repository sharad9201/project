const formulatePayment = (choice, amount) => {
    const initialPayment = ((10 / 100) * amount).toFixed(2);
    const remainingTotal = amount - initialPayment;
    if (choice == "weekly") {
      let weeklyAmountPayment = 0;
      let weeks = remainingTotal / weeklyAmountPayment;
      weeks = Number.isNaN(weeks) ? 0 : weeks;
      while (weeks > 156) {
        weeklyAmountPayment = weeklyAmountPayment + 50;
        weeks = remainingTotal / weeklyAmountPayment;
      }
      console.log(`You will be paid ${weeklyAmountPayment} for
  ${weeks} weeks.`);
      return { time: weeks, amount: weeklyAmountPayment };
    } else if (choice == "monthly") {
      let monthlyPrice = 0;
      let months = remainingTotal / monthlyPrice;
      months = Number.isNaN(months) ? 0 : months;
      while (months > 36) {
        monthlyPrice = monthlyPrice + 100;
        months = remainingTotal / monthlyPrice;
      }
      if (Number.isNaN(months)) {
        months = 0;
      }
      console.log(`You will be paid ${monthlyPrice} for ${months} months.`);
      return { time: months, amount: monthlyPrice };
    } else {
      return null;
    }
  };
  formulatePayment("weekly", 2000);
  