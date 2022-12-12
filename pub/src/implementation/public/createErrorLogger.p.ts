import * as pi from "pareto-core-internals"

//import * as cp from "child_process"
import * as api from "../../api"

export const createErrorLogger: api.CCreateLogger = ($) => {

    return ($) => {
        console.error($)
    }
}