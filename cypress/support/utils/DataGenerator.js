import { faker } from '@faker-js/faker';

export class DataGenerator {
  
  static generateEmail() {
    const timestamp = Date.now();
    return `user.${timestamp}@test.com`;
  }

  static generateFullName() {
    return faker.person.fullName();
  }

  static generateUsername() {
    return `user_${Date.now()}`;
  }

  static generatePassword() {
    return faker.internet.password({ length: 12 });
  }

  static generateJobTitle() {
    return faker.person.jobTitle();
  }

  static generatePhone() {
    return faker.phone.number();
  }

  static generateCheckoutInfo() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      postalCode: faker.location.zipCode()
    };
  }
}