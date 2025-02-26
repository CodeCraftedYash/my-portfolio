import {nanoid} from "nanoid"
type SocialMediaLinksType = {
id:string;
title:string;
logo:string;
link:string;
}
type ThisSiteTechTypes = {
id:string;
title:string;
logo:string;
link:string;
}

export const socialMediaLinks:SocialMediaLinksType[] = [
    {id:nanoid(),title:"LinkedIn",logo:"https://img.freepik.com/free-psd/linkedin-logo-icon-psd-editable_314999-3660.jpg?t=st=1740336187~exp=1740339787~hmac=fa438c6c5f2902ca745d9fb5ac5d70b4d61bcb78ec750ffa6434261e97faa48c&w=900",link:"https://www.linkedin.com/in/yash-mishra-55461a282/"},

    {id:nanoid(),title:"Instagram",logo:"https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1740335850~exp=1740339450~hmac=c613cfef3347c0a4fc448b9d0d550e8b606a372ec9d1637fbae3be08b06eb8e2&w=900",link:"https://www.instagram.com/codecraftedyash/"},
    {id:nanoid(),title:"Github",logo:"https://img.icons8.com/?size=100&id=12599&format=png&color=000000",link:"https://github.com/CodeCraftedYash"},
]

export const thisSiteTech: ThisSiteTechTypes[] = [
    { id: nanoid(), title: "Next.js", logo: "/nextjs.svg", link: "https://nextjs.org" },
    { id: nanoid(), title: "TypeScript", logo: "/typescript.svg", link: "https://www.typescriptlang.org" },
    { id: nanoid(), title: "Tailwind CSS", logo: "/tailwind.svg", link: "https://tailwindcss.com" },
  ];
