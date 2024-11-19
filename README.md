Product Display Web Application
This web application showcases a list of products, featuring dark mode support, pagination, and a barcode scanner integration for convenient product lookup and adding products to a list. It's built using React.js for the frontend and Node.js with MongoDB for the backend.

Table of Contents
Setup Instructions
Running the Application
API Endpoints
Design Decisions
Challenges Faced and Solutions
Setup Instructions
Follow these steps to set up the application on your local machine:

Clone the Repository:

git clone https://github.com/Shreyansh1005/Product-Display.git
cd Product-Display
Install Dependencies:

For the frontend:
cd frontend
npm install
For the backend:
cd ../backend
npm install
Environment Variables:

Create a .env file in the backend directory and set your environment variables:
MONGO_URI=your_mongodb_connection_string
PORT=your_preferred_port
Run the Application:

Start the backend server:
cd backend
npm start
Start the frontend server:
cd ../frontend
npm start
Open the Application:

Navigate to http://localhost:3000 in your browser.
API Endpoints
Product Endpoints
GET /api/products
Description: Fetches a list of all products.
Response: Array of product objects.
POST /api/products
Description: Adds a new product.
Body Parameters: product_id, product_name, category, price, etc.
GET /api/products/
Description: Fetches details of a specific product.
URL Parameter: id - The ID of the product.
PUT /api/products/
Description: Updates a product's details.
URL Parameter: id - The ID of the product.
Body Parameters: Fields to be updated.
DELETE /api/products/
Description: Deletes a product from the database.
URL Parameter: id - The ID of the product.
Barcode Scanner Endpoint
POST /api/barcode/scan
Description: Scans a barcode and returns the associated product information.
Body Parameters: barcode - The barcode data.
Design Decisions
User Interface: The design focuses on a clean, modern UI with a dark mode option for better user experience.
Barcode Scanner: We integrated a barcode scanning feature using a third-party library to facilitate quick product lookup.
Pagination: Implemented to handle large product datasets efficiently and improve the application's performance.
Responsive Design: The entire layout is responsive, ensuring a seamless experience on different devices.
Challenges Faced and Solutions
Data Fetching and Handling Delays:

Problem: Fetching product data from the database sometimes caused noticeable delays.
Solution: Optimized API calls and implemented loading spinners to improve the user experience.
Barcode Scanner Integration:

Problem: Ensuring compatibility and smooth functionality across different devices and browsers.
Solution: Used a well-documented barcode scanning library and tested extensively on multiple platforms.
Dark Mode Implementation:

Problem: Maintaining consistent styling between light and dark modes was tricky.
Solution: Carefully crafted CSS rules with transition properties for smooth mode switching.
Handling Pagination:

Problem: Implementing pagination efficiently for a large dataset.
Solution: Used array slicing and conditional rendering to load only the necessary items for each page.