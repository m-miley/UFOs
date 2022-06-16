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

    -   You may enter a date in the "m/d/yyyy" format
    -   City must be entered lower case to match the table data format
    -   State must be entered lower case to match the table data format
    -   Only one country represents the data which is USA as "us"
    -   Shape is also lower case and must match the shape table data description exactly
    -   There can be no spaces before or after filter entries or table will be empty
        ![Screen Shot 2022-06-04 at 11 09 50 AM](https://user-images.githubusercontent.com/100544761/172015302-ae17ba3d-8598-4050-9181-21b5d77a804d.png)


    -   Filters can be cleared and the table returned to default output by clicking "UFO Sightings" in navigation bar.
        
        ![Screen Shot 2022-06-04 at 11 08 12 AM](https://user-images.githubusercontent.com/100544761/172015162-849242a9-76a7-4e17-8568-0a48ab4bce0d.png)

## Summary

There is one major drawback with many implications to this page design, the filter functionality.  The navigation bar refreshes the table to original content and should be moved down to join the filter form for increased usability.  Furthermore, the filters themselves could use improvements.  For example, all filters are typed and entered as text which must match the table data exactly.  I think a dropdown for categories, or check boxes would be an improvement to help eliminate this explicit requirement.  The check boxes would also allow for multiple selections per filter as they are currently limited to one.  Moreover, the date entry could be a little friendlier and more functional.  In the next version, I suggest coding a calendar to populate upon clicking the filter box where the user could enter a range of dates.  If not a pop up calendar, then at least adding another filter box to input a range of dates.  Also, it is a small enough data set to understand frequency of occurence based on these selectioins, which brings me to my final suggestion, summary statistics.  The next version should have a table footer that counts the rows of the table data which would be much help with a larger data set.  Otherwise, it would be cumbersome to perform simple calculations for which a computer is better suited.

Ultimately, this project is useful in providing a basic platform for users to perform a bit of their own data exploration without having to code or use any advance technologies.  It is a useful way to filter and understand UFO sighting data in multiple ways:  geography, geometry, time, and description.   So have a look yourself!  Open the page, interact with the data, and see what you can find.

### Contact

Email: mrmileyy@gmail.com