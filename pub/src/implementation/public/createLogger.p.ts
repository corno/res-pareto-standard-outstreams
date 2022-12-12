import * as pi from "pareto-core-internals"

//import * as cp from "child_process"
import * as api from "../../api"

export const createLogger: api.CCreateLogger = ($) => {

    return ($) => {
        console.log($)
    }
}