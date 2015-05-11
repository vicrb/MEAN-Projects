var BuildAPI = require('../routes/BuildApi/BuildApi');

//Child object
//TFSBuildApi
function TFSBuildAPI() {
    BuildAPI.apply(this, Array.prototype.slice.call(arguments));
}

//Inherited overriding??
TFSBuildAPI.prototype = new BuildAPI;
TFSBuildAPI.prototype = {
    //Overriding
    GetBuildDefinitions: function GetBuildDefinitions() {
        //Do something here
        //Call base method
        return BuildAPI.prototype.GetBuildDefinitions();
    },
    
    GetBuildsList: function GetBuildsList() {

    },
    
    GetBuild: function GetBuild() {

    },
    
    GetBuildDetails: function GetBuildDetails() {

    },
    
    ModifyBuild: function ModifyBuild() {

    },
    
    DeleteBuild: function DeleteBuild() {

    }
}


module.exports = TFSBuildAPI;