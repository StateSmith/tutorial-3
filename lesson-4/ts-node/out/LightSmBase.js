"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightSmBase = void 0;
var chalk_1 = __importDefault(require("chalk")); // for colored console output
// handwritten code. Provides helper functions for the LightSm class.
var LightSmBase = /** @class */ (function () {
    function LightSmBase() {
    }
    LightSmBase.prototype.lightBlue = function () {
        console.log(chalk_1.default.blue("BLUE"));
        // console.log("BLUE");
    };
    LightSmBase.prototype.lightYellow = function () {
        console.log(chalk_1.default.yellow("YELLOW"));
        // console.log("YELLOW");
    };
    LightSmBase.prototype.lightRed = function () {
        console.log(chalk_1.default.red("RED"));
        // console.log("RED");
    };
    return LightSmBase;
}());
exports.LightSmBase = LightSmBase;
//# sourceMappingURL=LightSmBase.js.map