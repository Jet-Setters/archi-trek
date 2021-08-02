# Software Requirements

## Vision
### What is the vision of this product?
- Create a website that allows users to plan trips based on location and weather.
- Based on current temperatures, provide a packing list.
- Securely protect user profile and information

### What pain point does this project solve?
- Reduces stresses of travel planning

### Why should we care about your product?
- Travel is becoming more popular in a post-COVID world, and people will need help planning their trips.

## Scope (In/Out)
### IN - What will your product do
Describe the individual features that your product will do.
- Allow users to login using their Google account
- Require user to enter their intended destination
- Based on destination, the web app will display the weather and temperatures on a 15 day scale
- Generate a relative map of the location with nearby attractions
- Saves interested cities for quick retrieval of location data

### OUT - What will your product not do.
These should be features that you will make very clear from the beginning that you will not do during development. These should be limited and very few. Pick your battles wisely. This should only be 1 or 2 things. Example: My website will never turn into an IOS or Android app.
- Users will not be able to book travel reservations from the site

### Minimum Viable Product
#### What will your MVP functionality be?
- Web app that allows user to enter location
- Returns weather at location on a 7-15 day scale
- Displays relative map of location
- Allow saving of interested cities
- Uses OAuth to require login to view data stored from previous session

### Stretch
#### What stretch goals are you going to aim for?
- Implement Airbnb API for lodging options
- Implement Yelp API for popular restaurants 

## Functional Requirements
#### List the functionality of your product. 
- Allow users to login using their Google account
- Require user to enter their intended destination
- Based on destination, the web app will display the weather and temperatures on a 15 day scale
- Generate a relative map of the location with nearby attractions
- Saves interested cities for quick retrieval of location data


### Data Flow
### Describe the flow of data in your application. 
1. User logs in 
2. User enters search query
3. Search query sent to backend
4. Backend requests query from API
5. API responds with data
6. Data displayed on frontend in stylized format

Non-Functional Requirements (301 & 401 only)
Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

- Security for Auth0
  - Login services to store saved data
- Usability
  - User friendly UX/UI on frontend
