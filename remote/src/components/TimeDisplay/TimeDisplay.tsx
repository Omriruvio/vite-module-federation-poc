export type TimeDisplayProps = {
  time?: Date;
};

const formatTime = (time?: Date) => {
  if (!time) return 'No time provided';
  return Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(time);
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ time, ...props }) => {
  const formattedTime = formatTime(time);

  return <div {...props}>{formattedTime}</div>;
};

export default TimeDisplay;
