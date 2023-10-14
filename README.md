# WEB103 Project 4 - *MileMarker*

Submitted by: **Farnaz Zinnah**

About this web app: 
        MileMarker is an intuitive web application that presents a diverse catalogue of watches, allowing users to explore, customize, and manage their own watch collections with ease. Our platform showcases various watch categories, including Dress, Diving, Fitness, and more, each with unique icons for a visual treat!
        
        Key Features:
        
        1. Explore Watches: Delve into a wide array of watches, each detailed with categories, descriptions, start and end dates, and more. What's your style? Classic leather, sporty diver, or even an eco-friendly wooden watch – we've got them all lined up for you!
        
        2. Customize Your Collection: Our interactive system lets you select different aspects of your watch, changing its visual icon to match your style. Leather band? Touchscreen? Choose what suits you and see it take form before your eyes!
        
        3. Save & Manage: Found what you like? Just hit 'save'! Your custom watch is added to your personal collection. You can view, edit, or delete your choices at any time. Simple as a click!
        
        4. Smart Selection: Tried to pair a digital feature with a vintage category? Our app smartly spots such mismatches! You'll get a friendly note to guide your customization. No oops moments!
        
        5. Price Tally: Keep an eye on your budget! The app calculates the total price of your features, helping you make informed choices.
        
        6. All Your Watches, In One Place: Your submitted watches are neatly organized for your review. A quick glance or a detailed inspection – it's your call!
        
        7. Flexible Management: Want to change something? From any watch's detail page, you can update features or say goodbye to outdated styles with our delete option.

Time spent: **40** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomCar` table**
  - [x] **NOTE: Your GIF must include a view of your Railway database that shows the contents of the table used by your app**
- [x] **The web app uses React to display data from the API**
- [x] **Users can view a list of options they can select for different aspects of a `CustomCar`**
- [x] **On selecting each option, the displayed visual icon for the `CustomCar` updates to match the option the user chose**
- [x] **The user can submit their choices to save the car to the list of created `CustomCar`**
- [x] **If a user submits a feature combo that is impossible, they should receive an appropriate error message and the item should not be saved to the database**
- [x] **The app displays the total price of all features**
- [x] **Users can view a list of all submitted `CustomCar`**
- [x] **Users can edit or delete a submitted `CustomCar` from the list view of submitted `CustomCar`**
- [x] **Users can update or delete `CustomCar` that have been created from the detail page**

The following **optional** features are implemented:

- [x] Selecting particular options prevents incompatible options from being selected even before form submission

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/fzinnah17/MileMarker/blob/main/Zinnah_Farnaz_MileMap-min.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with LICEcap

## Notes


Project Challenges and Solutions

Challenge 1: Permission Denied Error
**Issue:** Encountered a 'permission denied' error when trying to create a directory.
- **Solution:** Granted ownership to the current user for the 'MileMarker' directory and ran 'npm install' with admin rights.

Challenge 2: Database Initialization
**Issue:** The PostgreSQL database wasn't auto-generating the 'CustomItems' table.
- **Solution:** Realized the necessity of including the 'dotenv' import in the 'reset.js' file, which was initially omitted.

Challenge 3: API Endpoint Not Found
**Issue:** Received a '404 Not Found' error when attempting to post to 'http://localhost:5173/custom-items'.
- **Solution:** This was a code-related error. Ensuring the correct URL and server-side handling was necessary. 

Challenge 4: Database Insert Error
**Issue:** Encountered an error when trying to insert items into the database, as there was a mismatch between supplied parameters and those required by the prepared statement.
- **Solution:** Adjusted the query statement and placeholders to match the data structure, ensuring the right number of parameters were supplied.


## License

Copyright [2023] [Farnaz Zinnah]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
