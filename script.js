const mangaPictureContainer = document.querySelector('div.manga-picture-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pictures = [
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/4fed57b1.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/7f66bdd4.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/618829c9.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/537577a6.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/e6852dff.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/31e28611.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/015e4864.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/9e671605.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/f3555816.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/0492347a.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/e063b0a3.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/f1fa4aa2.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/d6171393.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/67770f34.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/b0d181f1.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/7b909901.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/674a3526.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/cde09df0.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/075b8e62.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/4fde30ab.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/4fde30ab.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/2d8c2d1a.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/afd029fe.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/b41b37cc.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/7c0947d5.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/af1ec1a1.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/cd86243b.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/efed9487.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/0ef53745.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/bb79af56.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/35592f2e.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/03e3621f.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/2ef79f31.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/5f0a9278.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/07f9d5ce.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/ba32f84e.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/a798784c.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/1f7352c1.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/1955452d.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/8b921331.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/fca6580e.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/2207abaa.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/3fa058db.jpg',
	'https://is2.sh-cdn.com/images/5/8/b/3/252714/a8e4a9a6.jpg',
	'https://is1.sh-cdn.com/images/5/8/b/3/252714/c9abaade.jpg',
];

let currentIndex = 0;
mangaPictureContainer.style.backgroundImage = `url(${pictures[currentIndex]})`;

prevButton.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--;
		mangaPictureContainer.style.backgroundImage = `url(${pictures[currentIndex]})`;
	}
});

nextButton.addEventListener('click', () => {
	if (currentIndex < pictures.length - 1) {
		currentIndex++;
		mangaPictureContainer.style.backgroundImage = `url(${pictures[currentIndex]})`;
	}
});
