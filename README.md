
# DIN3

React-native based application which fetches sporting data from a database and visualizes it.


## Features

- Visualizing sporting data
- Charting multiple datasets pulled from database
- Cross platform


## Installation

```bash
  git clone https://github.com/DIN-3/DIN-3.git
  cd DIN-3
```

```bash
  npm install
  npm start
```

    
# Documentation

## [API](https://github.com/DIN-3/DIN3-API)
 
 ### Description
This is a Node.js application that exposes three routes for accessing data stored in a MongoDB database. The application uses the Express framework and the MongoClient library to connect to the MongoDB database.

### Usage
The server exposes three routes:

GET /
Displays a list of available collections in the database.

GET /:collectionName
Displays a list of files in the specified collection.

GET /:collectionName/:fileId
Displays the contents of the specified file.
***
## [Calendar](https://github.com/DIN-3/DIN-3/blob/main/components/Calendar.tsx)
### Description

The Calendarcomponent displays a calendar UI element using the react-native-calendars library. Users can select a date on the calendar, which updates the selectedDate state variable.

### State
The CalendarScreen component defines the following state variables using the useState hook:

selectedDate (string): The currently selected date on the calendar, represented as a string in the format 'YYYY-MM-DD'. Default value is an empty string ''.

fontsLoaded (boolean): Indicates whether the custom font used in the component has been loaded or not. Default value is false.

### Methods
The CalendarScreen component defines the following methods:

onDayPress(day: object): This method is called when a user presses a day on the calendar. It updates the selectedDate state variable with the selected day's date string and logs the selected day object to the console.

loadFonts(): This method is called in the useEffect hook to load the custom font used in the component. It asynchronously loads the font using the expo-font library and sets the fontsLoaded state variable to true when the font has been loaded.

### Rendered Elements
The CalendarScreen component renders the following UI elements:

ScrollView: A scrollable container view for the component's content.

View: A container view for the component's calendar, header, and note-taking components.

Text: A header text element that prompts the user to select a date on the calendar.

Calendar: A calendar UI element that displays the days of the month and highlights the currently selected date.

NoteTaker: A custom note-taking component that displays and saves notes associated with the selected date.

Text: A text element that displays the currently selected date.

### Styling
The CalendarScreen component defines the following styles using the StyleSheet API:

scrollView: Styles for the outermost ScrollView element.

container: Styles for the View container element.

headerText: Styles for the Text header element.

calendar: Styles for the Calendar element.

selectedDateText: Styles for the Text element that displays the selected date.

noteTaker: Styles for the NoteTaker component.
***

## [Charts](https://github.com/DIN-3/DIN-3/blob/main/components/Charts.tsx)
### Description
This component displays a VictoryChart from the Victory Native library, which visualizes data retrieved from a remote API using the FetchData function.

### Props
This component accepts the following props:

route (object): The route object passed from the parent navigator component.

navigation (object): The navigation object passed from the parent navigator component.

### State
This component defines the following state variables using the useState hook:

data1 (array): An array of data points retrieved from the remote API for the first data set. Default value is an empty array [].

data2 (array): An array of data points retrieved from the remote API for the second data set. Default value is an empty array [].

isLoading (boolean): Indicates whether the data is currently being loaded or not. Default value is true.

### Methods
This component defines the following methods:

useEffect(): This method is called when the component mounts and whenever the test or test2 props change. It calls the FetchData function to retrieve data from the remote API and sets the data1 and data2 state variables once the data has been parsed. It also sets the isLoading state variable to false once the data has been retrieved.

Rendered Elements
This component renders the following UI elements:

ScrollView: A scrollable container view for the component's content.

View: A container view for the component's chart and back button.

TouchableOpacity: A touchable opacity element that navigates the user back to the previous screen.

Text: A text element that displays the names of the data sets being displayed.

VictoryChart: A chart component from the Victory Native library that visualizes the data points retrieved from the remote API.

VictoryAxis: Axis components from the Victory Native library that label the chart axes.

VictoryLine: A line component from the Victory Native library that displays the data points on the chart.

### Styling
This component defines the following styles using the StyleSheet API:

ScrollView: Styles for the outermost ScrollView element.

View: Styles for the container View element.

backButton: Styles for the TouchableOpacity element.

text: Styles for the Text element.

chart: Styles for the VictoryChart element.

axis: Styles for the VictoryAxis elements.

line: Styles for the VictoryLine element.

label: Styles for the chart labels.
***

## [DataFetch](https://github.com/DIN-3/DIN-3/blob/main/components/DataFetch.tsx)
### Description
The FetchData function is used to fetch and parse data from a CSV file hosted on the DIN-3 API. The function takes two parameters: fileID and title, which are used to construct the API endpoint URL.

### Parameters
FetchData takes the following parameters:

fileID (string): The ID of the CSV file to fetch data from.

title (string): The title of the dataset to fetch data from.

### Return value
FetchData returns a Promise that resolves to an array of objects representing the parsed data from the CSV file. Each object has the following properties:

timestamp (number): The timestamp of the data point in milliseconds.

distance (number): The distance travelled in meters.

speed (number): The speed in meters per second.

acceleration (number): The acceleration in meters per second squared.

### Dependencies
The FetchData function depends on the following external libraries:

d3 (version 5): Used to parse the CSV data.

## [History](https://github.com/DIN-3/DIN-3/blob/main/components/History.tsx)
### Description
The TestContainer component is used to display a list of links obtained from a fetch call to an API endpoint. Users can select up to two links, which are stored in the selectedOptions state variable. When the user clicks the "Compare" button, the component navigates to the ChartsScreen component and passes the selected links as props.

### Props
The TestContainer component accepts the following props:

navigation: The navigation object passed down from the parent component.

route: The route object passed down from the parent component.

### State
The TestContainer component defines the following state variables using the useState hook:

links (array): An array of links obtained from the API fetch call. Default value is an empty array [].

selectedOptions (array): An array of objects representing the selected link options. Each object contains a link property and a title property. Default value is an empty array [].

### Methods
The TestContainer component defines the following methods:

FetchID(title: string): This method is used to fetch the links data from the API endpoint. It takes a string parameter "title" and returns a Promise that resolves to an array of links.

handleOptionSelect(option: object): This method is called when a user selects an option by clicking on a link element. It updates the selectedOptions state variable with the selected option object. If two options are already selected, it replaces the first option with the newly selected option.

handleNavigation(): This method is called when a user clicks the "Compare" button. If one option is selected, it navigates to the ChartsScreen component and passes the selected link and title as props. If two options are selected, it navigates to the ChartsScreen component and passes the selected links and titles as props.

### Rendered Elements
The TestContainer component renders the following UI elements:

ScrollView: A scrollable container view for the component's content.

View: A container view for the component's header, links, and "Compare" button.

Text: A header text element that displays the component's title prop.

TouchableOpacity: A touchable opacity element that displays each link option.

Text: A text element that displays the link text.

TouchableOpacity: A touchable opacity element that triggers the handleNavigation method when pressed.

Text: A text element that displays the "Compare" button text.

### Styling
The TestContainer component defines the following styles using the StyleSheet API:

scrollView: Styles for the outermost ScrollView element.

container: Styles for the View container element.

headerText: Styles for the Text header element.

linkButton: Styles for the TouchableOpacity link option element.

compareButton: Styles for the TouchableOpacity "Compare" button element.
***

## [Home](https://github.com/DIN-3/DIN-3/blob/main/components/Home.tsx)
### Description
The code defines a functional component called HomeScreen that renders a carousel UI element using the react-native-reanimated-carousel library. Users can swipe left or right on the carousel to view different sports illustrations and select a sport, which navigates to a History screen.

### Rendered Elements
The HomeScreen component renders the following UI elements:

View: A container view for the component's carousel.

Carousel: A carousel UI element that displays sports illustrations and prompts the user to select a sport.

TouchableWithoutFeedback: A touchable element that wraps the carousel's items and navigates to the History screen when pressed.

### State and Hooks
The HomeScreen component defines the following variables and hooks:

width (number): The width of the screen.

dimensions (object): An object containing the dimensions of the screen.

isLargeScreen (boolean): Indicates whether the screen width is greater than or equal to 1200.

itemSize (number): The size of each carousel item, based on the screen width and whether the screen is considered large.

centerOffset (number): The offset of the center of the carousel from the left edge of the screen.

CAROUSEL_DATA (array of objects): An array of objects representing the sports to display in the carousel, each containing a title and an illustration.

animationStyle (function): A function that defines the animation style of the carousel items based on the current swipe position.

### Styling
The HomeScreen component defines the following styles using inline styles:

flex: Sets the flex property of the container View element to 1.

justifyContent: Centers the carousel vertically using the flexbox layout.

alignItems: Centers the carousel horizontally using the flexbox layout.

backgroundColor: Sets the background color of the container View element to black.

width: Sets the width of the Carousel element to itemSize.

height: Sets the height of the Carousel element to a fraction of the screen height, depending on the value of isLargeScreen.

backgroundColor: Sets the background color of the Carousel element to transparent.
***
## [IDFetch](https://github.com/DIN-3/DIN-3/blob/main/components/IDFetch.tsx)
### Description
The FetchID function fetches data from a web API endpoint specified by the dataUrl variable. It takes a title parameter which is appended to the URL to specify the specific resource to fetch. The function uses the cheerio library to parse the HTML response from the API endpoint and extract data from it.

### Input
title (string): The resource title to fetch from the API endpoint.
### Output
The function returns an array of strings containing the data extracted from the API endpoint.

### Dependencies
The function depends on the following libraries:

cheerio: A fast, flexible, and lean implementation of core jQuery designed specifically for the server.
***
## [Notes](https://github.com/DIN-3/DIN-3/blob/main/components/notes.tsx)
### Description
The NoteTaker component allows users to create and save notes associated with a specific date. It receives a selectedDate prop representing the currently selected date on the calendar component, and uses it to store and retrieve notes using the AsyncStorage API.

### State
The NoteTaker component defines the following state variables using the useState hook:

note (string): The text content of the note currently being written. Default value is an empty string ''.
existingNote (Note[]): An array of note objects that already exist for the selected date. Default value is an empty array [].
### Methods
The NoteTaker component defines the following methods:

storeNote(): This method is called when the user saves a new note or updates an existing one. It first checks if there are any existing notes for the selected date, and appends the new note to the end of the array. It then uses the AsyncStorage API to save the updated array of notes for the selected date. Finally, it clears the note state variable.
deleteNote(): This method is called when the user deletes an existing note. It uses the AsyncStorage API to retrieve the existing array of notes for the selected date, removes the note at the specified index, and then uses the AsyncStorage API to save the updated array of notes for the selected date.
### Rendered Elements
The NoteTaker component renders the following UI elements:

Text: A header text element that prompts the user to write a note.
TextInput: A multi-line text input element that allows the user to write the content of their note.
TouchableOpacity: A button element that allows the user to save their note.
Text: A text element that displays existing notes, if any.

***
## Authors

- [@AyrtonR](https://github.com/AyrtonR)
- [@jayportimo](https://github.com/jayportimo)
- [@Jerzke](https://github.com/Jerzke)
- [@JoniKuukasjarvi](https://github.com/JoniKuukasjarvi)
- [@Stradioto](https://github.com/Stradioto)
- [@valtteeri](https://github.com/valtteeri)


