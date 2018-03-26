var http = require("http");
var https = require("https")

const PORT=9000;


http.createServer(function(request, response){


    if (request.method == "POST") {

        var body = "";

        request.on("data", function(data) {

            body += data;

            // Too much POST data, kill the connection!
            if (body.length > 1e6) {
                request.connection.destroy();
            }

        });

        var ids = [];

        request.on("end", function() {

            ids = JSON.parse(body).map(function(item, index, array) {
		console.log("REQUESTING " + item.key);

                var share_req = https.request({
                    hostname: "share.osf.io",
                    method: "GET",
                    port: 443,
                    path: "/api/v2/search/agents/" + item.key
                }, function(resp) {
                    
                    var item_details = "";

                    resp.on("data", function(chunk) {
			if (chunk) {
                            item_details += chunk;
                        }
                    });

                    resp.on("end", function() {
			if (!item_details) {
				console.log("something bad here");
				console.log(item_details);
				return;
			}
                        console.log(item_details);
			var details = JSON.parse(item_details);
                        if (!details._source) {
                            details._source = {
                                name: "",
                                id: item.key,
                                sources: [],
                                location: "",
                                identifiers: [],
                                type: "",
                                types: []
                            };
                        }

                        ids[index] = details._source;
                        ids[index].number = item.doc_count;

                        if (item.awards) {
                            ids[index].awards = item.awards;
                        }

                        if (ids.some(function(el, index, array) { return el == null; })) {
                            return;
                        }

                        response.end(JSON.stringify(ids));

                    });

                })
		share_req.on("error", function(e) {

                    console.log("got error: " + e.message);

                });

		share_req.end();

                return null;

            });

        });

    } else {

        console.log(request);
        response.end("It Works!! Path Hit: " + request.url);

    }


}).listen(PORT, function(){

    console.log("Server listening on: http://localhost:%s", PORT);

});
