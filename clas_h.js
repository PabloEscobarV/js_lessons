/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   clas_h.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Pablo Escobar <sataniv.rider@gmail.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/01/11 17:39:06 by Pablo Escob       #+#    #+#             */
/*   Updated: 2026/01/11 17:49:03 by Pablo Escob      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

class localTimer
{
	constructor()
	{

	}
	getCurrentTime = () =>
	{
		let counter = 0;
		return () =>
		{
			++counter;
			return { time: new Date().toLocaleTimeString(), count: counter };
		}
	}

}

export { localTimer };