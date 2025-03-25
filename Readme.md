# QGIS Training Data Generator

This small script project generates random training data points for QGIS using TypeScript. The generated data includes personal information, geographical coordinates, and other attributes.
This is for training data visualization in QGIS

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd qgis_training
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Run the script to generate the data and save it to an Excel file:
    ```sh
    npx ts-node main.ts
    ```

2. The generated data will be saved in a file named `random_points.xlsx`.

## Data Attributes

The generated data includes the following attributes:
- `first_name`: First name of the person
- `last_name`: Last name of the person
- `age`: Age of the person (between 20 and 80)
- `latitude`: Latitude coordinate (between -1.615 and 3.308)
- `longitude`: Longitude coordinate (between 36.160 and 38.453)
- `sourced_2024`: Boolean indicating if sourced in 2024
- `sourced_2025`: Boolean indicating if sourced in 2025
- `gender`: Gender of the person (male or female)

## License

This project is licensed under the MIT License.
