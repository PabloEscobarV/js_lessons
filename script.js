/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Pablo Escobar <sataniv.rider@gmail.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/01/05 16:35:15 by Pablo Escob       #+#    #+#             */
/*   Updated: 2026/01/21 00:24:20 by Pablo Escob      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

const formElement = document.querySelector('.form');
const loginElement = document.querySelector('.form__input[name="login"]');
const passwordElement = document.querySelector('.form__input[name="password"]');
const submitButton = document.querySelector('.form__button');
const togglePswButton = document.querySelector('.toggle-password');
let formData = formElement;
let submit_clicked = false;

console.log(formElement);
console.log(loginElement);
console.log(passwordElement);
console.log(submitButton);
console.log(formElement.action);
formElement.action = '/Register';
console.log(formElement.action);
formElement.method = '/post';
console.log(formElement.method);
formElement.ariaHidden = 'true';
formElement.ariaLabel = 'Form for registration';
loginElement.setAttribute('value', 'ADMIN');
console.log(loginElement.value);
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
	}
	else
	{
		passwordElement.type = 'password';
		togglePswButton.textContent = '👁️';
	}
});

submitButton.addEventListener('click', () =>
{
	submit_clicked = !submit_clicked;
	if (submit_clicked)
	{
		submitButton.textContent = 'Submitted!';
		formElement.dataset.form_action = '1'; 
	}
	else
	{
		submitButton.textContent = 'Submit';
		formElement.dataset.form_action = '0'; // ✅ Повертаємо назад
	}

});
