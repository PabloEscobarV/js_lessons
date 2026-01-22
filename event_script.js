/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   event_script.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Pablo Escobar <sataniv.rider@gmail.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/01/22 22:06:29 by Pablo Escob       #+#    #+#             */
/*   Updated: 2026/01/22 22:40:31 by Pablo Escob      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as elements from './script.js';

const
{
	formElement,
	loginElement,
	passwordElement,
	submitButton,
	togglePswButton
} = elements;

let submit_clicked = false;

formElement.addEventListener('submit', (event) =>
{
	event.preventDefault();

	console.log(`Login: ${loginElement.value}`);
	console.log(`Password: ${passwordElement.value}`);

	alert(`Login: ${loginElement.value}\nPassword: ${passwordElement.value}`);
});

togglePswButton.addEventListener('click', () =>
{
	if (passwordElement.type === 'password')
	{
		passwordElement.type = 'text';
		togglePswButton.textContent = '🙈';
		formElement.classList.toggle('box');
		formElement.classList.remove('red');   // ✅ Спочатку видаляємо червоний
		formElement.classList.add('green');    // ✅ Потім додаємо зелений
	}
	else
	{
		passwordElement.type = 'password';
		togglePswButton.textContent = '👁️';
		formElement.classList.toggle('box');
		formElement.classList.remove('green'); // ✅ Спочатку видаляємо зелений
		formElement.classList.add('red');      // ✅ Потім додаємо червоний
	}
});

submitButton.addEventListener('click', () =>
{
	submit_clicked = !submit_clicked;
	if (submit_clicked)
	{
		submitButton.textContent = 'Submitted!';
		formElement.dataset.form_action = '1'; 
		formElement.style.setProperty('--border-color', 'green');
	}
	else
	{
		submitButton.textContent = 'Submit';
		formElement.dataset.form_action = '0'; // ✅ Повертаємо назад
		formElement.style.setProperty('--border-color', 'red');
	}

});

setTimeout(() =>
{
	formElement.classList.remove('box');
}, 5000);