function navLayout() {
	const layout = document.createElement('div');
	const layoutBtn = document.createElement('button');
	const layoutNav = document.createElement('nav');

	layout.className = 'layout-navigation';
	layoutBtn.setAttribute('type', 'button');
	layoutBtn.innerText = 'Навигация по верстке';

	layoutNav.innerHTML = `
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
	`;

	document.body.append(layout);
	layout.append(layoutBtn);
	layout.append(layoutNav);

	layoutBtn.addEventListener('click', () => {
		layout.classList.toggle('open');
	});
}

document.addEventListener('DOMContentLoaded', () => {
	navLayout();
});
