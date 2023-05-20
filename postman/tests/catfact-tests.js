pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 800ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(800);
});

var jsonData = pm.response.json();

pm.test('Length is a number', () => {
    _.each(jsonData, (item) => {
        pm.expect(typeof item["length"]).to.equal('number');
    })
})


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 800ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(800);
});

pm.test("Response contains fact", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.fact).to.exist;
});

pm.test("Fact element is not null or zero-length", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.fact).to.not.be.null;
});



pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 800ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(800);
});

pm.test("Response contains fact", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData[0].breed).to.exist;
});

pm.test("Fact element is not null or zero-length", function () {
    var jsonData = pm.response.json();
    console.log("JSON: ", jsonData)
    pm.expect(jsonData[0].breed).to.not.be.undefined;
});



