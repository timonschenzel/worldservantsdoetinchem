module.exports = class CasesController extends Controller
{
	async index()
	{
		return view('cases.index', {
			title: 'Nodue',
			slogan: 'This is great!',
			cases: await Case.all(),
			shareWithLayout: false,
			layoutData: {
				title: 'World Servants Doetinchem',
				slogan: 'Ecuador 2021',
				items: await Page.menuItems(),
			},
		});
	}
	
	async show(/*CaseLanguage*/ caseLanguage)
	{
		return view('cases.show', {
			title: 'Nodue',
			slogan: 'This is great!',
			caseItem: caseLanguage.caseLanguage[0],
			shareWithLayout: false,
			layoutData: {
				title: 'World Servants Doetinchem',
				slogan: 'Ecuador 2021',
				items: await Page.menuItems(),
			},
		});
	}
}
