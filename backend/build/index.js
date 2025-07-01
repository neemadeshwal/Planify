"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = __importDefault(require("./docs/swagger"));
const app_1 = require("./app");
const constants_1 = require("./utils/constants");
const mongodb_1 = require("./db/mongodb");
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const { app } = yield (0, app_1.initServer)();
        yield (0, mongodb_1.connectDB)();
        app.get('/', (req, res) => {
            res.send('Hello world...');
        });
        app.listen(constants_1.PORT, () => {
            console.log('Server is listening on port: ', constants_1.PORT, '......');
        });
        (0, swagger_1.default)(app);
    });
}
init();
