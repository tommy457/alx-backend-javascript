interface MajorCredits {
  credits: number;
  majorBrand: number;
}

interface MinorCredits {
  credits: number;
  minorBrand: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return subject1.credits + subject2.credits;

}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return subject1.credits + subject2.credits;

}
