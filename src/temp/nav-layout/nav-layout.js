const navLayout = {
	open: false,

	createNavLayout() {
		const layout = document.createElement('div');
		layout.className = 'layout-navigation';
		layout.innerHTML = `
		<button type="button">Навигация по HTML-страницам</button>
		<nav>
			<b>Навигация по HTML-страницам</b>
			<div>
				<ul>
					<li>
						<a href="index.html">Главная страница</a>
					</li>
					<li>
						<a href="page-pug.html">PUG Шаблон</a>
					</li>
					<li>
						<a href="page-html.html">HTML шаблон</a>
					</li>
					<li>
						<a href="page-twig.html">TWIG шаблон</a>
					</li>
				</ul>
			</div>
		</nav>
		<small>by Yury Uvarov</small>
		`;

		document.body.append(layout);
	},

	openNavLayout() {
		document.body.classList.add('show-nav-layout');
		this.open = true;
	},

	closeNavLayout() {
		document.body.classList.remove('show-nav-layout');
		this.open = false;
	},

	hasClick() {
		document.addEventListener('click', (e) => {
			if (e.target.closest('.layout-navigation button') && !this.open) {
				this.openNavLayout();
			} else if (e.target.closest('.layout-navigation button') && this.open) {
				this.closeNavLayout();
			} else if (!e.target.closest('.layout-navigation') && this.open) {
				this.closeNavLayout();
			}
		});
	},

	init() {
		this.createNavLayout();
		this.hasClick();
	},
};

document.addEventListener('DOMContentLoaded', () => {
	navLayout.init();
});
