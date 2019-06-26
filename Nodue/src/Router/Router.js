module.exports = class Router
{
	constructor()
	{
		this._uri = [];
		this._type = null;
		this._handler = null;
		this._routes = {
			get: [],
			post: [],
			put: [],
			patch: [],
			delete: [],
		};
		this._routeParameters = {
			get: [],
			post: [],
			put: [],
			patch: [],
			delete: [],
		};
		this.postRoutes = [];
		this._parameters = [];
		this._parameterNames = [];
	}

	uri()
	{
		return this._uri;
	}

	get(url, action, parameters = [])
	{
		this.addRoute('get', url, action, parameters);
	}

	post(url, action, parameters = [])
	{
		this.addRoute('post', url, action, parameters);
	}

	put(url, action, parameters = [])
	{
		this.addRoute('put', url, action, parameters);
	}

	patch(url, action, parameters = [])
	{
		this.addRoute('patch', url, action, parameters);
	}

	delete(url, action, parameters = [])
	{
		this.addRoute('delete', url, action, parameters);
	}

	addRoute(type, url, action, parameters = [])
	{
		this._routes[type][this.normalize(url)] = action;
		this._routeParameters[type][this.normalize(url)] = parameters;
	}

	routes()
	{
		return this._routes;
	}

	getRoute(endpoint)
	{
		return this._routes['get'][endpoint];
	}

	getRoutes()
	{
		return this._routes['get'];
	}

	postRoute(endpoint)
	{
		return this._routes['post'][endpoint];
	}

	postRoutes()
	{
		return this._routes['post'];
	}

	direct(request)
	{
		this._parameters = [];
		this._parameterNames = [];

		this._url = this.normalize(request.url);
		this._type = request.type;

		this._handler = this._routes[this._type][this._url];

		if (! this._handler) {
			this.findMatch();
		}

		return this;
	}

	normalize(url)
	{
		if (! url.startsWith('/')) {
			url = '/' + url;
		}

		return url;
	}

	findMatch()
	{
		let urlParts = this.getParts(this._url);
		let parameterName = null;

		for (let route in this._routes[this._type]) {
			parameterName = null;

			let routeParts = this.getParts(route);

			if (urlParts.length != routeParts.length) {
				continue;
			}

			let match = true;
			let count = 0;
			for (let urlPart in urlParts) {
				if (urlParts[urlPart] != routeParts[count] && ! routeParts[count].includes('{')) {
					match = false;
				}

				if (routeParts[count].includes('{')) {
					parameterName = routeParts[count].replace('{', '').replace('}', '');

					this._parameters[parameterName] = urlParts[urlPart];
					this._parameterNames.push(parameterName);
				}

				count++;
			}

			if (match) {
				this._handler = this._routes[this._type][route];

				return;
			}
		}
	}

	parameters()
	{
		return this._parameters;
	}

	parameterNames()
	{
		return this._parameterNames;
	}

	handler()
	{
		return this._handler;
	}

	getParts(url)
	{
		let parts = url.split('/');

		parts.shift();

		return parts;
	}
}