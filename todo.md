- Make optional validations for password field in form handler:
    - have several stages of checks for password being: 
        - over n chars
        - having a number
        - having a non-alphanumeric component
        - other?
    - change color of text or something based on how many conditions are met
    - have text appear suggesting what to fix
    - but don't require anything except being over a low number of chars.
    - this is separate from backend validation

- add models for favorites and booked_flights
- make button fave or book flight_offer object
- make the specific search for the sample response return the sample response
- add more search options

- how should routing work for getting info from back end?

- how to separate models from searches- or do I need to?
    - do I just save every response in the db? Do i serve it straight up to the front end?

