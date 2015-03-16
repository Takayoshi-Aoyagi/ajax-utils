var AjaxUtils;

(function () {

    "use strict";

    var _AjaxUtils = function () {};
    
    _AjaxUtils.ajax = function (params, callback) {
	var json, err;
	params.success = function (msg) {
	    json = msg;
	};
	params.error = function (XMLHttpRequest, textStatus, errorThrown) {
	    err = {
		XMLHttpRequest: XMLHttpRequest,
		textStatus: textStatus,
		errorThrown: errorThrown
	    };
	};
	params.complete = function () {
	    callback(err, json);
	};
	$.ajax(params);
    };

    _AjaxUtils.get = function (params, callback) {
	params.type = "GET";
	_AjaxUtils.ajax(params, callback);
    };

    _AjaxUtils.post = function (params, callback) {
	params.type = "POST";
	_AjaxUtils.ajax(params, callback);
    };

    _AjaxUtils.put = function (params, callback) {
	params.type = "PUT";
	_AjaxUtils.ajax(params, callback);
    };

    _AjaxUtils.delete = function (params, callback) {
	params.type = "DELETE";
	AjaxUtils.ajax(params, callback);
    };

    AjaxUtils = _AjaxUtils;
})();
