import Series from "@/libs/class/Series.class";
import Page from "@/libs/class/Page.class";

export default function AdminSeriesList({series}:{series: Page<Series>}) {
    const content = series.content;

    const gridCommon
        = " grid sm:row-span-full cursor-pointer text-center hover:bg-gray-200 cursor-pointer";
    const title
        = " text-center font-light";
    const topic
        = " col-span-full row-span-1 sm:col-span-1 sm:row-span-full flex flex-row justify-center items-center text-xl font-bold ";
    const smallText = " text-gray-400 text-xs font-light";
    return (<main className="w-full flex flex-col p-3">
        <div className="hidden sm:grid sm:grid-cols-4 sm:border-b sm:border-b-gray-300 sm:pb-3">
            <div className={title}>주제</div>
            <div className={title + " col-span-3"}>제목</div>
        </div>

        {
            content.length > 0
                ? content.map(({topicName, title, createdAt, updatedAt}) => {
                   return <div className={gridCommon + " grid-cols-1 grid-rows-3 sm:grid-cols-4 sm:grid-rows-2 gap-x-1 py-3 sm:py-2 border-b  sm:mt-1"}>
                       <div className={topic}>{topicName}</div>
                       <div className={gridCommon + " grid-rows-2 col-span-full row-span-2 sm:col-span-3 sm:row-span-full pt-2 sm:pt-0 sm:py-2 hover:bg-gray-200"}>
                           <div className="col-span-full text-center">{title}</div>
                           <div className={"flex justify-center items-center sm:justify-end sm:items-end col-span-full row-start-2 row-end-3" + smallText}>
                               만든 날짜 : {new Date(createdAt).toLocaleDateString()},
                               마지막 수정한 날짜 : {new Date(updatedAt).toLocaleDateString()}
                           </div>
                       </div>
                   </div>
                })
                : <div>등록된 시리즈가 없습니다.</div>
        }
    </main>)
}