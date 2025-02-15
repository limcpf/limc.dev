import type { GlobalConfiguration } from "../cfg";
import { i18n } from "../i18n";
import type { QuartzPluginData } from "../plugins/vfile";
import { classNames } from "../util/lang";
import { type FullSlug, type SimpleSlug, resolveRelative } from "../util/path";
import { Date, getDate } from "./Date";
import { byDateAndAlphabetical } from "./PageList";
import style from "./styles/recentNotes.scss";
import type {
	QuartzComponent,
	QuartzComponentConstructor,
	QuartzComponentProps,
} from "./types";

interface Options {
	title?: string;
	limit: number;
	linkToMore: SimpleSlug | false;
	showTags: boolean;
	filter: (f: QuartzPluginData) => boolean;
	sort: (f1: QuartzPluginData, f2: QuartzPluginData) => number;
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
	limit: 3,
	linkToMore: false,
	showTags: true,
	filter: () => true,
	sort: byDateAndAlphabetical(cfg),
});

export default ((userOpts?: Partial<Options>) => {
	const RecentNotes: QuartzComponent = ({
		allFiles,
		fileData,
		displayClass,
		cfg,
	}: QuartzComponentProps) => {
		if (fileData.slug !== "index") return;
		const opts = { ...defaultOptions(cfg), ...userOpts };
		const pages = allFiles.filter(opts.filter).sort(opts.sort);
		const remaining = Math.max(0, pages.length - opts.limit);

		return (
			<div class={classNames(displayClass, "recent-notes")}>
				<h3>{opts.title ?? i18n(cfg.locale).components.recentNotes.title}</h3>
				<ul class="recent-ul">
					{pages.slice(0, opts.limit).map((page) => {
						const title =
							page.frontmatter?.title ??
							i18n(cfg.locale).propertyDefaults.title;
						const tags = page.frontmatter?.tags ?? [];

						return (
							<li class="recent-li">
								<div class="section">
									<div class="desc">
										<h3>
											<a
												href={resolveRelative(fileData.slug!, page.slug!)}
												class="internal"
											>
												{title}{" "}
												<span style={{ fontSize: "10px" }}>
													({page.slug?.split("/").slice(0, -1).join(" > ")})
												</span>
											</a>
										</h3>
									</div>
									{page.dates && (
										<p class="meta">
											<Date date={getDate(cfg, page)!} locale={cfg.locale} />
										</p>
									)}
									{opts.showTags && (
										<ul class="tags">
											{tags.map((tag) => (
												<li>
													<a
														class="internal tag-link"
														href={resolveRelative(
															fileData.slug!,
															`tags/${tag}` as FullSlug,
														)}
													>
														{tag}
													</a>
												</li>
											))}
										</ul>
									)}
								</div>
							</li>
						);
					})}
				</ul>
				{opts.linkToMore && remaining > 0 && (
					<p>
						<a href={resolveRelative(fileData.slug!, opts.linkToMore)}>
							{i18n(cfg.locale).components.recentNotes.seeRemainingMore({
								remaining,
							})}
						</a>
					</p>
				)}
			</div>
		);
	};

	RecentNotes.css = style;
	return RecentNotes;
}) satisfies QuartzComponentConstructor;
