var express = require('express');
var router = express.Router();
var BuildApiFactory = require('./BuildApi/BuildAPIFactory.js');

router.get('/Build', function BuildRoot(request, response) {
    response.send('In ../Build API Root ... show index');
    //ToDo:  BuildAutoIndexer for REST. To be used in this scenario.
});

//Get All BuildAgents
router.get('/Build/BuildAgents', function SrcCtrlRoot(request, response) {
    
    var buildAgent = {
        id: "0001",
        BuildDirectory: "//Buildserver/path/xyz",
        MachineName: "BuildAgent_0001",
        Port: "7808",
        QueueCount: "0",
        Status: "Active"
    };
    
    response.send(buildAgent);

});

//Get one
router.put('/Build/BuildAgents/:MachineName', function CheckIn(request, response) {
    response.send('Get BuildAgents by MachineName');
});


//Get All BuildDefinitions
//This should be POST ??
router.get('/Build/BuildDefinition', function GetAllBuildDefinitions(request, response) {
    
    //Parse request object
    //Identify the key elements needed by the factory class
    //Input Part-1//example - TargetServer (uri), ServerType (TFS/Jenkins)
    //Parse Target server input parameters
    //Input Part-2//example - account, ProjectId, ProjectName
    
    //Using Input Part-1, we determine which API to use
    //Using Input Part-2, we get the input needed to connect to the target server
    
    //1. Parse request for json ---- Implement as node-middleware
    //2. Save in CustomRequest model/object ---- Implement as mode-middleware
    //3. Read config to get connection and related information
    //4. Use Factory class - ???? How and where to implement this ??
    //5. Factory class will give an object encapsulating the target server api and its methods
    //6. Use methods of the Target server api to perform action
    
    
    
    //1. Parse inputs
    //var ProjectName = request.params.ProjectName;
    
    //Invoke Factory 
    var BuildApiFactoryObj = new BuildApiFactory('TFS');
        
    //BuildApiFactory.constructor();
    
    switch (BuildApiFactoryObj.BuildServerType) {
        case 'TFS': {
            var BuildApiObj = BuildApiFactory.prototype.GetTFSBuildApi('', '');
        }
        //case 'JENKINS': {
        //    var BuildApiObj = BuildApiFactory.prototype.GetJenkinsBuildApi('', '');
        //}
        //case default: { };
    }
    
    var BuildDef = BuildApiObj.GetBuildDefinitions();
                                       
    response.send(BuildDef);
});

//Get BuildDefinitions by BuildServer
router.get('/Build/BuildDefinition/:BuildServer', function GetBuildDefinitionByBuildServer(request, response) {
    response.send('Get BuildDefiniotion by BuildServer');
});

//ToDo:
//Do we need POST to get all build definitions?
//router.post('/Build/BuildDefinitions')

//Add BuildDefinition
router.put('/Build/BuildDefinition', function CheckOut(request, response) {
    response.send('Add new Builddefinition');
});


module.exports = router;
