module.exports = class PagesController extends Controller
{
	async home()
	{
		return view('pages.home', {
			cases: await Case.all(),
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
