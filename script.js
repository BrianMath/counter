const number = document.querySelector("#number");
const plus = document.querySelector("#plus");

number.textContent = localStorage.getItem("number") || "0";

function decNumber(decrement, buttonElement) {
	let num = parseInt(number.textContent);
	num -= decrement;
	number.textContent = num;

	localStorage.setItem("number", number.textContent);

	// Animação \\

	// Cria um novo ícone de -
	let newMinus = document.createElement("img");
	newMinus.src = "minus.svg";
	newMinus.classList.add("dive");
	newMinus.style.bottom = `${Math.random() * 50}%`;
	newMinus.style.left = `${Math.random() * 60}%`;

	// Adiciona o - ao DOM, isto é, ao botão específico que invocou a animação
	buttonElement.appendChild(newMinus);

	// Tempo para acabar a animação e remover o -
	setTimeout(() => {
		newMinus.remove();
	}, 500);
}

function incNumber(increment, buttonElement) {
	let num = parseInt(number.textContent);
	num += increment;
	number.textContent = num;

	localStorage.setItem("number", number.textContent);

	// Animação \\

	// Cria um novo ícone de +
	let newPlus = document.createElement("img");
	newPlus.src = "plus.svg";
	newPlus.classList.add("float");
	newPlus.style.top = `${Math.random() * 50}%`;
	newPlus.style.left = `${Math.random() * 60}%`;

	// Adiciona o + ao DOM, isto é, ao botão específico que invocou a animação
	buttonElement.appendChild(newPlus);

	// Tempo para acabar a animação e remover o +
	setTimeout(() => {
		newPlus.remove();
	}, 500);
}

function resetNumber(buttonElement) {
	number.textContent = 0;

	localStorage.setItem("number", number.textContent);

	buttonElement.style.scale = 2;
	buttonElement.style.zIndex = 2;

	setTimeout(() => {
		buttonElement.style.scale = 1;
	}, 100);
}
