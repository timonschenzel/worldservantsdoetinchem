module.exports = class NewsController extends Controller
{
	async index()
	{
		return view('news.index', {
			title: 'Nodue',
			slogan: 'This is great!',
			newsItems: await NewsItem.all(),
			shareWithLayout: false,
			layoutData: {
				title: 'World Servants Doetinchem',
				slogan: 'Ecuador 2021',
				items: await Page.menuItems(),
			},
		});
	}
	
	async show(/*NewsItemLanguage*/ newsItemLanguage)
	{
		return view('news.show', {
			title: 'Nodue',
			slogan: 'This is great!',
			newsItem: newsItemLanguage.newsItemLanguage[0],
			shareWithLayout: false,
			layoutData: {
				title: 'World Servants Doetinchem',
				slogan: 'Ecuador 2021',
				items: await Page.menuItems(),
			},
		});
	}
}
