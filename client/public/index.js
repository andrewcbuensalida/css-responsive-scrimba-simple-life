async function getRecentArticles() {
	let raw = await fetch("/api/v1/");
	let result = await raw.json();

	result.forEach((article) => {
		let articleRecent = document.createElement("article");
		articleRecent.classList.add("article-recent");
		let articleRecentMain = document.createElement("div");
		articleRecentMain.classList.add("article-recent-main");
		let articleTitle = document.createElement("h2");
		articleTitle.classList.add("article-title");
		articleTitle.innerText = article.title;
		let articleBody = document.createElement("p");
		articleBody.classList.add("article-body");
		articleBody.innerText = article.body;
		let articleReadMore = document.createElement("a");
		articleReadMore.classList.add("article-read-more");
		articleReadMore.innerText = "continue reading";
		let articleRecentSecondary = document.createElement("div");
		articleRecentSecondary.classList.add("article-recent-secondary");
		let articleImage = document.createElement("img");
		articleImage.classList.add("article-image");
		articleImage.setAttribute("src", article.imageSrc);
		articleImage.setAttribute("alt", article.imageAlt);
		let articleInfo = document.createElement("p");
		articleInfo.classList.add("article-info");
		articleInfo.innerText = new Date(article.date).toDateString();
		articleRecent.appendChild(articleRecentMain);
		articleRecentMain.appendChild(articleTitle);
		articleRecentMain.appendChild(articleBody);
		articleRecentMain.appendChild(articleReadMore);
		articleRecent.appendChild(articleRecentSecondary);
		articleRecentSecondary.appendChild(articleImage);
		articleRecentSecondary.appendChild(articleInfo);
		document.querySelector("main").appendChild(articleRecent);
	});
}

getRecentArticles();
