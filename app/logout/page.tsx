// 'use client';

// import { redirect } from "next/navigation";

// export default function Logout() {

//     document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
//     redirect('/');

// }

'use client';

export const dynamic = 'force-dynamic';

import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    window.location.href = "/login";
  }, []);

  return <p>Saindo...</p>;
}