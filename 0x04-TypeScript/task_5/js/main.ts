// task_5/js/main.ts

// Interface for MajorCredits
interface MajorCredits {
  credits: number;
  brand: 'major';
}

// Interface for MinorCredits
interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}

// Example usage:

const majorCourse1: MajorCredits = { credits: 30, brand: 'major' };
const majorCourse2: MajorCredits = { credits: 40, brand: 'major' };

const minorCourse1: MinorCredits = { credits: 15, brand: 'minor' };
const minorCourse2: MinorCredits = { credits: 10, brand: 'minor' };

const totalMajorCredits = sumMajorCredits(majorCourse1, majorCourse2);
const totalMinorCredits = sumMinorCredits(minorCourse1, minorCourse2);

console.log('Total Major Credits:', totalMajorCredits); // Should print: { credits: 70, brand: 'major' }
console.log('Total Minor Credits:', totalMinorCredits); // Should print: { credits: 25, brand: 'minor' }

