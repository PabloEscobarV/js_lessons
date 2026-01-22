/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Pablo Escobar <sataniv.rider@gmail.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/01/05 16:35:15 by Pablo Escob       #+#    #+#             */
/*   Updated: 2026/01/22 22:41:07 by Pablo Escob      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

const formElement = document.querySelector('.form');
const loginElement = document.querySelector('.form__input[name="login"]');
const passwordElement = document.querySelector('.form__input[name="password"]');
const submitButton = document.querySelector('.form__button');
const togglePswButton = document.querySelector('.toggle-password');

formElement.action = '/Register';
formElement.method = '/post';
formElement.ariaHidden = 'true';
formElement.ariaLabel = 'Form for registration';
loginElement.setAttribute('value', 'ADMIN');
formElement.style.position = "absolute";
console.log(togglePswButton.style);
togglePswButton.style.position = "absolute";
togglePswButton.style.right = "5px";
togglePswButton.style.top = "50%";
togglePswButton.style.transform = "translateY(-50%)";
togglePswButton.style.cssText +=
`
	border-width: 1px;
	border-color: rgb(58, 110, 38);
	border-style: solid;
`;

console.log(togglePswButton.classList);
formElement.classList.add('box');
loginElement.style.cssText +=
`
	border-width: 5px;
	border-color: rgba(44, 5, 5, 0.99);
`;

export
{
	formElement,
	loginElement,
	passwordElement,
	submitButton,
	togglePswButton,
};

console.log(formElement.classList.contains('box'));
formElement.style.setProperty('--border-color', 'yellow');