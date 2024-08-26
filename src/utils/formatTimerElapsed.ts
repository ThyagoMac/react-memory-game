export const formatTimeElapsed = (seconds: number) => {
  let finalMinutes = Math.floor(seconds / 60);
  let finalSeconds = seconds - (finalMinutes * 60);

  let minutesStr = 
    finalMinutes < 10 ? 
      '0'+finalMinutes
      : finalMinutes
      
  let secondsStr = 
    finalSeconds < 10 ? 
      '0'+finalSeconds
      : finalSeconds

  return `${minutesStr}:${secondsStr}`
}