import './post.css';
import PostWrapper from "@/components/Post/PostWrapper";
import {getPost} from "@/libs/api/Post.api";


let title: string;
let description: string;

export default async function RootPost({
   params
}: {
  params: { id: string}
}) {
  const post = await getPost(params.id);

  title = "LimC | " + post.title;
  description = post.summary;

  return(<PostWrapper post={post} />);
}

export async function generateMetadata() {
  return {
    title: title,
    description: description,
    authors: {
      url: "https://github.com/limcpf",
      name: "LimC"
    },
    openGraph: {
      title: title,
      description: description,
      emails: "daeseong0226@gmail.com",
      siteName:"limc.dev",
      type: "website"
    }
  }
}