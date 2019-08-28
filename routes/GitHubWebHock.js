var express = require('express');

var app = express();

app.use(express.json());

app.post('/', function (request, response) {

    const repositoty = request.body["repository"];
    //const repoName = repositoty["name"]
    const repoName = "muaKea-someproject-Ios";
    const PrivateOrPublic = repositoty["private"];
    console.log(repoName);

    console.log(PrivateOrPublic);





    let count = NumbersOfHypgen(repoName) ;
    //someone-project-platform

    console.log(count);
    console.log(Object.is(repoName.charAt(0),repoName.charAt(0).toUpperCase()) + "<---");
    if (!(Object.is(repoName.charAt(0), repoName.charAt(0).toUpperCase()) === false && count < 2 || count > 2)) {
        console.log("error at name>" + repoName + "<");
        //SendApiRequest(repoName, PrivateOrPublic);


    }
});

app.listen(8080);


function SendApiRequest(name, PrivateOrPublic) {
    var request = require('request');

// Set the headers
    var headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    };

// Configure the request
    var options = {
        url: 'https://slack.com/api/chat.postMessage',
        method: 'POST',
        headers: headers,
        form: {
            'token': 'xoxp-2773101897-731794854357-740677794997-cf3ee893dd4f0419ef1ec56d831b9eee',
            'channel': 'interns-cph',
            "as_user": "true",
            "text": "node js post request tester >" + name
        }

    };

// Start the request
    request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            // Print out the response body
            console.log(body)
        }
    });




}

    /**
     * @return {number}
     */
    function NumbersOfHypgen(Reponame) {
    return (Reponame.match(/-/g) || []).length;
}