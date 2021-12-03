// dynamically rendering articles from node server
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

// the header is dynamically loaded with this
document.querySelector("header").innerHTML = `
			<div class="container container-flex">
				<div class="site-title">
					<h1>A Flexible Life</h1>
					<p class="subtitle">A responsive demo website featuring CSS Flexbox</p><p class="subtitle">The header is rendered dynamically with Javascript innerHTML injection</p>
				</div>
				<nav>
					<ul>
						<li>
							<a ${
								document.title == "Home" &&
								`class="current-page"`
							} href="index.html">Home</a>
						</li>
						<li><a ${
							document.title == "About me" &&
							`class="current-page"`
						} href="about-me.html">About me</a></li>
						<li><a ${
							document.title == "Recent posts" &&
							`class="current-page"`
						} href="recent-posts.html">Recent posts</a></li>
					</ul>
				</nav>
			</div>
			<!-- / .container -->
		`;
// dont render articles in the about page
if (document.title !== "About me") {
	getRecentArticles();
}

// hard to mix jquery load with template method. have to separate, because if in the same container, load will overwrite template tag. if not in about me page, load about me widget
if (document.title !== "About me") {
	$(".sidebar-widget").first().load("about-me-widget.html");
}

// lower sidebar is rendered dynamically. you still have to change content across multiple files
const template = document.getElementById("template-sidebar-widget");
document.querySelector(".sidebar").appendChild(template.content);

// the footer is dynamically loaded with this
$("footer").load("footer.html");
