/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jshint strict: true */

$(function () {
	"use strict";
	$("#elastic_grid_demo").elastic_grid({
		'hoverDirection': true,
		'hoverDelay': 0,
		'hoverInverse': false,
		'expandingSpeed': 500,
		'expandingHeight': 500,
		'items' :
			[
				{
			        'title' : 'Lorem BCI Ipsum',
			        'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			        'thumbnail' : ['img/portfolio/small/1.jpg', 'img/portfolio/small/2.jpg', 'img/portfolio/small/3.jpg', 'img/portfolio/small/4.jpg', 'img/portfolio/small/11.jpg'],
			        'large' : ['img/portfolio/large/1.jpg', 'img/portfolio/large/2.jpg', 'img/portfolio/large/3.jpg', 'img/portfolio/large/4.jpg', 'img/portfolio/large/11.jpg'],
			        'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['All, BCI']
				},

				{
			        'title' : 'Lorem BCI Ipsum',
			        'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			        'thumbnail' : ['img/portfolio/small/1.jpg', 'img/portfolio/small/2.jpg', 'img/portfolio/small/3.jpg', 'img/portfolio/small/4.jpg', 'img/portfolio/small/11.jpg'],
			        'large' : ['img/portfolio/large/1.jpg', 'img/portfolio/large/2.jpg', 'img/portfolio/large/3.jpg', 'img/portfolio/large/4.jpg', 'img/portfolio/large/11.jpg'],
			        'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['All, BCI']
				},

				{
			        'title' : 'Lorem BCI Ipsum',
			        'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			        'thumbnail' : ['img/portfolio/small/1.jpg', 'img/portfolio/small/2.jpg', 'img/portfolio/small/3.jpg', 'img/portfolio/small/4.jpg', 'img/portfolio/small/11.jpg'],
			        'large' : ['img/portfolio/large/1.jpg', 'img/portfolio/large/2.jpg', 'img/portfolio/large/3.jpg', 'img/portfolio/large/4.jpg', 'img/portfolio/large/11.jpg'],
			        'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['All, BCI']
				},

				{
			        'title' : 'Lorem BCI Ipsum',
			        'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			        'thumbnail' : ['img/portfolio/small/1.jpg', 'img/portfolio/small/2.jpg', 'img/portfolio/small/3.jpg', 'img/portfolio/small/4.jpg', 'img/portfolio/small/11.jpg'],
			        'large' : ['img/portfolio/large/1.jpg', 'img/portfolio/large/2.jpg', 'img/portfolio/large/3.jpg', 'img/portfolio/large/4.jpg', 'img/portfolio/large/11.jpg'],
			        'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['All, BCI']
				},

				{
			        'title' : 'Lorem BCI Ipsum',
			        'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			        'thumbnail' : ['img/portfolio/small/1.jpg', 'img/portfolio/small/2.jpg', 'img/portfolio/small/3.jpg', 'img/portfolio/small/4.jpg', 'img/portfolio/small/11.jpg'],
			        'large' : ['img/portfolio/large/1.jpg', 'img/portfolio/large/2.jpg', 'img/portfolio/large/3.jpg', 'img/portfolio/large/4.jpg', 'img/portfolio/large/11.jpg'],
			        'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['BCI,All']
				},

				{
			        'title' : 'Lorem BCI Ipsum',
			        'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			        'thumbnail' : ['img/portfolio/small/1.jpg', 'img/portfolio/small/2.jpg', 'img/portfolio/small/3.jpg', 'img/portfolio/small/4.jpg', 'img/portfolio/small/11.jpg'],
			        'large' : ['img/portfolio/large/1.jpg', 'img/portfolio/large/2.jpg', 'img/portfolio/large/3.jpg', 'img/portfolio/large/4.jpg', 'img/portfolio/large/11.jpg'],
			        'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['All, BCI']
				},


				{
					'title' : 'Lorem Nirs Ipsum',
					'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
					'thumbnail' : ['img/portfolio/small/17.jpg', 'img/portfolio/small/18.jpg', 'img/portfolio/small/19.jpg', 'img/portfolio/small/20.jpg'],
					'large' : ['img/portfolio/large/17.jpg', 'img/portfolio/large/18.jpg', 'img/portfolio/large/19.jpg', 'img/portfolio/large/20.jpg'],
					'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['NIRS', 'All']
				},

				{
					'title' : 'Lorem Nirs Ipsum',
					'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
					'thumbnail' : ['img/portfolio/small/13.jpg', 'img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
					'large' : ['img/portfolio/large/13.jpg', 'img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
					'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['NIRS', 'All']
				},

				{
					'title' : 'Lorem Nirs Ipsum',
					'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
					'thumbnail' : ['img/portfolio/small/7.jpg', 'img/portfolio/small/8.jpg', 'img/portfolio/small/9.jpg', 'img/portfolio/small/10.jpg'],
					'large' : ['img/portfolio/large/7.jpg', 'img/portfolio/large/8.jpg', 'img/portfolio/large/9.jpg', 'img/portfolio/large/10.jpg'],
					'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['NIRS', 'All']
				},

				{
					'title' : 'Lorem Nirs Ipsum',
					'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
					'thumbnail' : ['img/portfolio/small/16.jpg', 'img/portfolio/small/13.jpg', 'img/portfolio/small/14.jpg', 'img/portfolio/small/15.jpg', 'img/portfolio/small/16.jpg'],
					'large' : ['img/portfolio/large/16.jpg', 'img/portfolio/large/13.jpg', 'img/portfolio/large/14.jpg', 'img/portfolio/large/15.jpg', 'img/portfolio/large/16.jpg'],
					'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['NIRS', 'All']
				},

				{
					'title' : 'Lorem BCI Ipsum',
					'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
					'thumbnail' : ['img/portfolio/small/18.jpg', 'img/portfolio/small/18.jpg', 'img/portfolio/small/19.jpg', 'img/portfolio/small/20.jpg'],
					'large' : ['img/portfolio/large/18.jpg', 'img/portfolio/large/18.jpg', 'img/portfolio/large/19.jpg', 'img/portfolio/large/20.jpg'],
					'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['BCI', 'All']
				},

				{
					'title' : 'Lorem Stimulation Ipsum',
					'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
					'thumbnail' : ['img/portfolio/small/11.jpg', 'img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
					'large' : ['img/portfolio/large/11.jpg', 'img/portfolio/large/15.jpg',  'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
					'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['Brain Stimulation', 'All']
				},

				{
					'title' : 'Lorem Implants Ipsum',
					'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
					'thumbnail' : ['img/portfolio/small/3.jpg', 'img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
					'large' : ['img/portfolio/large/3.jpg', 'img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
					'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['Implants', 'All']
				},

				{
					'title' : 'Lorem Brain Stimulation Ipsum',
					'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
					'thumbnail' : ['img/portfolio/small/5.jpg', 'img/portfolio/small/8.jpg', 'img/portfolio/small/9.jpg', 'img/portfolio/small/10.jpg'],
					'large' : ['img/portfolio/large/5.jpg', 'img/portfolio/large/8.jpg', 'img/portfolio/large/9.jpg', 'img/portfolio/large/10.jpg'],
					'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['Brain Stimulation', 'All']
				},

				{
					'title' : 'Lorem Brain Stimulation Ipsum',
					'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
					'thumbnail' : ['img/portfolio/small/6.jpg', 'img/portfolio/small/13.jpg', 'img/portfolio/small/14.jpg', 'img/portfolio/small/15.jpg', 'img/portfolio/small/16.jpg'],
					'large' : ['img/portfolio/large/6.jpg', 'img/portfolio/large/13.jpg', 'img/portfolio/large/14.jpg', 'img/portfolio/large/15.jpg', 'img/portfolio/large/16.jpg'],
					'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['Brain Stimulation', 'All']
				},

				{
					'title' : 'Lorem Brain Stimulation Ipsum',
					'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
					'thumbnail' : ['img/portfolio/small/8.jpg', 'img/portfolio/small/18.jpg', 'img/portfolio/small/19.jpg', 'img/portfolio/small/20.jpg'],
					'large' : ['img/portfolio/large/8.jpg', 'img/portfolio/large/18.jpg', 'img/portfolio/large/19.jpg', 'img/portfolio/large/20.jpg'],
					'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['Brain Stimulation', 'All']
				},

				{
					'title' : 'Lorem BCI Ipsum',
					'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
					'thumbnail' : ['img/portfolio/small/9.jpg', 'img/portfolio/small/15.jpg', 'img/portfolio/small/11.jpg', 'img/portfolio/small/10.jpg'],
					'large' : ['img/portfolio/large/9.jpg', 'img/portfolio/large/15.jpg', 'img/portfolio/large/11.jpg', 'img/portfolio/large/10.jpg'],
					'button_list'   :
						[
							{ 'title': 'Read More', 'url' : 'http://#' }
						],
					'tags'  : ['BCI', 'All']
				}
	 
			]
	});
});