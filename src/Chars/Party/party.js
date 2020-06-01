export default class Party {

  constructor(chars) {
    this.chars = chars;
    this.items = [];
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