pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

var latencyTestName = "Response time is less than " + pm.collectionVariables.get("latencyLimit") + " ms";

pm.test(latencyTestName, function () {
    pm.expect(pm.response.responseTime).to.be.below(parseInt(pm.collectionVariables.get("latencyLimit")));
});

pm.test("Response contains breed", function () {
    var jsonData = pm.response.json();
    console.log("breed: ", pm.response.json()[0].breed);
    pm.expect(pm.response.json()[0].breed).not.to.be.undefined;
});