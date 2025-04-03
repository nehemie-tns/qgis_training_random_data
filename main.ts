import * as faker from "@faker-js/faker";
import * as _ from "remeda";
import * as XLSX from "xlsx";

interface FeatureProperties {
  first_name: string;
  last_name: string;
  age: number;
  latitude: number;
  longitude: number;
  sourced_2024: boolean;
  sourced_2025: boolean;
  gender: string;
  fund: string;
  [key: string]: any; // Allow for additional properties
}

interface RowFeature extends FeatureProperties {}

const generateRandomBoolean = (): boolean => Math.random() < 0.5;

const generateRandomGender = () => _.sample(["male", "female"], 1)[0];

/**
 * The min and max coordinates are for Kenya
 * @returns
 */
const generateRandomRow = (): RowFeature => {
  const row: RowFeature = {
    first_name: faker.faker.person.firstName(),
    last_name: faker.faker.person.lastName(),
    age: _.randomInteger(20, 80),
    latitude: faker.faker.location.latitude({
      min: -1.615,
      max: 3.308,
      precision: 6,
    }),
    longitude: faker.faker.location.longitude({
      min: 36.16,
      max: 38.453,
      precision: 6,
    }),
    sourced_2024: generateRandomBoolean(),
    sourced_2025: generateRandomBoolean(),
    gender: generateRandomGender(),
    fund: _.sample(["FUND1", "FUND2", "FUND3"], 1)[0],
  };
  return row;
};

/**
 * Generate 2000 random points
 * @param count
 * @returns
 */
const generateRandomPoints = (count: number): RowFeature[] => {
  const points: RowFeature[] = [];
  for (let i = 0; i < count; i++) {
    points.push(generateRandomRow());
  }
  return points;
};

const points = generateRandomPoints(5500);

/**
 * Convert points to worksheet
 */
const worksheet = XLSX.utils.json_to_sheet(points);

/**
 * Create a new workbook and append the worksheet
 */
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Random Points");

// Write the workbook to a file
XLSX.writeFile(workbook, "random_points.xlsx");
