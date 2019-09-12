Route.get('/', 'PagesController@home');

Route.get('/wie-wij-zijn', 'AboutController@index');

Route.get('/acties', 'CasesController@index');
Route.get('/acties/{caseLanguage}', 'CasesController@show');

Route.get('/nieuws', 'NewsController@index');
Route.get('/nieuws/{newsItemLanguage}', 'NewsController@show');

Route.get('/sponsoring', 'SponsorsController@index');

Route.get(`/{pageLanguage}`, 'PagesController@show');



// (async () => {
// 	let menuItemIds = [];
// 	let menuNames = [];
// 	let menuItemsLanguage;
// 	let menuItems = await Page.where('hide', 0).where('level', 1).orderBy('position', 'asc').fetchAll();
	
// 	menuItems.each(item => {
// 		menuItemIds.push(item.get('page_id'));
// 	});

// 	menuItemsLanguage = await PageLanguage.query(qb => {
// 		qb.whereIn('page_id', menuItemIds);
// 	}).fetchAll();
	
// 	menuItemsLanguage.each(item => {
// 		menuNames.push({id: item.get('page_id'), name: item.get('menu_name'), slug: slugify(item.get('menu_name'))});
// 	});

// 	menuNames.forEach(menu => {
// 		Route.get(`/${menu.slug}`, 'PagesController@show', {page: menu.id});
// 	});
// })();
