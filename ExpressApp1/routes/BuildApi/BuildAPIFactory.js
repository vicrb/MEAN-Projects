var BuildapiObj = require('./BuildApi.js');
var TFSapi = require('../../Lib/TFSBuildApi');



//private static
var some_private_static_var_for_this_module = '';



//Type definition
var BuildApiFactory = function (BuildServerType) {
    //Public vars
    this.ProjectName = '';
    this.BuildServerType = BuildServerType;
    
    //Semantic Private vars
    this._ServerName = '';
    this._ConnectionString = '';
    
    //True Private vars
    var __privateVar1 = '';
};

//Type properties and methods
BuildApiFactory.prototype = {
    
    GetTFSBuildApi: function GetTFSBuildAPI(param1, param2) {
        //Get required parameters for TFS connection
        //Create object of the TFSBuildAPI class
        //Return object of the TFSBuildAPI class
        //** The return objects to be a true factory object, must adhere to a interface??
        
        //1. Get "BuildAPI" object
        //2. Customize BuildAPI for TFS ????
        //3. return BuildAPI (TFS)
        
        TFSapiobj = new TFSapi();        
        return TFSapiobj;
    },
    
    GetJenkinsBuildApi: function GetJenkinsBuildApi(param1, param2) {
        return 'Return the JenkinsBuildAPI object';
    }
};

//Public
module.exports = BuildApiFactory;