console.log('welcom to tut31.js');

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName
        this.experience = givenExperience
        this.division = givenDivision
    }
    slogan() {
        return `i am ${this.name} and this company is the best`
    }
    joinigYear() {
        return 200 - this.experience
    }
    static add(a, b) {
        return a + b;
    }
}

class programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, github) {
        Super(givenName, givenExperience, givenDivision)
        this.language = language
        this.github = github
    }

    favoritelanguage() {
        if (this.language == 'phython') {
            return 'phython'
        } else {
            return 'javascript'
        }
    }
    static multiply(a, b) {
        return a * b

    }

}

harry = new Employee('harry', 56, 'Division')
// console.log('harry')
// console.log(Employee.add(34,5))
harry = new Employee('harry', 56, 'Division')
// console.log('harry')
// console.log(Employee.add(34,5))

rohan = new programmer('Rohan', 3, 'lays', 'Go', 'rohan420')
console.log(rohan)