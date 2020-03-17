<h1><img src="public/flight-finder-logo-cutout.png" alt="flight finder logo" width="40" height="25">&nbsp;Flight Finder</h1>
<!-- ![](public/flight-finder-logo-and-text-cutout.png) -->

### *Note: This repo is for the Flight Finder front end. The back end can be found [here](https://github.com/BenMiriello/flight-finder-api).*

## Usage and Features

Search for flights and view the cheapest offers and the latest price.
* Customize search by selecting: one-way, non-stop only, preferred class, number of passengers.
* Filter results by airline.
* View results in condensed and expanded formats with detailed information for each leg of the flight.
* Save and review flights in secure user account.

Built with: React, Redux, Thunk, Semantic UI React, [Cometari Airport Finder API](https://www.cometari.com/applications/airport-finder).

<!-- Back end stack: -->

<!-- Required search parameters: 
* Originating airport
* Destination airport
* Departure date
* Return date -->

<!-- Optional search parameters: 
* Search for one-way tickets
* View non-stop flights only
* Set preferred class:
  * Economy
  * Premium Economy
  * Business
  * First Class
  * Any
* Number of passengers:
  * Number of Adults
  * Number of Children
  * Number of Infants -->

<!-- ### APIs

* [Cometari Airport Finder API](https://www.cometari.com/applications/airport-finder) -->

## Demo

A video demo of Flight Finder is available on [YouTube](https://youtu.be/Px8IAOQFDKc).

![](demos/flight-finder-clip.gif)

<!-- **Search for Airports by City Name**

![](demos/FlightFinderSearchClip.gif)

**Refresh and Filter Results**

![](demos/FlightFinderRefreshAndFilterClip.gif)

**View Flight Details and Save Flights**

![](demos/FlightFinderFlightCardClip.gif) -->

<!-- Interested in giving Flight Finder a try? Try out the [live app](url)! -->

## Frontend Installation Overview

Once the Rails server is running, launch the frontend components on http://localhost:3001:

```
cd ..
cd flight-finder
npm install && npm start
```

## License

The MIT License (MIT)

Copyright (c) 2020 Ben Miriello

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
