/*
 * JS for CommentMaster generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return 'd3bb6bf8-f3d1-476c-8f01-cd8b36c17e95';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "CommentMaster",
    "location": "CommentMaster.html"
}, {
    "name": "CommentDetail",
    "location": "CommentDetail.html"
}];

function CommentMaster_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'showmenue': 'CommentMaster_showmenue',
        'mobileworkarea_10': 'CommentMaster_mobileworkarea_10',
        'CommentSearchInput': 'CommentMaster_CommentSearchInput',
        'CommentList': 'CommentMaster_CommentList',
        'CommentListItem': 'CommentMaster_CommentListItem',
        'Message': 'CommentMaster_Message',
        'mobilelistitembutton_13': 'CommentMaster_mobilelistitembutton_13',
        'Author': 'CommentMaster_Author',
        'mobileworkarea_12': 'CommentMaster_mobileworkarea_12',
        'CommentActions': 'CommentMaster_CommentActions',
        'createnewComment': 'CommentMaster_createnewComment',
        'refreshCommentview': 'CommentMaster_refreshCommentview',
        'NavigationMenu': 'CommentMaster_NavigationMenu',
        'NavigationComment': 'CommentMaster_NavigationComment',
        'navigateToCommentMaster': 'CommentMaster_navigateToCommentMaster'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["CommentMaster_Comment_query_ds_onsuccess_mapping_0"] = {
        "homeScreen": "CommentMaster",
        "directions": [

        {
            "from_name": "Comment_query_ds",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "CommentList",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body']",
                "target": "$"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CommentMaster_Comment_query_ds_onsuccess_mapping_1"] = {
        "homeScreen": "CommentMaster",
        "directions": [

        {
            "from_name": "CommentList",
            "from_type": "LOCAL_STORAGE",

            "to_name": "CommentMaster",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$[i]",
                "target_transformation": function(value, element) {
                    $(element).on('click', function() {
                        localStorage['currentComment'] = JSON.stringify(value);
                        Apperyio.navigateTo('CommentDetail', {});
                    });

                },
                "target": "$['CommentListItem']"

            },

            {

                "source": "$[i]['Message']",
                "target": "$['CommentListItem']['Message:text']"

            },

            {

                "source": "$[i]['Author']",
                "target": "$['CommentListItem']['Author:text']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["CommentMaster_Comment_query_ds_onbeforesend_mapping_0"] = {
        "homeScreen": "CommentMaster",
        "directions": [

        {
            "from_name": "CommentMaster",
            "from_type": "UI",

            "to_name": "Comment_query_ds",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}"
                },
                "parameters": {
                    "where": "{'Message':{'$regex':'.*'}}"
                },
                "body": null
            },

            "mappings": [

            {

                "source": "$['CommentSearchInput:text']",
                "target_transformation": function(value) {
                    return "{'Message':{'$regex':'.*" + value + ".*', '$options': 'i'}}";
                },
                "target": "$['parameters']['where']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.Comment_query_ds = Apperyio.datasources.Comment_query_ds = new Apperyio.DataSource(db_Comment_query, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["CommentMaster_Comment_query_ds_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("CommentMaster");
        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["CommentMaster_Comment_query_ds_onsuccess_mapping_0"]);
            Apperyio.processMappingAction(Apperyio.mappings["CommentMaster_Comment_query_ds_onsuccess_mapping_1"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'CommentMaster';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var CommentMaster_onLoad = function() {
            CommentMaster_elementsExtraJS();

            CommentMaster_deviceEvents();
            CommentMaster_windowEvents();
            CommentMaster_elementsEvents();
        };

    // screen window events


    function CommentMaster_windowEvents() {

        $('#CommentMaster').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#CommentMaster').on({
            pageshow: function(event) {
                try {
                    Comment_query_ds.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });

    };

    // device events


    function CommentMaster_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function CommentMaster_elementsExtraJS() {
        // screen (CommentMaster) extra code

        /* CommentList */

        listView = $("#CommentMaster_CommentList");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#CommentMaster_CommentList .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* CommentListItem */

        /* NavigationMenu */

        listView = $("#CommentMaster_NavigationMenu");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#CommentMaster_NavigationMenu .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* NavigationComment */

    };

    // screen elements handler


    function CommentMaster_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#CommentMaster_mobileheader1 [name="showmenue"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="CommentMaster_NavigationPanel"]').panel("open");

                }
            },
        }, '#CommentMaster_mobileheader1 [name="showmenue"]');

        $(document).off("change", '#CommentMaster_mobilecontainer1 [name="CommentSearchInput"]').on({
            change: function(event) {
                console.log('value changed');
                try {
                    Comment_query_ds.execute({});
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        }, '#CommentMaster_mobilecontainer1 [name="CommentSearchInput"]');

        $(document).off("click", '#CommentMaster_mobilefooter1 [name="createnewComment"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var entity = Apperyio.getModel('Comment');
                    Apperyio.storage.currentComment.set(entity);
                    Apperyio.navigateTo('CommentDetail', {});

                    ;

                }
            },
        }, '#CommentMaster_mobilefooter1 [name="createnewComment"]');
        $(document).off("click", '#CommentMaster_mobilefooter1 [name="refreshCommentview"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        Comment_query_ds.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#CommentMaster_mobilefooter1 [name="refreshCommentview"]');

        $(document).off("click", '#CommentMaster_NavigationPanel [name="NavigationComment"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('CommentMaster');

                }
            },
        }, '#CommentMaster_NavigationPanel [name="NavigationComment"]');

    };

    $(document).off("pagebeforeshow", "#CommentMaster").on("pagebeforeshow", "#CommentMaster", function(event, ui) {
        Apperyio.CurrentScreen = "CommentMaster";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    CommentMaster_onLoad();
};

$(document).off("pagecreate", "#CommentMaster").on("pagecreate", "#CommentMaster", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    CommentMaster_js();
});