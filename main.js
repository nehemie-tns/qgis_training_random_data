"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker = require("@faker-js/faker");
var _ = require("remeda");
var XLSX = require("xlsx");
var generateRandomBoolean = function () { return Math.random() < 0.5; };
var generateRandomGender = function () { return _.sample(['male', 'female'], 1)[0]; };
/**
 * The min and max coordinates are for Kenya
 * @returns
 */
var generateRandomRow = function () {
    var row = {
        first_name: faker.faker.person.firstName(),
        last_name: faker.faker.person.lastName(),
        age: _.randomInteger(20, 80),
        latitude: faker.faker.location.latitude({
            min: -1.615,
            max: 3.308,
            precision: 6,
        }),
        longitude: faker.faker.location.longitude({
            min: 36.160,
            max: 38.453,
            precision: 6,
        }),
        sourced_2024: generateRandomBoolean(),
        sourced_2025: generateRandomBoolean(),
        gender: generateRandomGender(),
    };
    return row;
};
/**
 * Generate 2000 random points
 * @param count
 * @returns
 */
var generateRandomPoints = function (count) {
    var points = [];
    for (var i = 0; i < count; i++) {
        points.push(generateRandomRow());
    }
    return points;
};
var points = generateRandomPoints(5500);
/**
 * Convert points to worksheet
 */
var worksheet = XLSX.utils.json_to_sheet(points);
/**
 * Create a new workbook and append the worksheet
 */
var workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Random Points');
// Write the workbook to a file
XLSX.writeFile(workbook, 'random_points.xlsx');
