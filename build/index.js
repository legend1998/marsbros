"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use("/solid", express_1.default.static("public"));
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "templates", "landing.html"));
});
app.listen(8080, () => {
    console.log("listening on 8000");
});
