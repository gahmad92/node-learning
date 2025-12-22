
const queryString = require("querystring");

function userDataSubmit(req, res) {
    let dataBody = [];

    req.on('data', (chunk) => {
        dataBody.push(chunk);
    });

    req.on("end", () => {
        let rawData = Buffer.concat(dataBody).toString();
        let readableData = queryString.parse(rawData);

        let dataString = "My name is " + readableData.name + " and my email is " + readableData.email;
        console.log(dataString);

        // Send HTML response with the data
        res.write(`
            <h1>You can get data from user from here</h1>
            <p><strong>Name:</strong> ${readableData.name}</p>
            <p><strong>Email:</strong> ${readableData.email}</p>
        `);
        res.end(); // <-- end response here
    });
}

module.exports = userDataSubmit;
