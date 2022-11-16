  pm.test("REQUEST Status code is 200", function () {
      pm.response.to.have.status(200);
    });
    pm.test("REQUEST Response time is less than 500ms", function () {
        pm.expect(pm.response.responseTime).to.be.below(500);
    });
    pm.test("REQUEST Content-Type is present", function () {
        pm.response.to.have.header("Content-Type");
    });
        pm.test("REQUEST Status code is 200", function () {
      pm.response.to.have.status(200);
    });
