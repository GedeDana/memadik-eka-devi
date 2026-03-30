function countDownDate(targetDate){
    const countDownDate = new Date(targetDate);
    const dateNow = new Date();
    let distance = countDownDate - dateNow;
    if (distance < 0) distance = 0;
    return {
        days : Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours : Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
    }
}

function changeFormatDateStatusThread(date) {
  const now = new Date();
  const created = new Date(date);

  const diffTime = now - created;

  const diffMinutes = Math.floor(diffTime / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `${diffDays} hari lalu`;
  }

  if (diffHours > 0) {
    return `${diffHours} jam lalu`;
  }

  return `${diffMinutes} menit lalu`;
}
export {
    countDownDate,
    changeFormatDateStatusThread
}