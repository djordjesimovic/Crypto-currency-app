Project: Crypto currency application

Features:
    - Live tracking of information on 5 cryptocurrency pairs
    - Ability to view details for each pair separately
    - Ability to add and remove currency pairs to favorite pairs (if the user is logged in)
    - Ability to follow live information about favorite couples (if the user is logged in)

Description:
    First, it is checked whether the platform is available or not, by sending a request to the endpoint 
    https://api-pub.bitfinex.com/v2/platform/status, if 1 is received in the response, it means that it 
    is available, and information can be rendered, and if 1 is not obtained, it means that it is unavailable 
    and a message is rendered that the platform is currently unavailable.

    The main page of the application consists of a header and a main part where information about currency
    pairs is located.

    In the header, there are 2 buttons Home and Login, when the user clicks on the login, he is permanently 
    logged in (until the application is shut down), and the Favorites button appears in the header.
    Clicking on the Home button in the main part renders information about the first 5 currency pairs from 
    the endpoint https://api.bitfinex.com/v1/symbols.
    Clicking on the Favorites button in the main part renders information about currency pairs that the user 
    has added to favorites.

    In the main part of the application, information about currency pairs is rendered, this information is obtained 
    live from the WebSocket: wss://api-pub.bitfinex.com/ws/2.
    The information is displayed in the graphic interface as cards, clicking on one of the cards provides more 
    detailed information about the selected currency pair, if the user is logged in, the add to favorites 
    or remove from favorites button is also displayed.

    By clicking on the favorites button, the user gets information about the pairs that he has added to his favorites, 
    they are displayed as well as information about the initial pairs, also by clicking on any of the pairs, he gets 
    detailed information about it.

    For styling the application, pure css was used without any additional UI libraries.

Solution for CORS problem:
    Since I had previous experience in creating API endpoints and setting up localhost servers using express.js, 
    I applied that to this situation as well.
    I created my local server and within it created endpoints that are forwarded to the bitfinex API endpoints.
    I have set up the necessary settings on my server so that I don't have problems with CORS.
    The server currently only works on localhost, but everything would work if it were published to the Internet.

Login Funcionality solution:
    The login functionality in this case is solved without interaction with the user, it works with one bolean 
    value that is false at the beginning, and at the moment when the user clicks on the login button, 
    the value changes to true and remains so until the application is shut down, there is no logout functionality.

*Note
    The only functionality missing is to unsubscribe from a pair when removed from favorites. 
    (I did not manage this since this is the first time I work with WebSockets, 
    I hope this will not be a big drawback when evaluating this application, 
    and if I meet the other criteria I would like to learn more about WebSockets through work with them).