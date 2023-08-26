export default function AdminTabBtn({text,isActive,setFunc,mode}:{
    text:string;
    isActive:boolean;
    setFunc:Function;
    mode: string;
}) {
    let className
        = `${isActive ? "bg-gray-200" : "bg-white border-r border-t"} w-20 px-4 py-2 text-center text-sm cursor-pointer`;
   return (
       <div
           className={className}
           onClick={() => setFunc(mode)}
       >
           {text}
       </div>
   )
}