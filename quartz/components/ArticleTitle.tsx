import { classNames } from "../util/lang";
import type {
	QuartzComponent,
	QuartzComponentConstructor,
	QuartzComponentProps,
} from "./types";

const ArticleTitle: QuartzComponent = ({
	fileData,
	displayClass,
}: QuartzComponentProps) => {
	const hideTitle = fileData.frontmatter?.hideTitle;
	if (hideTitle) {
		return null;
	}

	const title = fileData.frontmatter?.title;

	if (title) {
		return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>;
	}

	return null;
};

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`;

export default (() => ArticleTitle) satisfies QuartzComponentConstructor;
