# calendar-react

[Image placeholder]

## Getting Started

Make sure you have installed node and npm, at least v.6.

1. Clone or fork this repository to your local machine.

```
$git clone https://github.com/mrdoomus/calendar-react.git
```

2. Enter the root folder

```
$cd calendar-react
```

3. Install modules

```
$npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

[To be defined]

### Mandatory Features

- [x] Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also,
      include a city.
- [x] Display reminders on the calendar view in the correct time order.
- [x] Allow the user to select color when creating a reminder and display it appropriately.
- [x] Ability to edit reminders – including changing text, city, day, time and color.
- [x] Add a weather service call from a free API such as ​Open Weather Map​, and get the
      weather forecast (ex. Rain) for the date of the calendar reminder based on the city.
- [] Unit test the functionality: ​Ability to add a new "reminder" (max 30 chars) for a user
  entered day and time. Also, include a city.

### Opcional Features

- [x] Expand the calendar to support more than the current month.
- [x] Properly handle overflow when multiple reminders appear on the same date.
- [x] Functionality to delete one or ALL the reminders for a specific day

## Built With

- [ReactJS](https://es.reactjs.org/) - Javascript library for frontend.
- [Redux](https://es.redux.js.org/) - React state manager.
- [Jest](https://jestjs.io/) - Javascript testing tool.
- [Bootstrap](https://getbootstrap.com/) - Frontend framework.

## Authors

- **Camilo Villegas** - [mrdoomus](https://github.com/mrdoomus)
