module.exports = class AboutController extends Controller
{
	async index()
	{
		let page = await PageLanguage.find('wie-wij-zijn', 'uri');
		page = page.pageLanguage[0];

		let persons = await Person.all();
		persons = persons.person;

		return view('about.show', {
			layoutData: {
				title: 'World Servants Doetinchem',
				slogan: 'Ecuador 2020',
				items: await Page.menuItems(),
			},
			page,
			persons,
		});
	}
}
