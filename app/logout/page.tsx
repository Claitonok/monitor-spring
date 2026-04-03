'use client';

import { redirect } from "next/navigation";

export default function Logout() {

    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    redirect('/');

}
