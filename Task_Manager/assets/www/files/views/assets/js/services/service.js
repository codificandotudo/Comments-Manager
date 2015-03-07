/*
 * Service settings
 */
var db_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "54fb07b6e4b075053fad2488"
}

/*
 * Services
 */

var db_Comment_delete = new Apperyio.RestService({
    'url': '{database_url}/collections/Comment/{_id}',
    'dataType': 'json',
    'type': 'delete',

    'serviceSettings': db_settings
});

var db_Comment_create = new Apperyio.RestService({
    'url': '{database_url}/collections/Comment',
    'dataType': 'json',
    'type': 'post',
    'contentType': 'application/json',

    'serviceSettings': db_settings
});

var db_Comment_query = new Apperyio.RestService({
    'url': '{database_url}/collections/Comment',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': db_settings
});

var db_Comment_update = new Apperyio.RestService({
    'url': '{database_url}/collections/Comment/{_id}',
    'dataType': 'json',
    'type': 'put',
    'contentType': 'application/json',

    'serviceSettings': db_settings
});

var db_Comment_read = new Apperyio.RestService({
    'url': '{database_url}/collections/Comment/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': db_settings
});