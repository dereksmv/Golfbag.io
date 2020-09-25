This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Scripts You Should Know
#### Start the Server
"npm run dev-server"

#### Start the React app
"npm run start"

#### Run both the Server and the React app
"npm run dev"

### File Structure
#### Folders are in bold
Files are in plain text

### Golfbag.io - Root folder
tailwind.js - Javascript initialization for Tailwind  
tailwind.config.js - JS config   
postcss.config.js - handles the processing of our CSS  
package.json - contains config for the entire application  
package-lock.json - contains info about dependencies  
index.js - the server is initialized in here  
.env - contains environmental variables (hidden variables we don't want to expose - database login, etc.)  
#### src - contains config for Redux (Redux is a statewide application state library
#### services - contains functions we use in the server
#### routes - contains the various routes we have in the api
#### node modules - dependencies - when we install a new library, it gets added here
#### models - create the configurations for objects we store in the database
#### public - this is our primary react folder - this is the only folder that will be exposed to the public

### API Routes and How Tos

a ":" before a route indicates a parameter. What you put in that field determines what you get back

#### POST
/api/golfers/create_new/ - save a new golfer to the DB
/api/tournaments/create_new - save a new tournament to the DB
/api/golfbag/create_new/ - save a new golf bag to the DB

#### GET
/api/golf_clubs/:manufacturer/:brand_name/:club_type
example: /api/golf_clubs/Calloway/Big_Bertha/Driver returns 
```
{
    "_id": "5f6a93a7817bb538fc59cd7d",
    "club_type": "Driver",
    "brand_name": "Big Bertha",
    "shaft": "Graphite",
    "loft": "11.0",
    "length": "28\"",
    "manufacturer": "Calloway",
    "__v": 0
}
```
/api/golfers/search/:first_name/:last_name
example: /api/golfers/search/Tiger/Woods returns
```
{
    "_id": "5f6c0ba33457dd2d98ac3b54",
    "first_name": "Tiger",
    "last_name": "Woods",
    "player_image": "Mugshot.jpg",
    "sponsorship": "Nike",
    "tour": "PGA",
    "rank": "#1 in my heart",
    "country": "United States",
    "__v": 0
}
```

/api/tournaments/search/:tournament/:year
example: /api/tournaments/search/Masters/2020 returns

```
{
    "_id": "5f6c1d4dc957610c14ce8e8d",
    "name": "Masters",
    "date": "Sep 17–20, 2020",
    "course": "Winged Foot West",
    "city": "Mamaroneck",
    "state": "New York",
    "country": "United States",
    "winner": "Bryson DeChambeau",
    "year": "2020",
    "__v": 0
}
```

/api/golfbag/search/:first_name/:last_name/:tournament
example: /api/golfbag/search/Tiger/Woods/Pebble_Beach returns

```
{
    "clubs": [
        "[{club_type: Driver, brand_name: Tiger Woods,     manufacturer: Nike}]"
    ],
    "_id": "5f6d06ce46c7ee26d081aff8",
    "player": {
        "first_name": "Tiger",
        "last_name": "Woods"
    },
    "tournament": "Pebble Beach",
    "__v": 0
}
```

