"use client";

import Post from "@/libs/class/Post.class";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import AdminInputWrapper from "@/components/Admin/Input/AdminInputWrapper";
import AdminSelect from "@/components/Admin/Input/AdminSelect";
import {
  addPost,
  getSeriesList,
  getSiteList,
  getTopicList,
  updatePost,
} from "@/libs/api/Admin.api";
import PostDto from "@/libs/dto/admin/PostDto";
import { useRouter } from "next/navigation";
import { inputStyle } from "@/components/Admin/AdminConstantClassNames";

export default function PostAddOrUpdate({
  post,
}: {
  post?: Post;
}) {
  const router = useRouter();

  const isUpdate = !!post;

  const [site, setSite] = useState(post ? post.site : "");
  const [topic, setTopic] = useState(post ? post.topic : "");
  const [series, setSeries] = useState(post ? post.series : "");
  const titleRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const clearWritingPost = () => {
    localStorage.removeItem("limcDevHasWriting");
    localStorage.removeItem("limcDevTime");
    localStorage.removeItem("limcDevPost");
  };
  const setPostField = (
    title: string | undefined,
    summary: string | undefined,
    content: string | undefined,
  ) => {
    if (titleRef.current) titleRef.current.value = title || "";
    if (contentRef.current) contentRef.current.value = content || "";
    if (summaryRef.current) summaryRef.current.value = summary || "";
  };

  // localStorage 에 작성중 데이터가 있다면 가져온다
  useEffect(() => {
    if (isUpdate) {
      setPostField(post.title, post.summary, post.content);
    } else {
      const hasWriting = localStorage.getItem("limcDevHasWriting");
      const hasWritingTime = localStorage.getItem("limcDevTime");
      if (
        hasWriting &&
        hasWritingTime &&
        confirm(
          `${new Date(
            hasWritingTime,
          ).toISOString()}에 등록 실패한 게시글이 있습니다. 불러오시겠습니까?`,
        )
      ) {
        const limcDevPost = localStorage.getItem("limcDevPost");
        if (limcDevPost) {
          const postDto = JSON.parse(limcDevPost) as PostDto;
          setPostField(postDto.title, postDto.summary, postDto.content);
          clearWritingPost();
        }
      }
    }
  }, []);

  const onSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    /**
     * select 를 제외한 필드요소 정합성은 html 요소를 사용
     * select 는 state 를 사용하기 때문에 해당 state 값 관련 정합성만 실행
     */
    if (!(site && topic && series)) {
      alert("site, topic, series 값을 확인해주세요");
      return;
    }
    if (!(titleRef.current && summaryRef.current && contentRef.current)) {
      alert("ref 설정이 올바르지 않습니다.");
      return;
    }

    const postDto = new PostDto(
      titleRef.current.value,
      contentRef.current.value,
      site,
      topic,
      series,
      post ? post.id : "",
      summaryRef.current.value,
    );

    const saveLocalStorage = () => {
      alert("게시글이 등록되지 않았습니다.");
      clearWritingPost();
      localStorage.setItem("limcDevHasWriting", "true");
      localStorage.setItem("limcDevTime", new Date().toString());
      localStorage.setItem("limcDevPost", JSON.stringify(postDto));
    };

    const addOrUpdateCallback = (p?: Post) => {
      if (p && p.id) {
        alert("게시글이 등록되었습니다!");
        router.push("/admin");
      } else {
        saveLocalStorage();
      }
    };
    const addOrUpdateCatchCallback = () => {
      saveLocalStorage();
    };

    if (isUpdate)
      updatePost(postDto)
        .then(addOrUpdateCallback)
        .catch(addOrUpdateCatchCallback);
    else
      addPost(postDto)
        .then(addOrUpdateCallback)
        .catch(addOrUpdateCatchCallback);
  };

  return (
    <div className="w-full py-3">
      <div className="text-center text-2xl font-bold mb-5">
        게시글 {isUpdate ? "수정" : "작성"}
      </div>
      <form onSubmit={onSubmit} className="w-full grid grid-cols-8 px-6 gap-3">
        <AdminInputWrapper title="사이트" span={4}>
          <AdminSelect
            value={site}
            isChild={false}
            setFunction={setSite}
            dataFunction={getSiteList}
          />
        </AdminInputWrapper>
        <AdminInputWrapper title="주제" span={4}>
          <AdminSelect
            value={topic}
            isChild={true}
            parentValue={site}
            setFunction={setTopic}
            dataFunction={getTopicList}
          />
        </AdminInputWrapper>
        <AdminInputWrapper title="시리즈">
          <AdminSelect
            value={series}
            isChild={true}
            parentValue={topic}
            setFunction={setSeries}
            dataFunction={getSeriesList}
          />
        </AdminInputWrapper>
        <AdminInputWrapper title="제목">
          <input className={inputStyle} ref={titleRef} type="text" required />
        </AdminInputWrapper>
        <AdminInputWrapper title="요약">
          <textarea className={inputStyle} ref={summaryRef} rows={5}></textarea>
        </AdminInputWrapper>
        <AdminInputWrapper title="내용">
          <textarea
            className={inputStyle}
            ref={contentRef}
            rows={10}
            required
          ></textarea>
        </AdminInputWrapper>
        <button
          type="submit"
          className="
                        col-start-8 col-end-9
                        cursor-pointer
                        bg-gray-300 text-gray-600
                        hover:bg-gray-400 hover:text-gray-700
                        px-3 py-2 text-center
                "
        >
          {isUpdate ? "수정" : "저장"}
        </button>
      </form>
    </div>
  );
}
