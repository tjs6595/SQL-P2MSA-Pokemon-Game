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
// DEPENDENCIES
// create router and save it to pokemon variable
const express_1 = __importDefault(require("express"));
const methodOverride = require('method-override');
const npcs = express_1.default.Router();
const Npc = require('../mongo_models/npc.js');
// reference the models folder
const db = require('../mongo_models');
// MIDDLEWARE
npcs.use(methodOverride('_method'));
// INDEX ROUTE
// FIND ALL NPCs
npcs.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    db.Npc.find()
        .then((npcs) => {
        res.render('npcs/index', { npcs });
    })
        .catch((err) => {
        console.log(err);
        res.render('error404');
    });
}));
// EXPORT
module.exports = npcs;
