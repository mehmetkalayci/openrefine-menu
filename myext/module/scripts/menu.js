ExtensionBar.addExtensionMenu({
	"id": "extbar1",
	"label": "ExtBar Menu Items",
	"submenu": [{
			"id": "extbar1/item-1",
			"label": "ExtBar Menu Item 1",
			click: {
				
			}
		},
		{},
		{
			"id": "extbar1/item-2",
			"label": "ExtBar Menu Item 2",
			click: {}
		},

	]
});


DataTableColumnHeaderUI.extendMenu(function(column, columnHeaderUI, menu) { 
	MenuSystem.appendTo(menu, "", [
		{ /* separator */ },
        {
            id: "extmenu/item-1",
            label: "**MY MENU on " + column.name,
            click: function() {},
			width: "350px",
        },
    ]);
});
