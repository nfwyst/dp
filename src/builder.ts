class Person {
  public companyName: string = ''
  public annualIncome: number = 0
  public position: string = ''
  public streetAddress: string = ''
  public postCode: string = ''
  public city: string = ''
}

class PersonBuilder {
  person: Person
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person)
  }

  get works() {
    return new PersonJobBuilder(this.person)
  }

  build() {
    return this.person
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person: Person) {
    super(person)
  }

  at(companyName: string) {
    this.person.companyName = companyName
    return this
  }

  asA(position: string) {
    this.person.position = position
    return this
  }

  earning(annualIncome: number) {
    this.person.annualIncome = annualIncome
    return this
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person: Person) {
    super(person)
  }

  at(streetAddress: string) {
    this.person.streetAddress = streetAddress
    return this
  }

  withPostCode(postCode: string) {
    this.person.postCode = postCode
    return this
  }

  in(city: string) {
    this.person.city = city
    return this
  }
}

let pb = new PersonBuilder()
let person = pb
  .lives.at('江苏路').in('上海').withPostCode('AAA')
  .works.at('Tech').asA('engineering').earning(1000)
  .build()
console.log(person)
