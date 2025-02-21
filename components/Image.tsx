import Image from "next/image";
import ProfilePic from '@/public/yash.png'

export default function MyImage(){
    return(
        <>
        <Image src={ProfilePic}
              alt="Me" width={200} height={200} 
              className="w-auto h-auto "/>
        </>
    );
}