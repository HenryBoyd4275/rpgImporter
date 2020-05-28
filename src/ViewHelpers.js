

export function increaseTime(arg, curTime) {
    let value = arg.slice(0, -1);
    let newTime = curTime;
    switch (arg[arg.length - 1]) {
      case "d":
        newTime[0] += 1 * value;
        break;
      case "h":
        newTime[1] += 1 * value;
        break;
      case "m":
        newTime[2] += 1 * value;
        break;
      default:
        console.log("unable to find case, does time end with proper d/h/m designation?");
    }
    if (newTime[2] >= 60) {
      newTime[1] += 1;
      newTime[2] -= 60;
    }
    if (newTime[1] >= 60) {
      newTime[0] += 1;
      newTime[1] -= 60;
  }
  console.log(newTime);
    return (newTime)
  }