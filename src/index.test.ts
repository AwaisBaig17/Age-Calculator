import { describe, it, expect } from 'vitest';
import { AgeCalculator } from './index';

describe('AgeCalculator', () => {
  describe('getAge', () => {
    it('should calculate age correctly', () => {
      const dob = new Date(1990, 0, 1); // January 1, 1990
      const currentDate = new Date(2024, 6, 4); // July 4, 2024
      const age = AgeCalculator.getAge(dob, currentDate);
      
      expect(age.years).toBe(34);
      expect(age.months).toBe(6);
      expect(age.days).toBe(3);
    });

    it('should handle same date', () => {
      const dob = new Date(2024, 0, 1);
      const currentDate = new Date(2024, 0, 1);
      const age = AgeCalculator.getAge(dob, currentDate);
      
      expect(age.years).toBe(0);
      expect(age.months).toBe(0);
      expect(age.days).toBe(0);
    });

    it('should throw error for invalid date', () => {
      expect(() => {
        AgeCalculator.getAge(new Date('invalid'));
      }).toThrowError('Invalid date of birth provided');
    });

    it('should throw error for future date', () => {
      const futureDate = new Date();
      futureDate.setFullYear(futureDate.getFullYear() + 1);
      
      expect(() => {
        AgeCalculator.getAge(futureDate);
      }).toThrowError('Date of birth cannot be in the future');
    });
  });

  describe('getAgeIn', () => {
    it('should calculate age in years', () => {
      const dob = new Date(1990, 0, 1);
      const currentDate = new Date(2024, 6, 4);
      const years = AgeCalculator.getAgeIn(dob, 'years', currentDate);
      
      expect(years).toBe(34);
    });

    it('should calculate age in months', () => {
      const dob = new Date(1990, 0, 1);
      const currentDate = new Date(2024, 6, 4);
      const months = AgeCalculator.getAgeIn(dob, 'months', currentDate);
      
      expect(months).toBe(414); // 34 years * 12 + 6 months
    });

    it('should calculate age in weeks', () => {
      const dob = new Date(1990, 0, 1);
      const currentDate = new Date(1990, 0, 15);
      const weeks = AgeCalculator.getAgeIn(dob, 'weeks', currentDate);
      
      expect(weeks).toBe(2);
    });

    it('should calculate age in days', () => {
      const dob = new Date(1990, 0, 1);
      const currentDate = new Date(1990, 0, 11);
      const days = AgeCalculator.getAgeIn(dob, 'days', currentDate);
      
      expect(days).toBe(10);
    });

    it('should throw error for invalid unit', () => {
      const dob = new Date(1990, 0, 1);
      
      expect(() => {
        AgeCalculator.getAgeIn(dob, 'invalid' as any);
      }).toThrowError('Invalid unit: invalid');
    });
  });

  describe('isAdult', () => {
    it('should return true for adult', () => {
      const dob = new Date(2000, 0, 1);
      const currentDate = new Date(2024, 0, 1);
      
      expect(AgeCalculator.isAdult(dob, currentDate)).toBe(true);
    });

    it('should return false for minor', () => {
      const dob = new Date(2010, 0, 1);
      const currentDate = new Date(2024, 0, 1);
      
      expect(AgeCalculator.isAdult(dob, currentDate)).toBe(false);
    });
  });

  describe('getNextBirthday', () => {
    it('should return next birthday in current year', () => {
      const dob = new Date(1990, 11, 25); // December 25, 1990
      const currentDate = new Date(2024, 0, 1); // January 1, 2024
      const nextBirthday = AgeCalculator.getNextBirthday(dob, currentDate);
      
      expect(nextBirthday.getFullYear()).toBe(2024);
      expect(nextBirthday.getMonth()).toBe(11); // December
      expect(nextBirthday.getDate()).toBe(25);
    });

    it('should return next birthday in next year if already passed', () => {
      const dob = new Date(1990, 0, 1); // January 1, 1990
      const currentDate = new Date(2024, 5, 1); // June 1, 2024
      const nextBirthday = AgeCalculator.getNextBirthday(dob, currentDate);
      
      expect(nextBirthday.getFullYear()).toBe(2025);
      expect(nextBirthday.getMonth()).toBe(0); // January
      expect(nextBirthday.getDate()).toBe(1);
    });
  });

  describe('getDaysUntilNextBirthday', () => {
    it('should calculate days until next birthday', () => {
      const dob = new Date(1990, 0, 10); // January 10
      const currentDate = new Date(2024, 0, 1); // January 1
      const days = AgeCalculator.getDaysUntilNextBirthday(dob, currentDate);
      
      expect(days).toBe(9);
    });
  });

  describe('getZodiacSign', () => {
    it('should return correct zodiac sign for Aries', () => {
      expect(AgeCalculator.getZodiacSign(new Date(1990, 3, 1))).toBe('Aries');
    });

    it('should return correct zodiac sign for Taurus', () => {
      expect(AgeCalculator.getZodiacSign(new Date(1990, 4, 1))).toBe('Taurus');
    });

    it('should return correct zodiac sign for Gemini', () => {
      expect(AgeCalculator.getZodiacSign(new Date(1990, 5, 1))).toBe('Gemini');
    });

    it('should return correct zodiac sign for Leo', () => {
      expect(AgeCalculator.getZodiacSign(new Date(1990, 7, 1))).toBe('Leo');
    });

    it('should throw error for invalid date', () => {
      expect(() => {
        AgeCalculator.getZodiacSign(new Date('invalid'));
      }).toThrowError('Invalid date of birth provided');
    });
  });
});
