import express from "express";
import cors from "cors";
import { Application } from "express";
// import * as expressValidator from 'express-validator';

import Log from "./log";

class Http {
  public static mount(_express: Application): Application {
    Log.info("Booting the 'HTTP' middleware...");

    // Enables the request body parser
    _express.use(express.json());

    // _express.use(express.urlencoded({
    // 	limit: Locals.config().maxUploadLimit,
    // 	parameterLimit: Locals.config().maxParameterLimit,
    // 	extended: false
    // }));

    // Disable the x-powered-by header in response
    _express.disable("x-powered-by");

    // Enables the request payload validator
    // _express.use(expressValidator());

    // Enables the CORS
    _express.use(cors());

    return _express;
  }
}

export default Http;
