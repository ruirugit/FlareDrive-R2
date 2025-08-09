import {get_auth_status} from "@/utils/auth";

export async function onRequest(context) {
   if(!get_auth_status(context)){
    var header = new Headers()
    header.set("WWW-Authenticate",'Basic realm="需要登录"')
    return new Response("没有操作权限", {
        status: 401,
        headers: {
            "WWW-Authenticate": 'Basic realm="需要登录"',
            "Access-Control-Allow-Origin": "*",
        },
    });
   }
    
    return new Response("access", {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    });
}