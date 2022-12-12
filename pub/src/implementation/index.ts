import { API } from "../api"
import { createErrorLogger } from "./public/createErrorLogger.p"
import { createLogger } from "./public/createLogger.p"

export * from "./public/createLogger.p"

export const $a: API = {
    createErrorLogger: createErrorLogger,
    createLogger: createLogger,
}