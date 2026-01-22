/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Pablo Escobar <sataniv.rider@gmail.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/01/22 23:58:51 by Pablo Escob       #+#    #+#             */
/*   Updated: 2026/01/23 00:24:56 by Pablo Escob      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const boxElement = document.querySelector('.box');
const boxParam = boxElement.getBoundingClientRect();

// console.log(boxElement.offsetWidth);  // Width + padding + border
// console.log(boxElement.offsetHeight); // Height + padding + border
// console.log(boxElement.clientLeft);  // Width + padding
// console.log(boxElement.clientTop); // Height + padding
// console.log(boxElement.clientWidth); // Width + padding
// console.log(boxElement.clientHeight); // Height + padding

// console.log(boxElement.scrollWidth);  // Full width including overflow
// console.log(boxElement.scrollHeight); // Full height including overflow

// boxElement.scroll(1, 50);
// console.log(boxElement.scrollLeft);  // Current horizontal scroll position
// console.log(boxElement.scrollTop); // Current vertical scroll position
// console.log(getComputedStyle(boxElement).height);


// console.log(boxParam);
// console.log(boxParam.width);
// console.log(boxParam.height);
// console.log(boxParam.top);
// console.log(boxParam.right);
// console.log(boxParam.bottom);
// console.log(boxParam.left);

const logCoordinates = () =>
{
		const boxParam = boxElement.getBoundingClientRect();
		console.log("boxParam.x:", boxParam.x);
		console.log("boxParam.y:", boxParam.y);

		console.log("boxParam.x + window.scrollX:", boxParam.x + window.scrollX);
		console.log("boxParam.y + window.scrollY:", boxParam.y + window.scrollY);

		console.log("Scrolled x: ", window.scrollX);
		console.log("Scrolled y: ", window.scrollY);
}

window.addEventListener('scroll', () =>
{
	logCoordinates();
});
