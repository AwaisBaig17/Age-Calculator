/**
 * Interface representing the age breakdown
 */
export interface AgeResult {
  years: number;
  months: number;
  days: number;
}

/**
 * Type for age unit
 */
export type AgeUnit = 'years' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds';

/**
 * Universal Age Calculator
 * Framework-agnostic age calculator that works with React, Angular, Vue, Svelte, and vanilla JavaScript
 */
export class AgeCalculator {
  /**
   * Calculate age from date of birth
   * @param dateOfBirth - Date of birth
   * @param currentDate - Current date (defaults to today)
   * @returns Age breakdown in years, months, and days
   */
  static getAge(dateOfBirth: Date, currentDate: Date = new Date()): AgeResult {
    if (!dateOfBirth || !(dateOfBirth instanceof Date) || isNaN(dateOfBirth.getTime())) {
      throw new Error('Invalid date of birth provided');
    }

    if (dateOfBirth > currentDate) {
      throw new Error('Date of birth cannot be in the future');
    }

    let years = currentDate.getFullYear() - dateOfBirth.getFullYear();
    let months = currentDate.getMonth() - dateOfBirth.getMonth();
    let days = currentDate.getDate() - dateOfBirth.getDate();

    // Adjust for negative days
    if (days < 0) {
      months--;
      const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      days += previousMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }

    return {
      years,
      months,
      days
    };
  }

  /**
   * Calculate age in a specific unit
   * @param dateOfBirth - Date of birth
   * @param unit - Unit to calculate age in
   * @param currentDate - Current date (defaults to today)
   * @returns Age in the specified unit
   */
  static getAgeIn(dateOfBirth: Date, unit: AgeUnit, currentDate: Date = new Date()): number {
    if (!dateOfBirth || !(dateOfBirth instanceof Date) || isNaN(dateOfBirth.getTime())) {
      throw new Error('Invalid date of birth provided');
    }

    if (dateOfBirth > currentDate) {
      throw new Error('Date of birth cannot be in the future');
    }

    const diffInMilliseconds = currentDate.getTime() - dateOfBirth.getTime();

    switch (unit) {
      case 'years':
        return Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
      
      case 'months':
        const yearsDiff = currentDate.getFullYear() - dateOfBirth.getFullYear();
        const monthsDiff = currentDate.getMonth() - dateOfBirth.getMonth();
        return yearsDiff * 12 + monthsDiff;
      
      case 'weeks':
        return Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7));
      
      case 'days':
        return Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
      
      case 'hours':
        return Math.floor(diffInMilliseconds / (1000 * 60 * 60));
      
      case 'minutes':
        return Math.floor(diffInMilliseconds / (1000 * 60));
      
      case 'seconds':
        return Math.floor(diffInMilliseconds / 1000);
      
      default:
        throw new Error(`Invalid unit: ${unit}`);
    }
  }

  /**
   * Check if a person is an adult (18 years or older)
   * @param dateOfBirth - Date of birth
   * @param currentDate - Current date (defaults to today)
   * @returns True if the person is 18 or older
   */
  static isAdult(dateOfBirth: Date, currentDate: Date = new Date()): boolean {
    return this.getAgeIn(dateOfBirth, 'years', currentDate) >= 18;
  }

  /**
   * Get the next birthday date
   * @param dateOfBirth - Date of birth
   * @param currentDate - Current date (defaults to today)
   * @returns Date of the next birthday
   */
  static getNextBirthday(dateOfBirth: Date, currentDate: Date = new Date()): Date {
    if (!dateOfBirth || !(dateOfBirth instanceof Date) || isNaN(dateOfBirth.getTime())) {
      throw new Error('Invalid date of birth provided');
    }

    const nextBirthday = new Date(
      currentDate.getFullYear(),
      dateOfBirth.getMonth(),
      dateOfBirth.getDate()
    );

    // If birthday has already passed this year, get next year's birthday
    if (nextBirthday < currentDate) {
      nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }

    return nextBirthday;
  }

  /**
   * Get days until next birthday
   * @param dateOfBirth - Date of birth
   * @param currentDate - Current date (defaults to today)
   * @returns Number of days until next birthday
   */
  static getDaysUntilNextBirthday(dateOfBirth: Date, currentDate: Date = new Date()): number {
    const nextBirthday = this.getNextBirthday(dateOfBirth, currentDate);
    const diffInMilliseconds = nextBirthday.getTime() - currentDate.getTime();
    return Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
  }

  /**
   * Calculate the zodiac sign based on date of birth
   * @param dateOfBirth - Date of birth
   * @returns Zodiac sign name
   */
  static getZodiacSign(dateOfBirth: Date): string {
    if (!dateOfBirth || !(dateOfBirth instanceof Date) || isNaN(dateOfBirth.getTime())) {
      throw new Error('Invalid date of birth provided');
    }

    const month = dateOfBirth.getMonth() + 1;
    const day = dateOfBirth.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
    return 'Pisces';
  }
}

// Default export for convenience
export default AgeCalculator;
