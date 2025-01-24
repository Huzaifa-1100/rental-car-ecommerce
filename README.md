Rent-a-Car Website UX/UI Overview
I have designed a professional Rent-a-Car website focusing on an engaging and user-friendly UI/UX experience. The platform includes key pages that demonstrate the flow of a car rental system, ensuring a clean and modern design.

Pages Designed:
Landing Page:

Serves as the homepage showcasing the brand and services.
Features an intuitive navigation menu and sections highlighting car categories or special offers.
Category Page:

Displays a categorized list of cars (e.g., SUVs, Sedans, Economy).
Includes car previews with images, names, and brief details.
Car Detail Page:

A detailed page for each car displaying specifications, pricing, and availability.
Designed with a clean layout to focus on car details and images.
Admin Panel:

A separate interface designed for managing car listings and categories.
Includes options for adding, editing, and removing car details.
Design Tools and Technologies:
Created using Next.js for seamless structure and routing.
Styled with Tailwind CSS for a responsive and visually appealing layout.

Day 1 Activity
Choose Rental Ecommerce as a Market Place and differentiate between
o General E-Commerce
o Q-Commerce
o Rental E-Commerce 

Define Business Goals 
A rental marketplace for party supplies might target event planners or families organizing special occasions

Create a Data Schema
creating data scheema for sanity CMS

DAY 2 PLANNING THE TECHNICAL FOUNDATION 
BUSINESS GOALS OVERVIEW
Provide an easy-to-use platform for renting cars
Target audience: Tourists, business travelers, and locals needing temporary transportation
Offer various car types and rental durations
Set apart by ease of use, flexibility, and competitive pricing

TECHNICAL REQUIREMENTS
• Frontend Requirements:
o User-friendly interface for browsing and renting cars
o Responsive design for both mobile and desktop users
o Essential pages: Home, Car Listings, Car Details, Booking, User Profile
• Backend (Sanity CMS):
o Manage car data, customer details, and rental records
o Design schemas in Sanity CMS for:
▪ Cars
▪ Customers
▪ Rentals
▪ Locations

DAY 3 -API INTEGRATION REPORT MORENT RENTAL CAR
API integration process:
API integration involves connecting applications by enabling them to communicate and exchange data using defined endpoints. This process typically includes sending requests, handling responses, and ensuring seamless interaction between systems.

IMPLEMENTATION
Create sanity project and integrate with youNextjs project
Create new API token and set into your .env.local
Script to migrate data from API to Sanity

DAY 4 HAKATHON MORENT RENTAL CAR

1.Setup and Configuration:
•Initialized a Next.js project and configured Tailwind CSS for styling.
•Integrated Sanity CMS to manage car data (e.g., car name, type, price, images).
2.Dynamic Routing:
•Implemented dynamic routes for car details usinggenerateStaticParams
to pre-render pages for each car based on its slug.
•Created a[car]dynamic route to display detailed information about a specific car.
3.Data Fetching:
•UsedgetCarsto fetch car data from Sanity CMS.
•ImplementeduseEffectto fetch data on the client side for filtering and rendering.
4.Filtering Functionality:
•Added a sidebar with checkboxes for filtering cars by type (e.g., SUV, Sedan) and seating capacity.
•UseduseStateto manage selected filters and dynamically update the list of displayed cars.

CHALLENGES FACED AND SOLUTIONS IMPLEMENTED
1.Dynamic Routing Errors:
•Challenge:Errors occurred when accessingcar.slug.currentdue to missing or undefinedslugfields.
•Solution:Added conditional checks to ensurecar.slugandcar.slug.currentexist before rendering links.
2.Client-Side vs Server-Side Rendering:
•Challenge:The filtering functionality required client-side interactivity, but the page was treated as a Server Component by default.
•Solution:Added the"use client"directive to mark the component as a Client Component, enabling the use of React hooks likeuseStateanduseEffect.
3.Data Fetching:
•Challenge:Initially usedasync/awaitdirectly in the component, which caused issues with server-side rendering.
•Solution:Moved data fetching logic touseEffectto handle it on the client side.

WEBSITE FUNCTIONALITIES
1.Car Catalog:
•Displays a list of cars with details like name, type, price, seating capacity, and transmission.
•Users can click on a car to view its detailed information.
2.Dynamic Car Details:
•Each car has a dedicated page with detailed information, including images, specifications, and pricing.
3.Filtering:
•Users can filter cars by type (e.g., SUV, Sedan) and seating capacity using the sidebar.
4.Responsive Design:
•The website is fully responsive, ensuring a seamless experience on desktops, tablets, and mobile devices.
5.Image Optimization:
•Car images are optimized for fast loading using Next.js's Image component

CONCLUSION:
The car rental website successfully integrates dynamic routing, client-side filtering, and responsive design to provide a seamless user experience. By following best practices and addressing challenges effectively, the website is both performant and user-friendly. Future enhancements could include user authentication, booking functionality, and integration with a payment gateway.

Day5 - TESTING AND BACKEND REFINEMENT

FUNCTIONAL TESTING:
•TEST CORE FEATURES:
•PRODUCT LISTING: ENSURE PRODUCTS ARE DISPLAYED CORRECTLY.
•FILTERS AND SEARCH: VALIDATE ACCURATE RESULTS BASED ON USER INPUTS.
•DYNAMIC ROUTING: VERIFY INDIVIDUAL PRODUCT DETAIL PAGES LOAD CORRECTLY

ERROR HANDLING
IMPLEMENT PROPER ERROR MESSAGES FOR:
NETWORK FAILURES:
IT WILL RETURN “FAILED TO FETCH CAR DATA. PLEASE TRY AGAIN’
NETWORK SLOW:
IT WILL RETURN “LOADING CARS…”

AVOID EXPOSING SENSITIVE API KEYS
Avoiding Exposure of Sensitive API Keys in My Website
To protect my website from security vulnerabilities, it is crucial to avoid exposing sensitive API keys, such as those used for payment gateways (e.g., Stripe), database connections, or third-party services. Exposing these keys can lead to unauthorized access, data breaches, and financial loss.
Best Practices to Prevent API Key Exposure:
1. Use Environment Variables:
Store API keys securely in .env files instead of hardcoding them in the codebase.
2. RESTRICT KEY USAGE:
Use API key restrictions based on IP addresses, domain or specific services
3. VERSION CONTROL SAFETY:
Use API key restrictions based on IP addresses, domain or specific services

TEST CASE REPORT LINK
https://github.com/Huzaifa-1100/rental-car-ecommerce/blob/main/documentations/Testing_Report.csv