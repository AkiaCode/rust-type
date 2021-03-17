import * as rust_type from "."


function Result(e: String): rust_type.ResultType<string, string> {
    let result = new rust_type.Result<string, string>();
    if (e === "ok") {
        return result.Ok("Ok")
    } else {
        return result.Err("warning: not ok")
    }
}

function Optine(e: String): rust_type.OptineType<string> {
    let option = new rust_type.Optine<string>();
    if (e === "ok") {
        return option.Some("yest")
    } else {
        return option.None
    }
}


console.log(Result("ok"), Result("asdasd"))
console.log(Optine("ok"), Optine("asdasd"))