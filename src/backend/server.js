"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = 3000;
app.use(express_1["default"].static("public"));
app.get("/score", function (req, res) {
    var _a;
    var _b = req.query, team = _b.team, points = _b.points;
    var score = 0;
    if (typeof points === "string") {
        score = parseInt(points, 10);
    }
    else if (typeof points === "number") {
        score = points;
    }
    res.json((_a = {},
        _a[team] = {
            score: score
        },
        _a));
});
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
