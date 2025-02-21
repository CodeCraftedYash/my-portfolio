interface ShiningTextProps {
    text: string;
  }
const ShiningText = ({text}:ShiningTextProps)=>{
   return(
    <>
    <div className="w-fit relative overflow-hidden">
        <div className="absolute w-1/12 h-full -skew-x-12 blur-sm animate-moving-animation" style={{
            backgroundImage:"linear-gradient(to right, transparent 49%, white 49%, white 51%, transparent 51%",
            opacity:"0.5",
        }}
        ></div>
    <h1>{text}</h1>
    </div>
    </>
   );
}
export default ShiningText;