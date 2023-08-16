import {AdminDto} from "@/libs/dto/admin/AdminDto";
import LoginDto from "@/libs/dto/admin/LoginDto";
import {NEXT_PUBLIC_SERVER_URL} from "@/libs/constant/Api.constant";
import Page from "../class/Page.class";
import Post from "../class/Post.class";
import {METHOD, METHODS} from "./Constant.api";

async function adminFetch(url: string, method:METHOD, body?: any) {
    let json;

    let header: Headers = new Headers();
    header.set("Content-type", "application/json");
    const option: RequestInit = {
        method: method,
        headers: header,
        credentials: "include"
    }

    if((method === METHODS.POST || method === METHODS.PATCH) && !!body) {
        option.body = JSON.stringify(body);
    }

    return await fetch(url, option);
}

export async function login(adminDto:AdminDto) {
    const url = `${NEXT_PUBLIC_SERVER_URL}/api/public/login`;
    const response = await adminFetch(url, METHODS.POST, adminDto);
    const json = await response.json();

    if(response.ok) return json as LoginDto
    else throw new Error(json.error || "알 수 없는 오류입니다.");
}

export async function getPostPageInAdmin(page: string) {
    // const url = `${NEXT_PUBLIC_SERVER_URL}/api/private/post/site/DEV?page=${page || "1"}`;
    const url = `http://localhost:8080/private/post/site/DEV?page=${page || "1"}`;
    const response = await adminFetch(url, METHODS.GET);
    const json = await response.json();

    if(response.ok) return json as Page<Post>;
    else {
        if(json.status === 404) return Page.getEmptyPage() as Page<Post>;
        else throw new Error(json.error || "알 수 없는 오류입니다.");
    }
}

export async function logout() {
    const url = `${NEXT_PUBLIC_SERVER_URL}/api/public/logout`;
    const response = await adminFetch(url, METHODS.GET);

    return response.ok;
}