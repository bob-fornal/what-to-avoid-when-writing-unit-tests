
export const getTimeOfDay = () => {
  const date = new Date();
  const hour = date.getHours(); // 0 to 23

  if (hour >= 0 && hour < 6) return 'Night';
  if (hour >= 6 && hour < 12) return 'Morning';
  if (hour >= 12 && hour < 18) return 'Afternoon';
  return 'Evening';
};
