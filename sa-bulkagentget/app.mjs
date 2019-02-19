import http from "http";
import https from "https";


const PORT=9000;


const requestAgent = agentId => {

    return new Promise(resolve => {

        console.log("sending request");
        console.log(agentId)

        const subreq = https.request({
            hostname: "share.osf.io",
            method: "GET",
            path: "/api/v2/search/agents/" + agentId
        }, subresp => {
            console.log("response");
            var body = ""; // var intentional.

            subresp.on("data", chunk => {
                console.log("data")
                if (chunk) {
                    body += chunk;
                }
            });

            subresp.on("end", () => {
                console.log(body);
                if (!body) {
                    console.error();
                    return;
                }
                resolve(JSON.parse(body));
            });
        });

        subreq.on("error", (e) => {
            console.log("got error: " + e.message);
            resolve({});
        });

        subreq.end();

    });

};

const requestAgentDetails = agentIds => {

    return Promise.all(agentIds.map(

        item => new Promise(async resolve => {

            const agentId = item.key;
            console.log("Requesting: " + agentId);

            const agent = await requestAgent(agentId);
            console.log("agent");
            console.log(agent)

            if (!agent._source) {
                agent._source = {
                    name: "",
                    id: agentId,
                    sources: [],
                    location: "",
                    identifiers: [],
                    type: "",
                    types: []
                };
            }

            agent._source.number = item.doc_count;
            if (item.awards) {
                agent._source.awards = item.awards;
            }

            resolve(agent._source);

        })

    ));

};

http.createServer((req, resp) => {

    if (req.method == "POST") {

        var body = "";

        req.on("data", data => {
            body += data;
            if (body.length > 1e6) { // Too much POST data, kill the connection!
                req.connection.destroy();
            }
        });

        req.on("end", async () => {
            const agentIds = JSON.parse(body);
            const agentDetails = await requestAgentDetails(agentIds);
            resp.end(JSON.stringify(agentDetails));
        });

    } else {
        resp.end("It Works!! Path Hit: " + req.url);
    }

}).listen(PORT, () => {

    console.log("Server listening on: http://localhost:%s", PORT);

});

