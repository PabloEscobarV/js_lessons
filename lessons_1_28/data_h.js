/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   data_h.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Pablo Escobar <sataniv.rider@gmail.com>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2026/01/10 21:53:48 by Pablo Escob       #+#    #+#             */
/*   Updated: 2026/01/10 22:01:45 by Pablo Escob      ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function getCurrentData()
{
	const current_date = new Date().toLocaleDateString(); // Get partial readable date like "1/10/2026"
	console.log("CURRENT DATA: ", current_date);
	return current_date;
}

const getCurrentTime = () =>
{
	const current_time = new Date().toLocaleTimeString();
	console.log("CURRENT TIME: ", current_time);
	return current_time;
}

export
{
	getCurrentData,
	getCurrentTime
};