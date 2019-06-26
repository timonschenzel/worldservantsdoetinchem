module.exports = class PagesController extends Controller
{
	// async init()
	// {
	// 	this.menuItems = await graphqlClient.request(`
	// 	{
	// 		page (sub_id: 0, level: 1, hide: 0) {
	// 			page_id
	// 			sub_id
	// 			level
	// 			hide
	// 			position,
	// 			languages {
	// 				menu_name,
	// 				uri
	// 			}
	// 		}
	// 	}
	// `);
	// // console.log(this.menuItems);

	// 	this.menuItems = this.menuItems.page.map(item => {
	// 		return item.languages[0];
	// 	});
	// }

	async home()
	{
		return view('pages.home', {
			showDiv: true,
			title: 'Nodue',
			slogan: 'This is great!',
			text: 'Welcome World',
			items: [
				'Go to the store',
				'Shopping?',
				'Sleeping',
			],
			newItem: '',
			shareWithLayout: false,
			layoutData: {
				title: 'World Servants Doetinchem',
				slogan: 'Ecuador 2020',
				items: await Page.menuItems(),
			},
		});
	}

	async show(/*PageLanguage*/ pageLanguage)
	{
		return view('pages.show', {
			showDiv: true,
			title: 'Nodue',
			slogan: 'This is great!',
			page: pageLanguage.pageLanguage[0],
			shareWithLayout: false,
			layoutData: {
				title: 'World Servants Doetinchem',
				slogan: 'Ecuador 2020',
				items: await Page.menuItems(),
			},
		});
	}

	foo()
	{
		return 'foo';
	}

	bar()
	{
		return 'bar';
	}

	contact(/*Controller*/ controller, message)
	{
		controller.testing();
		return `Contact page 2, message: ${message}`;
	}

	hello()
	{
		return 'Hello World.';
	}
}
