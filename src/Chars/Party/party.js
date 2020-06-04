//clas which collects and manages information for characters in party

export default class Party {
  
  items = [];
  
  constructor(chars) {
    this.chars = chars;

  }

  bestSkill(skill) {
    let temp = 0;
    this.chars.forEach(element => {
      if (element.skills.skill > temp) {
        temp = element.skills.skill;
      }
    })
    return temp;
  }

  bestAttribute(attribute) {
    let temp = 0;
    this.chars.forEach(element => {
      if (element.Attributes[attribute] > temp) {
        temp = element.Attributes[attribute];
      }
    })
    return temp;
  }
}