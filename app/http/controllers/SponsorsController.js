module.exports = class SponsorsController extends Controller
{
	async index()
	{
		let page = await PageLanguage.find('sponsoring', 'uri');
		
		return view('sponsors.index', {
			title: 'Nodue',
			slogan: 'This is great!',
			sponsors: await Sponsor.all(),
			page: page.pageLanguage[0],
			shareWithLayout: false,
			
			layoutData: {
				title: 'World Servants Doetinchem',
				slogan: 'Ecuador 2021',
				items: await Page.menuItems(),
			},
		});
	}
}
