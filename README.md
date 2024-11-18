Product Display Web Application with Barcode Scanner
Overview
This is a product display web application that showcases products, allows users to toggle between light and dark modes, and integrates a barcode scanning feature to add products to the shopping list or look them up in the database.

Features
Product Display: Displays a list of products with details like price, name, and image.
Dark Mode Toggle: Switch between light and dark themes for better user experience.
Barcode Scanning: Uses a barcode scanner to add products to the user's shopping list or look up products in the database.
Prerequisites
Before you begin, ensure that you have the following installed:

Node.js (v14.x or higher)
npm (Node Package Manager)
Git (for version control)
A code editor (VSCode or similar)
Step-by-Step Setup
1. Clone the Repository
First, clone the repository to your local machine. Run the following command in your terminal:

git clone https://github.com/Shreyansh1005/Product-Display.git
2. Install Dependencies
Navigate to the project directory and install the required dependencies:

cd Product-Display
npm install
This will install all the necessary dependencies listed in the package.json file.

3. Run the Application
Start the application in development mode using:

npm start
This will start a local development server, usually accessible at http://localhost:3000/.

4. Access the Application
Open your browser and go to http://localhost:3000/ to see the application running. You should see the product list with the option to toggle between light and dark modes.

5. Test Barcode Scanning Feature
To test the barcode scanning feature:

Open the browser's console (Right-click → Inspect → Console).
Scan a barcode using a barcode scanner.
If integrated properly, the scanner should process the barcode input and show the product details or add the product to your shopping list.
Troubleshooting and Challenges Faced
1. Issue with Barcode Scanning Library
Problem: Initially, there were compatibility issues with the barcode scanning library when trying to integrate it into the React project.
Solution: After researching, we decided to use the react-qr-barcode-scanner library, which provided seamless integration with React. We also made sure to configure the scanner in a separate component, handling the barcode scanning logic properly.
2. Dark Mode Toggle Not Working Initially
Problem: The dark mode toggle wasn't functioning as expected due to issues in state management. The theme was not updating properly after clicking the toggle button.
Solution: We ensured that the state for dark mode was correctly set up using useState and added conditional class names for styling changes based on the dark mode state. We also included a transition effect to smoothen the change between light and dark modes.
3. Pagination Issue
Problem: Pagination wasn't working as expected, and the "Next" and "Previous" buttons were not disabling correctly.
Solution: We carefully reviewed the pagination logic and adjusted the conditions that controlled the disabled state of the buttons. We made sure that the page index correctly reflected the current state of the data.
4. Responsive Layout Challenges
Problem: The application wasn't fully responsive, especially on smaller screens, which led to a poor user experience on mobile devices.
Solution: We used media queries and adjusted the grid layout for product display and pagination buttons. We also optimized the barcode scanner and other components to be more adaptable to different screen sizes.
Technologies Used
React: A JavaScript library for building user interfaces.
react-qr-barcode-scanner: Library for barcode scanning.
CSS: Styling and layout using pure CSS.
Node.js: Runtime environment for running the app.
npm: Package manager to install and manage dependencies.
Future Improvements
Barcode Product Search: Enhance the barcode scanner to directly search the product database using the barcode information.
User Authentication: Add user authentication features so that users can save their shopping list and preferences.
Mobile App Integration: Extend this web app functionality to a mobile application for barcode scanning in real-world scenarios.
Conclusion
This application integrates multiple features, including product display, dark mode, and barcode scanning, to create a fully functional and responsive web application. By using modern technologies like React and react-qr-barcode-scanner, we were able to deliver a user-friendly experience, though some challenges were faced and resolved during the development process.

We hope this guide helps you in understanding the app and its setup.