class Party {
  constructor(chars) {
    this.chars = chars;
  }

  get bestSkill(skill) {
    return this.calcBestSkill(skill);
  }

  get bestAttribute(attribute) {
    return this.calcBestAttribute(attribute);
  }

  calcBestSkill(skill) {
    let temp = 0;
    this.chars.forEach(element => {
      if (element.skills.skill > temp) {
        temp = element.skills.skill;
      }
    })
    return temp;
  }

  calcBestAttribute(attribute) {
    let temp = 0;
    this.chars.forEach(element => {
      if (element.attribute > temp) {
        temp = element.attribute;
      }
    })
    return temp;
  }
}