

function Greeting({ message = "and welcome to my portfolio.", showExtras = true }) {
  const now = new Date()
  const hour = now.getHours()
  const month = now.getMonth()
  const day = now.getDate()


  // Time of day
  const greeting = "Good evening"
  if (hour < 12) {
    greeting = "Good morning"
  } else if (hour < 18) {
    greeting = "Good afternoon"
  }

  // Season (winter is the default, so three ifs cover all four)
  let season = "winter"
  if (month >= 2 && month <= 4) {
    season = "spring"
  } else if (month >= 5 && month <= 7) {
    season = "summer"
  } else if (month >= 8 && month <= 10) {
    season = "fall"
  }

  // Holiday (stays empty on non-holiday days)
  let holiday = ""
  if (month === 0 && day === 1) {
    holiday = "Happy New Year!"
  } else if (month === 1 && day === 14) {
    holiday = "Happy Valentine's Day!"
  } else if (month === 6 && day === 4) {
    holiday = "Happy Fourth of July!"
  } else if (month === 9 && day === 31) {
    holiday = "Happy Halloween!"
  } else if (month === 11 && day === 25) {
    holiday = "Merry Christmas!"
  }

  return (
    <div className="text-center space-y-2">
      <p className="text-3xl md:text-2xl font-mono font-bold text-black">
        {greeting}, {message}
      </p>
      {showExtras && (
        <>
          <p className="text-lg font-mono text-gray">Hope you're having a lovely {season}.</p>
          {holiday && <p className="text-lg font-semibold text-blue-500">{holiday}</p>}
        </>
      )}
    </div>
  )
}


export default Greeting
