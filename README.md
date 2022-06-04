# UFOs

**Resources**

    - VS Code
    - JavaScript
    - HTML
    - CSS 
    - Bootstrap
    - data.js

## Overview

This project is all about visualizing data on a web page.  A data.js file with information about UFO sightings is read into JavaScript script.  The script executes three main functions: one to build the table, one to gather filtering data, and one to filter the original table.  D3.js is used to listen for input or changes to the filters and executes the code once the changes are detected.  The filters are added to host user interactivity and analysis.  A user can filter for date, location, and shape to explore the data first hand.  HTML is used to provide structure for the webpage.  CSS Bootstrap components add styling to help make it visually appealing.  

## Page Layout and Design

![Screen Shot 2022-06-04 at 10 52 54 AM](https://user-images.githubusercontent.com/100544761/172013670-025fc09a-b191-46e5-8f1a-1d501e71c9f3.png)

## Results

**How to use the webpage**

1. "UFO Sightings" in the navigation bar refreshes the table to all original data.

2. The data is displayed in tabular format on the bottom right corner of the page.

3. Data in the  "Filter Search" section on the left hand side may be entered in the following formats:
    ![Screen Shot 2022-06-04 at 11 08 46 AM](https://user-images.githubusercontent.com/100544761/172015179-2b75e1ae-6e4b-4a47-9749-c60d90a8f8b6.png)

    -   You may enter a date in the "mm/dd/yyyy" format
    -   City must be entered lower case to match the table data format
    -   State must be entered lower case to match the table data format
    -   Only one country represents the data which is USA as "us"
    -   Shape is also lower case and must match the shape table data description exactly
    -   There can be no spaces before or after filter entries or table will be empty
        ![Screen Shot 2022-06-04 at 11 09 50 AM](https://user-images.githubusercontent.com/100544761/172015302-ae17ba3d-8598-4050-9181-21b5d77a804d.png)


    -   Filters can be cleared and the table returned to default output by clicking "UFO Sightings" in navigation bar.
        ![Screen Shot 2022-06-04 at 11 08 12 AM](https://user-images.githubusercontent.com/100544761/172015162-849242a9-76a7-4e17-8568-0a48ab4bce0d.png)

