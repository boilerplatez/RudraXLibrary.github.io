utils.config.set({
	debug : true,
	contextPath : CONTEXT_PATH,
	resourcePath : 'resources',
	bundle_list : "/mangospring/web/resources.json?cb=utils.updateBundle&$=*&",
	moduleDir : {
		'usertable.*' : 'page/',
		'test.*' : 'test/'
	},
	template : 'folader',
	combine : false,
	TAG_ATTR : {
		DATA_PATH : 'rx-path',
		DATA_ONCHANGE : 'rx-onchange',
		DATA_ONCLICK : 'rx-click',
		DATA_FORMAT : 'data-format'
	}
});
