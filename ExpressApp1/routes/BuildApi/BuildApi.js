//Build API
//Parent object

//Module Private vars
var privatevar = '';

//Type /Class module
function BuildAPI(){
    //Common properties between different types of build tools (TFS and Jenkins)

    //Type Public vars
    this.PublicVar = '';

    //Type Private vars *Don't use unless really necessary
    //var TypePrivateVar = '';
}

//Type Public Methods (and never prototyped properties!)
BuildAPI.prototype = {
    //Common methods and behavior 
    //between different types of build tools (TFS and Jenkins)
    //Only implement if it holds good for any instance type (TFS, Jen, ...n)

    GetBuildDefinitions: function GetBuildDefinitions(){

    },

    GetBuildsList: function GetBuildsList(){

    },

    GetBuild: function GetBuild(){

    },

    GetBuildDetails: function GetBuildDetails(){

    },

    ModifyBuild: function ModifyBuild(){

    },

    DeleteBuild: function DeleteBuild(){

    }

}
module.exports = BuildAPI;


//Child object
//TFSBuildApi
function TFSBuildAPI(){
    BuildAPI.apply(this, Array.prototype.slice.call(arguments));
}

//Inherited overriding??
TFSBuildAPI.prototype = new BuildAPI;
TFSBuildAPI.prototype = {
    //Overriding
    GetBuildDefinitions: function GetBuildDefinitions() {
        //Do something here
        //Call base method
        BuildAPI.prototype.GetBuildDefinitions();
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
