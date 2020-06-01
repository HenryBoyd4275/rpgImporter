import React from "react";

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
    return (newTime)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function diceRoll() {
  let roll = getRandomInt(8) + getRandomInt(8) + getRandomInt(8);
  console.log(`You rolled a ${roll} on 3d8-3`);
  return roll;
}

export function addDescription(node) {
  let result = [];
  if (node.Additional) {
    node.Additional.forEach((element, index) => {
      if (node.Show[index]) {
        result.push(<br />);
        result.push(element);
      }
    })
  }
  return result;
}

export function checkOne(type, target, modifier, party, node, result) {
  result = result.split(' ');
  if (type === "Attribute") {
    if (diceRoll() < ((party.bestAttribute(target)) + 1 * modifier)) {
      node[result[0]][result[1]] = true;
    } else {
      node[result[0]][result[1]] = false;
    }
  } else if (type === "Skill") {
    if (diceRoll() < ((party.bestSkill(target)) + 1 * modifier)) {
      node[result[0]][result[1]] = true;
    } else {
      node[result[0]][result[1]] = false;
    }
  } else {
    console.log("don't know how to check", type);
  }
}

export function checkAll(type, target, modifier, party, node, result) {
  result = result.split(' ');
  party.chars.forEach((element) => {
    if (type === "Attribute") {
      if (diceRoll() < (element.Attributes[target] + 1 * modifier)) {
        console.log(`${type}.${target} ${modifier} check passed by ${element.name}`)
        node[result[0]][result[1]] = true;
      }
    } else if (type === "Skill") {
      if (diceRoll() < (element.Skillss[target] + 1 * modifier)) {
        console.log(`${type}.${target} ${modifier} check passed by ${element.name}`)
        node[result[0]][result[1]] = true;
      }
    } else {
      console.log("Don't know how to check", type);
    }
  })

}